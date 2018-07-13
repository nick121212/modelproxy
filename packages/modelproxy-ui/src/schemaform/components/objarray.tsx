import schemaFormReact from "fx-schema-form-react";
import { DefaultProps } from "fx-schema-form-react/libs/components";
import { IconButton } from "office-ui-fabric-react/lib/Button";
import { Icon } from "office-ui-fabric-react/lib/Icon";
import React from "react";
import { compose, setDisplayName, shouldUpdate } from "recompose";

import { IObjArrayProps } from "../hocs/objarray";

const { hocFactory } = schemaFormReact;

/**
 * 数组HOC中用到的操作按钮组件
 */
@(compose(
    setDisplayName("ObjArrayComponent"),
    shouldUpdate(() => false),
    hocFactory.get("utils")(),
    hocFactory.get("validate")(),
    hocFactory.get("objarray")(),
    hocFactory.get("data")({
        data: true
    })
) as any)
export class ObjArrayComponent extends React.PureComponent<DefaultProps & IObjArrayProps> {
    private addItem: any;
    private hideItems: any;

    constructor(props: DefaultProps & IObjArrayProps) {
        super(props);

        this.addItem = () => {
            if (props.addProperty) {
                props.addProperty(this.props, this.props.formItemData ? this.props.formItemData.toJS() : {});
            }
        };
        this.hideItems = (collapsing: boolean) => {
            props.updateItemMeta(props, null, {
                collapsing
            });
        };
    }

    public render() {
        const { formItemMeta } = this.props;
        const { collapsing = false } = formItemMeta ? formItemMeta.toJS() : {};

        return (
            <div key="opt" className="opt1">
                <IconButton onClick={this.addItem}>
                    <Icon iconName="Add" />
                </IconButton>
                <IconButton key={"collapsing" + collapsing} onClick={() => {
                    this.hideItems(!collapsing);
                }}>
                    <Icon iconName={collapsing ? "Lock" : "UnLock"} />
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

