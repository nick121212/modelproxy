import schemaFormReact from "fx-schema-form-react";
import { DefaultProps } from "fx-schema-form-react/libs/components";
import { UtilsHocOutProps } from "fx-schema-form-react/libs/hocs/utils";
import { ValidateHocOutProps } from "fx-schema-form-react/libs/hocs/validate";
import { fromJS } from "immutable";
import { Toggle } from 'office-ui-fabric-react/lib/Toggle';
import React, { PureComponent } from "react";

import { isBoolean, isUndefined } from "../utils";

const { schemaFormTypes } = schemaFormReact;

export interface IProps extends DefaultProps, UtilsHocOutProps, ValidateHocOutProps {
}

export const widgetKey = "toggle";

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
            <Toggle
                disabled={readonly}
                label={getTitle(this.props).toString()}
                {...this.setDefaultProps()}
                {...widgetOptions.options}
                onChanged={async (checked: boolean) => {
                    updateItemData(this.props, checked, await validate(this.props, checked))
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
    [widgetKey]: Widget
};
