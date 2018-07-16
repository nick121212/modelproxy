import { Button, Tooltip } from "antd";
import schemaFormReact from "fx-schema-form-react";
import { DefaultProps } from "fx-schema-form-react/libs/components";
import { ArrayHocOutProps } from "fx-schema-form-react/libs/hocs/array";
import { UtilsHocOutProps } from "fx-schema-form-react/libs/hocs/utils";
import { ValidateHocOutProps } from "fx-schema-form-react/libs/hocs/validate";
import React from "react";
import { compose } from "recompose";

const { hocFactory } = schemaFormReact;

/**
 * 数组HOC中用到的操作按钮组件
 */
@(compose(
    hocFactory.get("validate")(),
    hocFactory.get("array")()
) as any)
export class ArrayItemComponent extends React.PureComponent<DefaultProps & UtilsHocOutProps & ValidateHocOutProps & ArrayHocOutProps> {
    private removeItem: () => void;
    private moveTo: (index: number) => void;

    public render() {
        const { uiSchema, arrayIndex = 0 } = this.props;

        if (!uiSchema) {
            return null;
        }

        this.removeItem = () => {
            this.props.removeItem(this.props.parentKeys, this.props.getPathKeys(uiSchema.keys as any, "../"), arrayIndex);
        };
        this.moveTo = (index: number) => {
            this.props.moveItem(this.props.parentKeys, this.props.getPathKeys(uiSchema.keys as any, "../"), arrayIndex, index);
        };

        return (
            <div key="opt">
                <Tooltip title="删除项">
                    <Button aria-label="Remove" shape="circle" type="danger" ghost={true} icon="minus" onClick={this.removeItem} />
                </Tooltip>
                <Tooltip title="上移">
                    <Button aria-label="moveUp" shape="circle" ghost={true} icon="minus" onClick={() => {
                        this.moveTo(arrayIndex - 1);
                    }} />
                </Tooltip>
                <Tooltip title="下移">
                    <Button aria-label="moveDown" shape="circle" ghost={true} icon="minus" onClick={() => {
                        this.moveTo(arrayIndex + 1);
                    }} />
                </Tooltip>
            </div>
        );
    }
}
