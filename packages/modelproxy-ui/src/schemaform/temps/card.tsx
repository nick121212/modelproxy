import classNames from "classnames";
import { DefaultProps } from "fx-schema-form-react/libs/components";
import { ArrayHocOutProps } from "fx-schema-form-react/libs/hocs/array";
import { UtilsHocOutProps } from "fx-schema-form-react/libs/hocs/utils";
import { schemaFormTypes } from "fx-schema-form-react/libs/models";
import { fromJS } from "immutable";
import { Label } from "office-ui-fabric-react/lib/Label";
import React, { PureComponent } from "react";

export interface IProps extends DefaultProps, UtilsHocOutProps, ArrayHocOutProps {
}

export const tempKey = "card";
export class Temp extends PureComponent<IProps> {
  public render(): any {
    const { children, uiSchema, getOptions, getTitle, formItemMeta = fromJS({}), initArrayComponent, arrayIndex } = this.props;
    const tempOptions = getOptions(this.props, schemaFormTypes.template, tempKey);
    const { isValid = true, errorText = "", collapsing = false } = formItemMeta.toJS();

    if (!uiSchema) {
      return null;
    }

    return (
      <div className={classNames("mb3", tempOptions.className, { "error": !isValid })}>

        <div className={classNames("flex items-center", { "mt2": tempOptions.showTitle })}>
          {
            <Label className={classNames("f6 mv1 black fw4 flex-auto", { "red": !isValid })}>
              {tempOptions.showTitle !== false ? getTitle(this.props) : ""}
            </Label>
          }
          <div>
            {initArrayComponent ? initArrayComponent(this.props, arrayIndex) : null}
          </div>
        </div>

        {
          collapsing ? null : <div className="pl4">
            {children}

            {
              !isValid ? <span className="dib f7 red mv1">
                {errorText}
              </span> : null
            }
          </div>
        }


      </div>
    );
  }
}

export default {
  [tempKey]: Temp
};
