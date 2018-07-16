import { Button, Tooltip } from "antd";
import schemaFormReact from "fx-schema-form-react";
import { DefaultProps } from "fx-schema-form-react/libs/components";
import React from "react";
import { compose, shouldUpdate } from "recompose";

const { hocFactory } = schemaFormReact;

/**
 * 数组HOC中用到的操作按钮组件
 */
@(compose(
    shouldUpdate(() => false),
    hocFactory.get("utils")(),
    hocFactory.get("validate")(),
    hocFactory.get("array")(),
    hocFactory.get("data")({
        rootReducerKey: ["schemaForm"],
        data: true,
        dataLength: true,
        meta: true
    })
) as any)
export class ArrayComponent extends React.PureComponent<DefaultProps & any> {
    private addItem: any;
    private hideItems: any;

    constructor(props: DefaultProps & any) {
        super(props);

        this.addItem = () => {
            props.addItem(this.props);
        };
        this.hideItems = (collapsing: boolean) => {
            props.updateItemMeta(props, null, {
                collapsing
            });
        };
    }

    public render() {
        const { uiSchema, formItemData, formItemMeta } = this.props;
        const { maxItems } = uiSchema;
        const { collapsing = false } = formItemMeta ? formItemMeta.toJS() : {};
        let canAdd = true;

        if (Number.isInteger(maxItems) && Number.isInteger(formItemData)) {
            canAdd = formItemData < maxItems;
        }

        return (
            <div key="opt">
                <Tooltip title="添加项">
                    <Button key={"add" + canAdd} ghost={true} shape="circle" aria-label="Add" icon="plus" type="primary" disabled={!canAdd} onClick={this.addItem} />
                </Tooltip>
                <Tooltip title="隐藏/显示">
                    <Button key={"collapsing" + collapsing}
                        type="dashed"
                        shape="circle"
                        aria-label="Collapsing"
                        icon={collapsing ? "down" : "up"}
                        onClick={() => {
                            this.hideItems(!collapsing);
                        }} />
                </Tooltip>
            </div>
        );
    }
}

