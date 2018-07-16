import { DatePicker } from "antd";
import schemaFormReact from "fx-schema-form-react";
import { DefaultProps } from "fx-schema-form-react/libs/components";
import { UtilsHocOutProps } from "fx-schema-form-react/libs/hocs/utils";
import { ValidateHocOutProps } from "fx-schema-form-react/libs/hocs/validate";
import { fromJS } from "immutable";
import moment, { Moment } from "moment";
import React, { PureComponent } from "react";

const { schemaFormTypes } = schemaFormReact;
const format = "YYYY-MM-DD";

export interface IProps extends DefaultProps, UtilsHocOutProps, ValidateHocOutProps {
}

export const widgetKey = "date";
export class Widget extends PureComponent<IProps, any> {


    public render(): JSX.Element | null {
        const { getOptions, uiSchema, getTitle, formItemMeta, updateItemData, updateItemMeta } = this.props;
        const metaOptions = formItemMeta ? formItemMeta.getIn(["options", schemaFormTypes.widget, widgetKey]) : fromJS({});
        const widgetOptions = getOptions(this.props, schemaFormTypes.widget, widgetKey, metaOptions);

        if (!uiSchema) {
            return null;
        }

        return (
            <DatePicker
                {...(widgetOptions.options || {})}
                {...this.setDefaultProps(widgetOptions)}
                placeholder={getTitle(this.props)}
                onChange={(date: Moment, dateString: string) => {
                    const dateStr = date ? date.format(widgetOptions.options.format || format) : "";

                    updateItemData(this.props, dateStr);
                    updateItemMeta(this.props, dateStr);
                }} />
        );
    }

    private setDefaultProps(widgetOptions: any): any {
        const props: any = {};

        if (this.props.formItemData) {
            props.value = moment(this.props.formItemData, widgetOptions.options.format || format);
        } else {
            props.value = null;
        }

        return props;
    }
}

export default {
    [widgetKey]: Widget
};
