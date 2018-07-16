import { Select } from "antd";
import schemaFormReact from "fx-schema-form-react";
import { DefaultProps } from "fx-schema-form-react/libs/components";
import { UtilsHocOutProps } from "fx-schema-form-react/libs/hocs/utils";
import { ValidateHocOutProps } from "fx-schema-form-react/libs/hocs/validate";
import Immutable from "immutable";
import { fromJS } from "immutable";
import React, { PureComponent } from "react";

const { schemaFormTypes } = schemaFormReact;

export interface IProps extends DefaultProps, UtilsHocOutProps, ValidateHocOutProps {
}

export const widgetKey = "select";

export class Widget extends PureComponent<IProps, any> {
    public render(): JSX.Element | null {
        const { getOptions, uiSchema, formItemMeta, updateItemData, validate } = this.props;
        const metaOptions = formItemMeta ? formItemMeta.getIn(["options", schemaFormTypes.widget, widgetKey]) : fromJS({});
        const widgetOptions = getOptions(this.props, schemaFormTypes.widget, widgetKey, metaOptions);

        if (!uiSchema) {
            return null;
        }

        return (
            <Select
                {...(widgetOptions.options || {})}
                {...this.setDefaultProps(widgetOptions)}
                onChange={async (val: any, options: any) => {
                    updateItemData(this.props, val, await validate(this.props, val));
                }} />
        );
    }

    private setDefaultProps(widgetOptions: any): any {
        const props: any = {};

        props.value = "";
        if (widgetOptions.options.mode === "multiple" || widgetOptions.options.mode === "tags") {
            props.value = [];
        }

        if (this.props.formItemData !== undefined) {
            props.value = this.props.formItemData;
            if (Immutable.Map.isMap(props.value) || Immutable.List.isList(props.value)) {
                props.value = props.value.toJS();
            }
        }

        if (widgetOptions.children) {
            props.children = widgetOptions.children.map((c: any) => {
                return <Select.Option key={c.value} title={c.label}>{c.label}</Select.Option>;
            });
        }

        return props;
    }
}

export default {
    [widgetKey]: Widget
};
