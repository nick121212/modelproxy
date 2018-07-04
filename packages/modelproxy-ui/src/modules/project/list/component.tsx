// import classNames from "classnames";
// import { CommandBarButton } from "office-ui-fabric-react/lib/Button";
import { buildColumns, ConstrainMode, DetailsList, DetailsListLayoutMode, IColumn, Selection } from "office-ui-fabric-react/lib/DetailsList";
import { Icon } from "office-ui-fabric-react/lib/Icon";
// import { ProgressIndicator } from "office-ui-fabric-react/lib/ProgressIndicator";
import React from "react";

import { getLinkItem, LinkGroup, MainPanel } from "../../../fabric";
import { IProps } from "./constants";
import { hoc } from "./container";

export class Component extends React.PureComponent<IProps, any>{
    private selection: Selection = new Selection();

    constructor(props: IProps, content: any) {
        super(props, content);

        this.state = {
            columns: this._buildColumns([])
        };
    }

    public _buildColumns(items: any[]) {
        const columns = buildColumns(items, true, undefined, "key", true, undefined, true).map((col: IColumn) => {

            Reflect.deleteProperty(col, "minWidth");
            Reflect.deleteProperty(col, "maxWidth");

            if (col.fieldName === "key") {
                col.isCollapsable = true;
                col.onColumnClick = () => {
                    col.isSorted = true;
                    col.isSortedDescending = !col.isSortedDescending;
                }
            }

            return col;
        });

        return columns;
    }

    public render() {
        const { match, history, listData, fetchListData } = this.props;
        const { loaded = false, loading = false, data = {} } = listData ? listData.toJS() : {};

        if (loaded && data && data.total) {
            this.selection.setItems(data.models, false);
        }

        return (
            <MainPanel className="w-100 flex pa0 flex-column"
                toolbar={
                    <LinkGroup items={[
                        getLinkItem("新建项目", "Add", () => {
                            history.replace(`${match.path}/create`);
                        }, {
                                disabled: loading
                            }),
                        getLinkItem("刷新列表", "Refresh", () => {
                            if (fetchListData) {
                                fetchListData();
                            }
                        }, {
                                disabled: loading
                            })
                    ]} />
                }>
                {
                    (loaded && data && data.total) ?
                        <DetailsList
                            className="h-100 w-100"
                            setKey="id"
                            layoutMode={DetailsListLayoutMode.fixedColumns}
                            constrainMode={ConstrainMode.horizontalConstrained}
                            items={data ? data.models : []}
                            columns={this._buildColumns(data ? data.models : [])}
                            isHeaderVisible={true}
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
