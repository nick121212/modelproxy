import Immutable from "immutable";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose, lifecycle, withHandlers } from "recompose";

import { IProps, proxySettings, reducerKeys } from "./constants";
import { listDataRed } from "./redux";

const mapStateToProps = (state: Immutable.Map<string, any>, ownProps: IProps) => {
    return {
        listData: state.getIn([...reducerKeys, "listData"])
    };
};

export const hoc = compose<IProps, any>(
    withRouter,
    connect(mapStateToProps),
    withHandlers({
        fetchListData: () => {
            return async () => {
                listDataRed.actions.execute({
                    settings: {
                        timeout: 10000
                    }
                }, Object.assign({}, proxySettings.project));
            }
        }
    }),
    lifecycle<any, any>({
        componentDidMount() {
            this.props.fetchListData();
        }
    })
);
