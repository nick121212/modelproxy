import { Input } from "antd";
import schemaFormReact from "fx-schema-form-react";
import { DefaultProps } from "fx-schema-form-react/libs/components";
import { UtilsHocOutProps } from "fx-schema-form-react/libs/hocs/utils";
import { ValidateHocOutProps } from "fx-schema-form-react/libs/hocs/validate";
import { fromJS } from "immutable";
import React, { ChangeEvent, PureComponent } from "react";

const { schemaFormTypes } = schemaFormReact;

export interface IProps extends DefaultProps, UtilsHocOutProps, ValidateHocOutProps {
}

export const widgetKey = "text";

export class Widget extends PureComponent<IProps, any> {
    private count: number = 0;


    public render(): JSX.Element | null {
        const { getOptions, uiSchema, formItemMeta, updateItemData, updateItemMeta } = this.props;
        const metaOptions = formItemMeta ? formItemMeta.getIn(["options", schemaFormTypes.widget, widgetKey]) : fromJS({});
        const widgetOptions = getOptions(this.props, schemaFormTypes.widget, widgetKey, metaOptions);

        if (!uiSchema) {
            return null;
        }

        return (
            <Input
                {...(widgetOptions.options || {})}
                {...this.setDefaultProps()}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    this.count++;
                    updateItemData(this.props, e.target.value);
                }} onBlur={() => {
                    if (this.count > 0) {
                        this.count = 0;
                        updateItemMeta(this.props, this.props.formItemData);
                    }
                }} />
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
    [widgetKey]: Widget,
    "string": Widget,
    "default": Widget
};
