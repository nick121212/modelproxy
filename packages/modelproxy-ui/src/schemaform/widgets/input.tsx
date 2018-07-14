import { Input } from "antd";
import { DefaultProps } from "fx-schema-form-react/libs/components";
import { UtilsHocOutProps } from "fx-schema-form-react/libs/hocs/utils";
import { ValidateHocOutProps } from "fx-schema-form-react/libs/hocs/validate";
import { FxUiSchema, schemaFormTypes } from "fx-schema-form-react/libs/models";
import React, { PureComponent, SyntheticEvent } from "react";

export const name = "text";

export interface IAntdInputWidgetProps extends DefaultProps, UtilsHocOutProps, ValidateHocOutProps {
}

export class Widget extends PureComponent<IAntdInputWidgetProps, any> {
    private count = 0;


    public render(): JSX.Element {
        const { getOptions, uiSchema, getTitle, updateItemData, updateItemMeta } = this.props;
        const { readonly = false } = uiSchema as FxUiSchema;

        return (
            <Input
                onBlur={() => {
                    if (this.count > 0) {
                        updateItemMeta(this.props, this.props.formItemData);
                    }
                }}
                onChange={(e: SyntheticEvent<HTMLInputElement>) => {
                    this.count++;
                    updateItemData(this.props, e.currentTarget.value);
                }}
                disabled={readonly}
                placeholder={getTitle(this.props)}
                {...getOptions(this.props, schemaFormTypes.widget, name).options}
                {...this.setDefaultProps()} />
        );
    }

    private setDefaultProps(): any {
        const props: any = {};

        if (this.props.formItemData !== undefined) {
            props.value = this.props.formItemData;
        } else {
            props.value = "";
        }

        return props;
    }
}

export default {
    [name]: Widget,
    "default": Widget,
    "string": Widget,
};

