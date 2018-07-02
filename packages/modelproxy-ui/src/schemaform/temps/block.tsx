// import schemaFormReact from "fx-schema-form-react";
import { DefaultProps } from "fx-schema-form-react/libs/components";
import { ArrayHocOutProps } from "fx-schema-form-react/libs/hocs/array";
import { UtilsHocOutProps } from "fx-schema-form-react/libs/hocs/utils";
import { schemaFormTypes } from "fx-schema-form-react/libs/models";
import React, { PureComponent } from "react";

// const { schemaFormTypes } = schemaFormReact;

export interface IProps extends DefaultProps, UtilsHocOutProps, ArrayHocOutProps {
}

export const tempKey = "block";
export class Temp extends PureComponent<IProps> {
    public render(): any {
        const { children, getOptions, uiSchema, getTitle } = this.props;
        const tempOptions = getOptions(this.props, schemaFormTypes.template, tempKey);

        if (!uiSchema) {
            return null;
        }

        return (
            <div className="bb mb3 b--light-gray">
                <span className="db b f4">{tempOptions.title || getTitle(this.props)}</span>
                <span className="db f7 light-silver mt3">{tempOptions.description || uiSchema.description}</span>
                <div className=" mt3 mb4">
                    {children}
                </div>
            </div>
        );
    }
}

export default {
    [tempKey]: Temp
};
