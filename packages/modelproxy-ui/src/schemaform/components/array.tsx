import schemaFormReact from "fx-schema-form-react";
import { DefaultProps } from "fx-schema-form-react/libs/components";
import { IconButton } from "office-ui-fabric-react/lib/Button";
import { Icon } from "office-ui-fabric-react/lib/Icon";
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
                <IconButton disabled={!canAdd} onClick={this.addItem}>
                    <Icon iconName="Add" />
                </IconButton>
                <IconButton key={"collapsing" + collapsing} onClick={() => {
                    this.hideItems(!collapsing);
                }}>
                    <Icon iconName={collapsing ? "Lock" : "UnLock"}/>
                </IconButton>

                {/* <Tooltip title="添加项">
                    <IconButton key={"add" + canAdd} color="primary" aria-label="Add" disabled={!canAdd} onClick={this.addItem}>
                        <Icon>add</Icon>
                    </IconButton>
                </Tooltip>
                <Tooltip title="隐藏/显示">
                    <IconButton key={"collapsing" + collapsing} aria-label="Collapsing" onClick={() => {
                        this.hideItems(!collapsing);
                    }}>
                        <Icon>{collapsing ? "keyboard_arrow_down" : "keyboard_arrow_up"}</Icon>
                    </IconButton>
                </Tooltip>*/}
            </div>
        );
    }
}

