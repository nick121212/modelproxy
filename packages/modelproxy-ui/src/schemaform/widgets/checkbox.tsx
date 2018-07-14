import React, { PureComponent, SyntheticEvent } from "react";

import Checkbox from "antd/lib/checkbox";
import { DefaultProps } from "fx-schema-form-react/libs/components";
import { UtilsHocOutProps } from "fx-schema-form-react/libs/hocs/utils";
import { ValidateHocOutProps } from "fx-schema-form-react/libs/hocs/validate";
import { schemaFormTypes } from "fx-schema-form-react/libs/models";
import { fromJS } from "immutable";

export const name = "checkbox";

export interface IAntdCheckBoxProps extends DefaultProps, UtilsHocOutProps, ValidateHocOutProps {
}

export class Widget extends PureComponent<IAntdCheckBoxProps, any> {


    public render(): JSX.Element {
        const { getOptions, uiSchema, updateItemData, validate, getTitle, formItemMeta } = this.props;
        const { readonly = false } = uiSchema || {};
        const metaOptions = formItemMeta ? formItemMeta.getIn(["options", schemaFormTypes.widget, name]) || fromJS({}) : fromJS({});
        const widgetOptions = getOptions(this.props, schemaFormTypes.widget, name, metaOptions);

        return (
            <Checkbox onChange={async (e: SyntheticEvent<HTMLInputElement>) => {
                if (updateItemData) {
                    updateItemData(this.props, (e.target as any).checked, await validate(this.props, (e.target as any).checked));
                }
            }}
                disabled={readonly}
                {...widgetOptions.options}
                {...this.setDefaultProps()}>
                {getTitle(this.props, metaOptions.get("options"))}
            </Checkbox>
        );
    }

    private setDefaultProps(): any {
        const props: any = {};

        if (this.props.formItemData !== undefined) {
            props.checked = this.props.formItemData;
        } else {
            props.checked = false;
        }

        return { options: props };
    }
}

export default {
    [name]: Widget,
};

