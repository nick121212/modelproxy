// import classNames from "classnames";
// import { CommandBarButton } from "office-ui-fabric-react/lib/Button";
import { buildColumns, ConstrainMode, DetailsListLayoutMode, SelectionMode } from "office-ui-fabric-react/lib/DetailsList";
import { Icon } from "office-ui-fabric-react/lib/Icon";
// import { ProgressIndicator } from "office-ui-fabric-react/lib/ProgressIndicator";
import React from "react";

import { getLinkItem, ITableColumn, LinkGroup, MainPanel, Table } from "../../../fabric";
import { IProps } from "./constants";
import { hoc } from "./container";

export class Component extends React.PureComponent<IProps, any>{

    constructor(props: IProps, content: any) {
        super(props, content);

        this.state = {
            columns: this._buildColumns([])
        };
    }

    public _buildColumns(items: any[]) {
        const columns = buildColumns(items, true, undefined, "", false, undefined, true).map((col: ITableColumn) => {
            Reflect.deleteProperty(col, "maxWidth");
            col.canSort = true;

            return col;
        });

        return columns;
    }

    public render() {
        const { match, history, listData, fetchListData, paginationData } = this.props;
        const { loaded = false, loading = false, data = {} } = listData ? listData.toJS() : {};
        const { curPage = 1, pageSize = 10 } = paginationData ? paginationData.toJS() : {};

        return (
            <MainPanel className="w-100 flex pa0 flex-column overflow-hidden"
                toolbar={
                    <LinkGroup items={[
                        getLinkItem("新建项目", "Add", () => {
                            history.replace(`${match.path}/create`);
                        }, {
                                disabled: loading
                            }),
                        getLinkItem("刷新列表", "Refresh", () => {
                            if (fetchListData) {
                                fetchListData(curPage, pageSize);
                            }
                        }, {
                                disabled: loading
                            })
                    ]} />
                }>
                {
                    (loaded && data && data.total) ?
                        <Table
                            disabled={loading}
                            onSelectionChanged={console.log}
                            onSortChanged={console.log}
                            onPaginationChanged={(page: number, ps: number) => {
                                if (fetchListData) {
                                    fetchListData(page, ps);
                                }
                            }}
                            pagination={paginationData ? paginationData.toJS() : {}}
                            className="h-100 w-100 flex-auto"
                            setKey="id"
                            layoutMode={DetailsListLayoutMode.fixedColumns}
                            constrainMode={ConstrainMode.horizontalConstrained}
                            items={data ? data.models : []}
                            columns={this._buildColumns(data ? data.models : [])}
                            isHeaderVisible={true}
                            selectionMode={SelectionMode.single}
                            selectionPreservedOnEmptyClick={true}
                            enterModalSelectionOnTouch={true}
                        /> :
                        (
                            <div className="pa4 w-100 tc">
                                <Icon iconName="ProjectCollection" className="db f-6" />
                                <div>
                                    项目列表为空
                                </div>
                            </div>
                        )
                }
            </MainPanel>
        );
    }
}

export default hoc(Component as any);
