import schemaFormReact from "fx-schema-form-react";
import { DefaultProps } from "fx-schema-form-react/libs/components";
import { UtilsHocOutProps } from "fx-schema-form-react/libs/hocs/utils";
import { ValidateHocOutProps } from "fx-schema-form-react/libs/hocs/validate";
import { fromJS } from "immutable";
import { Checkbox } from 'office-ui-fabric-react/lib/Checkbox';
import React, { PureComponent } from "react";
import { isBoolean } from "util";

import { isUndefined } from "../utils";

const { schemaFormTypes } = schemaFormReact;

export interface IProps extends DefaultProps, UtilsHocOutProps, ValidateHocOutProps {
}

export const widgetKey = "checkbox";

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
            <Checkbox
                disabled={readonly}
                label={getTitle(this.props).toString()}
                {...widgetOptions.options}
                {...this.setDefaultProps()}
                onChange={async (ev?: React.FormEvent<HTMLElement | HTMLInputElement>, checked?: boolean) => {
                    updateItemData(this.props, checked, await validate(this.props, checked));
                }}
            />
        );
    }

    private setDefaultProps(): any {
        const props: any = {};
        const { formItemData } = this.props;

        props.checked = false;
        if (!isUndefined(formItemData) && isBoolean(formItemData)) {
            props.checked = formItemData;
        }
        return props;
    }
}

export default {
    [widgetKey]: Widget,
    "boolean": Widget
};
