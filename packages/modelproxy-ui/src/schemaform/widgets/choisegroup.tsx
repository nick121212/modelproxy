import schemaFormReact from "fx-schema-form-react";
import { DefaultProps } from "fx-schema-form-react/libs/components";
import { UtilsHocOutProps } from "fx-schema-form-react/libs/hocs/utils";
import { ValidateHocOutProps } from "fx-schema-form-react/libs/hocs/validate";
import { fromJS } from "immutable";
import { ChoiceGroup } from 'office-ui-fabric-react/lib/ChoiceGroup';
import React, { PureComponent } from "react";

import { isString, isUndefined } from "../utils";

const { schemaFormTypes } = schemaFormReact;

export interface IProps extends DefaultProps, UtilsHocOutProps, ValidateHocOutProps {
}

export const widgetKey = "choiseGroup";

export class Widget extends PureComponent<IProps, any> {


    public render(): JSX.Element | null {
        const { getOptions, uiSchema, formItemMeta = fromJS({}), updateItemData, validate } = this.props;
        const { readonly = false, isRequired = false } = uiSchema || {};
        const metaOptions = formItemMeta ? formItemMeta.getIn(["options", schemaFormTypes.widget, widgetKey]) : fromJS({});
        const widgetOptions = getOptions(this.props, schemaFormTypes.widget, widgetKey, metaOptions);

        if (!uiSchema) {
            return null;
        }

        return (
            <ChoiceGroup
                disabled={readonly}
                required={isRequired}
                {...this.setDefaultProps()}
                {...widgetOptions.options}
                onChange={async (ev: React.FormEvent<HTMLInputElement>, option: any) => {
                    updateItemData(this.props, option.key, await validate(this.props, option.key, option))
                }}
            />
        );
    }

    private setDefaultProps(): any {
        const props: any = {};
        const { formItemData } = this.props;

        props.checked = false;
        if (!isUndefined(formItemData) && isString(formItemData)) {
            props.selectedKey = formItemData;
        }
        return props;
    }
}

export default {
    [widgetKey]: Widget
};
