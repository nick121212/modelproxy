import { DefaultProps } from "fx-schema-form-react/libs/components";
import { UtilsHocOutProps } from "fx-schema-form-react/libs/hocs/utils";
import { ValidateHocOutProps } from "fx-schema-form-react/libs/hocs/validate";
import { schemaFormTypes } from "fx-schema-form-react/libs/models";
import { fromJS } from "immutable";
import { DatePicker } from 'office-ui-fabric-react/lib/DatePicker';
import React, { PureComponent } from "react";

import { isString, isUndefined } from "../utils";

export interface IProps extends DefaultProps, UtilsHocOutProps, ValidateHocOutProps {
}

export const widgetKey = "date";

export class Widget extends PureComponent<IProps, any> {


    public render(): JSX.Element | null {
        const { getOptions, uiSchema, getTitle, formItemMeta = fromJS({}), updateItemData, validate } = this.props;
        const { readonly = false } = uiSchema || {};
        const metaOptions = formItemMeta ? formItemMeta.getIn(["options", schemaFormTypes.widget, widgetKey]) : fromJS({});
        const widgetOptions = getOptions(this.props, schemaFormTypes.widget, widgetKey, metaOptions);

        if (!uiSchema) {
            return null;
        }

        return (
            <DatePicker
                parseDateFromString={(dateStr: string) => {
                    return new Date(Date.parse(dateStr));
                }}
                formatDate={(date: Date) => {
                    return date.toLocaleDateString();
                }}
                disabled={readonly}
                placeholder={getTitle(this.props)}
                {...widgetOptions.options}
                {...this.setDefaultProps()}
                onSelectDate={async (date: Date | null | undefined) => {
                    const dateStr = date ? date.toLocaleDateString() : null;

                    updateItemData(this.props, dateStr, await validate(this.props, dateStr));
                }}
                errorMessage={formItemMeta.get("isValid") ? "" : formItemMeta.get("errorText")} />
        );
    }

    private setDefaultProps(): any {
        const props: any = {};
        const { formItemData } = this.props;

        if (!isUndefined(formItemData) && isString(formItemData) && formItemData) {
            props.value = new Date(Date.parse(this.props.formItemData));
        } else {
            props.value = null;
        }

        return props;
    }
}

export default {
    [widgetKey]: Widget
};
