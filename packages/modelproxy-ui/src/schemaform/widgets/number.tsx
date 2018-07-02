import schemaFormReact from "fx-schema-form-react";
import { DefaultProps } from "fx-schema-form-react/libs/components";
import { UtilsHocOutProps } from "fx-schema-form-react/libs/hocs/utils";
import { ValidateHocOutProps } from "fx-schema-form-react/libs/hocs/validate";
import { fromJS } from "immutable";
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import React, { PureComponent } from "react";

const { schemaFormTypes } = schemaFormReact;

export interface IProps extends DefaultProps, UtilsHocOutProps, ValidateHocOutProps {
}

export const widgetKey = "number";

export class Widget extends PureComponent<IProps, any> {


    public render(): JSX.Element | null {
        const { getOptions, uiSchema, getTitle, formItemMeta = fromJS({}), formItemData, updateItemData, updateItemMeta, validate } = this.props;
        const { readonly = false } = uiSchema || {};
        const metaOptions = formItemMeta ? formItemMeta.getIn(["options", schemaFormTypes.widget, widgetKey]) : fromJS({});
        const widgetOptions = getOptions(this.props, schemaFormTypes.widget, widgetKey, metaOptions);

        if (!uiSchema) {
            return null;
        }

        return (
            <TextField
                readOnly={readonly}
                placeholder={getTitle(this.props)}
                onBeforeChange={async (newValue: any) => {
                    if (!Number.isNaN(+newValue)) {
                        updateItemData(this.props, +newValue);
                    } else {
                        updateItemMeta(this.props, newValue, await validate(this.props, newValue));
                    }
                }}
                onChanged={(newValue: any) => {
                    // updateItemData(this.props, newValue);
                }}
                onBlur={async () => {
                    updateItemMeta(this.props, null, await validate(this.props, formItemData));
                }}
                {...widgetOptions.options}
                {...this.setDefaultProps()}
            />
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
    [widgetKey]: Widget
};
