import classnames from "classnames";
import { DetailsList, IColumn, IDetailsListProps, Selection } from "office-ui-fabric-react/lib/DetailsList";
import { Dropdown, IDropdownOption } from 'office-ui-fabric-react/lib/Dropdown';
import { Label } from "office-ui-fabric-react/lib/Label";
import { MarqueeSelection } from "office-ui-fabric-react/lib/MarqueeSelection";
import React, { PureComponent } from "react";

import { getLinkItem, LinkGroup } from "../";

export interface IProps extends IDetailsListProps {
    disabled?: boolean;
    pagination?: any;
    pageSizeList?: number[],
    onSelectionChanged?: (count: number, items: any[]) => void;
    onSortChanged?: (column: ITableColumn) => void;
    onPaginationChanged?: (curPage: number, pageSize: number) => void;
}

export interface IState {
    columns: ITableColumn[] | undefined;

    sortKey?: string;
    isSortedDescending?: boolean;
}

export interface ITableColumn extends IColumn {
    canSort?: boolean;
}

/**
 * 拦截Link组件，劫持onMouseOver和onMouseOut事件
 */
export default class Component extends PureComponent<IProps, IState>{
    private selection: Selection;

    constructor(props: IProps, context: IState) {
        super(props, context);

        const { onSelectionChanged, onSortChanged, columns, selectionMode } = props;

        // 初始化选择组件
        this.selection = new Selection({
            selectionMode,
            onSelectionChanged: () => {
                const selectionCount = this.selection.getSelectedCount();
                const selectionItems = this.selection.getSelection();

                if (onSelectionChanged) {
                    onSelectionChanged(selectionCount, selectionItems);
                }
            }
        });

        this.state = { columns };

        if (columns) {
            columns.map((column: ITableColumn) => {
                const onColumnClick = column.onColumnClick;

                column.onColumnClick = (ev: React.MouseEvent<HTMLElement>) => {
                    const isSortedDescending = column.isSortedDescending;

                    columns.map((col: ITableColumn) => {
                        Reflect.deleteProperty(col, "isSorted");
                        Reflect.deleteProperty(col, "isSortedDescending");

                        return column;
                    });

                    if (onColumnClick) {
                        onColumnClick(ev, column);
                    }

                    if (column.canSort) {
                        column.isSorted = true;
                        column.isSortedDescending = !isSortedDescending;
                        if (onSortChanged) {
                            onSortChanged(column);
                        }
                    }

                    this.setState({ columns: columns.concat([]) });
                };

                return column;
            });
        }
    }

    public render() {
        const { children, disabled, className, pagination, onPaginationChanged = (p: number, pa: number) => void (0), pageSizeList = [10, 30, 50, 100], ...extraProps } = this.props;
        const { total = 0, hasNext = false, hasPrev = false, curPage = 0, totalPage = 0, pageSize = 10 } = pagination || {};

        return (
            <div className={classnames("flex flex-column h-100", className)}>
                <MarqueeSelection selection={this.selection} className="flex-auto overflow-auto">
                    <DetailsList
                        {...extraProps}
                        selection={this.selection} />
                </MarqueeSelection>

                <div className="pa2 bt b--light-gray flex w-100 items-center shrink-0">
                    <Label className="flex-auto ml1">当前第{curPage}页 共{total}条数据</Label>
                    <div className="">
                        <Dropdown
                            disabled={disabled}
                            selectedKey={pageSize}
                            calloutProps={{
                                directionalHintFixed: false // Allows the dropdown to render above the text box when there is too little room to render the options well
                            }}
                            options={pageSizeList.map((n: number) => {
                                return {
                                    key: n,
                                    text: n.toString()
                                };
                            })}
                            onChanged={(option?: IDropdownOption, index?: number) => {
                                const { key = 0 } = option || {};

                                if (key) {
                                    onPaginationChanged(curPage, 1 * (key as number));
                                }
                            }}
                        />
                    </div>
                    <div>
                        <LinkGroup items={[
                            getLinkItem(undefined, undefined, () => void (0), {
                                width: 40,
                                disabled: !hasPrev || disabled,
                                onClick: () => {
                                    onPaginationChanged(1, pageSize);
                                },
                                iconProps: {
                                    iconName: "Previous",
                                    className: "f4"
                                }
                            }),
                            getLinkItem(undefined, "ChevronLeftMed", () => void (0), {
                                width: 40,
                                onClick: () => {
                                    onPaginationChanged(curPage - 1, pageSize);
                                },
                                disabled: !hasPrev || disabled,
                            }),
                            getLinkItem(undefined, "ChevronRightMed", () => void (0), {
                                width: 40,
                                disabled: !hasNext || disabled,
                                onClick: () => {
                                    onPaginationChanged(curPage + 1, pageSize);
                                }
                            }),
                            getLinkItem(undefined, undefined, () => void (0), {
                                width: 40,
                                disabled: !hasNext || disabled,
                                iconProps: {
                                    iconName: "Next",
                                    className: "f4"
                                },
                                onClick: () => {
                                    onPaginationChanged(totalPage, pageSize);
                                }
                            }),
                        ]} />
                    </div>
                </div>
            </div>
        );
    }
}
