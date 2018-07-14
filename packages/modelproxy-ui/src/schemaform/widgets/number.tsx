import { InputNumber } from "antd";
import { DefaultProps } from "fx-schema-form-react/libs/components";
import { UtilsHocOutProps } from "fx-schema-form-react/libs/hocs/utils";
import { ValidateHocOutProps } from "fx-schema-form-react/libs/hocs/validate";
import { FxUiSchema, schemaFormTypes } from "fx-schema-form-react/libs/models";
import { fromJS } from "immutable";
import React, { PureComponent } from "react";

export const name = "number";

export interface IAntdInputWidgetProps extends DefaultProps, UtilsHocOutProps, ValidateHocOutProps {
}

export class Widget extends PureComponent<IAntdInputWidgetProps, any> {
    private count = 0;



    public render(): JSX.Element {
        const { getOptions, uiSchema, getTitle, formItemMeta, updateItemData, updateItemMeta } = this.props;
        const metaOptions = formItemMeta ? formItemMeta.getIn(["options", schemaFormTypes.widget, name]) : fromJS({});

        const { readonly = false } = uiSchema as FxUiSchema;

        return (
            <InputNumber
                onBlur={() => {
                    if (this.count > 0) {
                        updateItemMeta(this.props, this.props.formItemData);
                    }
                }}
                onChange={(val: number) => {
                    this.count++;
                    updateItemData(this.props, val);
                }}
                disabled={readonly}
                placeholder={getTitle(this.props)}
                {...getOptions(this.props, schemaFormTypes.widget, name, metaOptions).options}
                {...this.setDefaultProps()} />
        );
    }

    private setDefaultProps(): any {
        const props: any = {};

        if (this.props.formItemData !== undefined) {
            props.value = this.props.formItemData;
        } else {
            props.value = 0;
        }

        return props;
    }
}

export default {
    [name]: Widget,
    "integer": Widget
};

