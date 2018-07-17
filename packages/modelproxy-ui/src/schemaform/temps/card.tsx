import { Alert, Avatar, Card, Icon } from "antd";
import schemaFormReact from "fx-schema-form-react";
import { DefaultProps } from "fx-schema-form-react/libs/components";
import { ArrayHocOutProps } from "fx-schema-form-react/libs/hocs/array";
import { UtilsHocOutProps } from "fx-schema-form-react/libs/hocs/utils";
import { JSONSchema6 } from "json-schema";
import React, { PureComponent } from "react";


const { schemaFormTypes } = schemaFormReact;

export interface IProps extends DefaultProps, UtilsHocOutProps, ArrayHocOutProps {
}

export const tempKey = "card";

export class Temp extends PureComponent<IProps> {
    public render(): any {
        const { children, getOptions, getTitle, initArrayComponent, formItemMeta, formItemData, uiSchema, arrayIndex } = this.props;
        const tempOptions = getOptions(this.props, schemaFormTypes.template, tempKey);
        const { isValid = true, errorText = "", collapsing = false } = formItemMeta ? formItemMeta.toJS() : {};
        const { type, description } = uiSchema as JSONSchema6;

        if (!uiSchema) {
            return null;
        }

        return (
            <Card title={
                <Card.Meta
                    avatar={
                        tempOptions.icon ? (
                            <Avatar aria-label="Card-Icon">
                                <Icon type={tempOptions.icon} />
                            </Avatar>
                        ) : null}
                    title={getTitle(this.props)}
                    description={(tempOptions.showCount !== false && type === "array") ? `当前有${formItemData || 0}项` : description}
                    {...tempOptions.cardMetaOptions}
                />
            } extra={initArrayComponent ? initArrayComponent(this.props, arrayIndex) : null} {...tempOptions.options}>
                {
                    !collapsing && ((formItemData && type === "array") || type !== "array") ? children : null
                }

                {
                    !isValid ? <Alert message={errorText} type="error" /> : null
                }
            </Card>
        );
    }
}

export default {
    [tempKey]: Temp
};
