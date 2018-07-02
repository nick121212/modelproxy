import schemaFormReact from "fx-schema-form-react";
import { DefaultProps } from "fx-schema-form-react/libs/components";
import { UtilsHocOutProps } from "fx-schema-form-react/libs/hocs/utils";
import { ValidateHocOutProps } from "fx-schema-form-react/libs/hocs/validate";
import { fromJS } from "immutable";
import { ColorPicker } from 'office-ui-fabric-react/lib/ColorPicker';
import React, { PureComponent } from "react";

import { isString, isUndefined } from "../utils";

const { schemaFormTypes } = schemaFormReact;

export interface IProps extends DefaultProps, UtilsHocOutProps, ValidateHocOutProps {
}

export const widgetKey = "color";

export class Widget extends PureComponent<IProps, any> {


    public render(): JSX.Element | null {
        const { getOptions, uiSchema, formItemMeta = fromJS({}), updateItemData, validate } = this.props;
        const { readonly = false } = uiSchema || {};
        const metaOptions = formItemMeta ? formItemMeta.getIn(["options", schemaFormTypes.widget, widgetKey]) : fromJS({});
        const widgetOptions = getOptions(this.props, schemaFormTypes.widget, widgetKey, metaOptions);

        if (!uiSchema) {
            return null;
        }

        return (
            <ColorPicker
                disabled={readonly}
                {...widgetOptions.options}
                {...this.setDefaultProps()}
                onColorChanged={async (color: string) => {
                    updateItemData(this.props, color, await validate(this.props, color));
                }}
            />
        );
    }

    private setDefaultProps(): any {
        const props: any = {};
        const { formItemData } = this.props;

        props.color = "#ffffff";
        if (!isUndefined(formItemData) && isString(formItemData)) {
            props.color = formItemData;
        }

        return props;
    }
}

export default {
    [widgetKey]: Widget
};
