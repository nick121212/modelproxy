import schemaFormReact from "fx-schema-form-react";
import { DefaultProps } from "fx-schema-form-react/libs/components";
import { UtilsHocOutProps } from "fx-schema-form-react/libs/hocs/utils";
import { ValidateHocOutProps } from "fx-schema-form-react/libs/hocs/validate";
import { fromJS } from "immutable";
import { Label } from 'office-ui-fabric-react/lib/Label';
import React, { PureComponent } from "react";

import { isUndefined } from "../utils";

const { schemaFormTypes } = schemaFormReact;

export interface IProps extends DefaultProps, UtilsHocOutProps, ValidateHocOutProps {
}

export const widgetKey = "label";

export class Widget extends PureComponent<IProps, any> {


    public render(): JSX.Element | null {
        const { getOptions, uiSchema, getTitle, formItemMeta = fromJS({}) } = this.props;
        const { readonly = false, isRequired = false } = uiSchema || {};
        const metaOptions = formItemMeta ? formItemMeta.getIn(["options", schemaFormTypes.widget, widgetKey]) : fromJS({});
        const widgetOptions = getOptions(this.props, schemaFormTypes.widget, widgetKey, metaOptions);

        if (!uiSchema) {
            return null;
        }

        return (
            <Label
                disabled={readonly}
                required={isRequired}
                label={getTitle(this.props).toString()}
                {...widgetOptions.options}
                {...this.setDefaultProps()}
            />
        );
    }

    private setDefaultProps(): any {
        const props: any = {};
        const { formItemData } = this.props;

        props.children = "";
        if (!isUndefined(formItemData)) {
            props.children = formItemData.toString();
        }

        return props;
    }
}

export default {
    [widgetKey]: Widget
};
