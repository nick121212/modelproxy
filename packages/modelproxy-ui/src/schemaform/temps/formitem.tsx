import { Form } from "antd";
import { FormItemProps } from "antd/lib/form/FormItem";
import schemaFormReact from "fx-schema-form-react";
import { DefaultProps } from "fx-schema-form-react/libs/components";
import { ArrayHocOutProps } from "fx-schema-form-react/libs/hocs/array";
import { UtilsHocOutProps } from "fx-schema-form-react/libs/hocs/utils";
import React, { PureComponent } from "react";

const { schemaFormTypes } = schemaFormReact;

export interface IProps extends DefaultProps, UtilsHocOutProps, ArrayHocOutProps {
    tempKey: string;
}

export const tempKey = "formItem";

export class Temp extends PureComponent<IProps, any> {
    public render(): JSX.Element {
        const { children, getOptions, getTitle, formItemMeta, initArrayComponent, } = this.props;
        const tempOptions = getOptions(this.props, schemaFormTypes.template, tempKey);
        const { description, isRequired, keys } = this.props.uiSchema as any;
        const props: FormItemProps = {};
        const { dirty = false, isValid = true, errorText = "", isLoading = false } = formItemMeta ? formItemMeta.toJS() : {};
        let { hasFeedback = true } = tempOptions;

        if (dirty) {
            props.validateStatus = !isValid ? "error" : "success";
        }

        if (isLoading) {
            props.validateStatus = "validating";
            hasFeedback = true;
        }

        return (
            <Form.Item
                key={(keys || []).join() + tempKey + isValid}
                required={isRequired}
                label={
                    tempOptions.showTitle === false ? getTitle(this.props) : (
                        <>
                            {initArrayComponent ? initArrayComponent(this.props) : null}
                            {getTitle(this.props)}
                        </>
                    )
                }
                extra={description}
                hasFeedback={dirty && hasFeedback}
                help={isValid ? "" : errorText}
                {...props}
                {...tempOptions.options}>
                {children}

            </Form.Item>
        );
    }
}

export default {
    [tempKey]: Temp
};
