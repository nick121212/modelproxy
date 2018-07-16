import { Switch } from "antd";
import schemaFormReact from "fx-schema-form-react";
import { DefaultProps } from "fx-schema-form-react/libs/components";
import { UtilsHocOutProps } from "fx-schema-form-react/libs/hocs/utils";
import { ValidateHocOutProps } from "fx-schema-form-react/libs/hocs/validate";
import { fromJS } from "immutable";
import React, { PureComponent } from "react";

const { schemaFormTypes } = schemaFormReact;

export interface IProps extends DefaultProps, UtilsHocOutProps, ValidateHocOutProps {
}

export const widgetKey = "switch";

export class Widget extends PureComponent<IProps, any> {

    public render(): JSX.Element | null {
        const { getOptions, updateItemData, validate, formItemMeta } = this.props;
        const metaOptions = formItemMeta ? formItemMeta.getIn(["options", schemaFormTypes.widget, widgetKey]) : fromJS({});
        const widgetOptions = getOptions(this.props, schemaFormTypes.widget, widgetKey, metaOptions);

        return (
            <Switch onChange={async (checked: boolean) => {
                if (updateItemData) {
                    updateItemData(this.props, checked, await validate(this.props, checked));
                }
            }}
                {...(widgetOptions.options || {})}
                {...this.setDefaultProps()} />
        );
    }

    private setDefaultProps(): any {
        const props: any = {};

        if (this.props.formItemData !== undefined) {
            props.checked = this.props.formItemData;
        } else {
            props.checked = false;
        }

        return props;
    }
}

export default {
    [widgetKey]: Widget,
    "boolean": Widget
};
