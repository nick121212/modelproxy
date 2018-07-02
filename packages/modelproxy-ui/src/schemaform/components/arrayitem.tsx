import schemaFormReact from "fx-schema-form-react";
import { DefaultProps } from "fx-schema-form-react/libs/components";
import { ArrayHocOutProps } from "fx-schema-form-react/libs/hocs/array";
import { UtilsHocOutProps } from "fx-schema-form-react/libs/hocs/utils";
import { ValidateHocOutProps } from "fx-schema-form-react/libs/hocs/validate";
import { IconButton } from "office-ui-fabric-react/lib/Button";
import { Icon } from "office-ui-fabric-react/lib/Icon";
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
  private removeItem: any;
  private moveTo: any;

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
      <div>
        <IconButton label="删除项" title="删除项" onClick={this.removeItem}>
          <Icon iconName="Delete" />
        </IconButton>
        <IconButton title="上移" onClick={() => {
          this.moveTo(arrayIndex - 1);
        }}>
          <Icon iconName="Up" />
        </IconButton>
        <IconButton title="下移" onClick={() => {
          this.moveTo(arrayIndex + 1);
        }}>
          <Icon iconName="Down" />
        </IconButton>
      </div>
    );
  }
}
