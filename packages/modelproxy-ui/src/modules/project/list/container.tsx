import Immutable from "immutable";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose, lifecycle, withHandlers } from "recompose";

import { IProps, proxySettings, reducerKeys } from "./constants";
import { listDataRed, paginationRed } from "./redux";

const mapStateToProps = (state: Immutable.Map<string, any>, ownProps: IProps) => {
    return {
        listData: state.getIn([...reducerKeys, "listData"]),
        paginationData: state.getIn([...reducerKeys, "paginationData"]),
    };
};

export const hoc = compose<IProps, any>(
    withRouter,
    withHandlers({
        setPageInfo: () => {
            return async (total: number, curPage: number, pageSize: number) => {
                // console.log(total, curPage, pageSize)
                await paginationRed.actions.setInfo({
                    total,
                    pageSize,
                    curPage
                });
            };
        }
    }),
    connect(mapStateToProps),
    withHandlers({
        fetchListData: (props: IProps) => {

            return async (page: number = 1, pageSize: number = 10) => {
                const { setPageInfo } = props;
                // const { pageSize = 10, curPage = 1 } = paginationData ? paginationData.toJS() : {};
                const action = await listDataRed.actions.execute({
                    params: {
                        page,
                        pageSize
                    },
                    settings: {
                        timeout: 10000
                    }
                }, Object.assign({}, proxySettings.project));

                if (setPageInfo && action) {
                    const data: any = await action.payload;

                    setPageInfo(data.total, page, pageSize);
                }
            }
        }
    }),
    lifecycle<any, any>({
        componentDidMount() {
            this.props.fetchListData();
        }
    })
);
