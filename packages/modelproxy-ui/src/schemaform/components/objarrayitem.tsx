import schemaFormReact from "fx-schema-form-react";
import { DefaultProps } from "fx-schema-form-react/libs/components";
import { UtilsHocOutProps } from "fx-schema-form-react/libs/hocs/utils";
import { ValidateHocOutProps } from "fx-schema-form-react/libs/hocs/validate";
import { IconButton } from "office-ui-fabric-react/lib/Button";
import { Icon } from "office-ui-fabric-react/lib/Icon";
import React from "react";
import { compose, shouldUpdate } from "recompose";

import { IObjArrayProps } from "../hocs/objarray";

const { hocFactory } = schemaFormReact;

/**
 * 数组HOC中用到的操作按钮组件
 */
@(compose(
  shouldUpdate(() => false),
  hocFactory.get("validate")(),
  hocFactory.get("objarray")()
) as any)
export class ObjectArrayItemComponent extends React.PureComponent<DefaultProps & UtilsHocOutProps & ValidateHocOutProps & IObjArrayProps> {
  private removeItem: any;

  public render() {
    const { uiSchema, removeProperty } = this.props;
    const { keys = [] } = uiSchema || {};

    if (!uiSchema) {
      return null;
    }

    this.removeItem = () => {
      if (removeProperty) {
        removeProperty(this.props, keys.concat([]).pop() as string);
      }
    };

    return (
      <div>
        <IconButton label="删除项" title="删除项" onClick={this.removeItem}>
          <Icon iconName="Delete" />
        </IconButton>
      </div>
    );
  }
}
