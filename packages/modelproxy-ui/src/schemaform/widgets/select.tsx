import { Select } from "antd";
import { DefaultProps } from "fx-schema-form-react/libs/components";
import { UtilsHocOutProps } from "fx-schema-form-react/libs/hocs/utils";
import { ValidateHocOutProps } from "fx-schema-form-react/libs/hocs/validate";
import { schemaFormTypes } from "fx-schema-form-react/libs/models";
import { fromJS } from "immutable";
import React, { PureComponent } from "react";

export const name = "select";

export interface IAntdInputWidgetProps extends DefaultProps, UtilsHocOutProps, ValidateHocOutProps {
}

export class Widget extends PureComponent<IAntdInputWidgetProps, any> {


    public render(): JSX.Element {
        const { getOptions, uiSchema, updateItemData, validate, getTitle, formItemMeta } = this.props;
        const { readonly = false } = uiSchema || {};
        const metaOptions = formItemMeta ? formItemMeta.getIn(["options", schemaFormTypes.widget, name]) : fromJS({});
        const widgetOptions = getOptions(this.props, schemaFormTypes.widget, name, metaOptions);

        return (
            <Select
                onChange={async (value: any) => {
                    updateItemData(this.props, value, await validate(this.props, value));
                }}
                disabled={readonly}
                placeholder={getTitle(this.props)}
                {...widgetOptions.options}
                {...this.setDefaultProps()} />
        );
    }

    private setDefaultProps(): any {
        const props: any = {};

        if (this.props.formItemData !== undefined) {
            props.defaultValue = this.props.formItemData;
        }

        return { options: props };
    }
}

export default {
    [name]: Widget
};
