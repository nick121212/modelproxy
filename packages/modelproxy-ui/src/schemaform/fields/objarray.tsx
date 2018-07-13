import schemaFormReact from "fx-schema-form-react";
import { DefaultProps } from "fx-schema-form-react/libs/components";
import { UtilsHocOutProps } from "fx-schema-form-react/libs/hocs/utils";
import { Map } from "immutable";
import React, { PureComponent } from "react";
import { compose } from "recompose";
// import { ValidateHocOutProps } from "fx-schema-form-react/libs/hocs/validate";
const { schemaFormTypes, SchemaForm } = schemaFormReact;

export interface IObjectArrayFieldProps extends DefaultProps, UtilsHocOutProps {

}

export const name = "objarray";

/**
 * Object类型的字段解析
 * 嵌套一层SchemaForm
 */
export class FieldComponent extends PureComponent<IObjectArrayFieldProps, any> {
    public render(): JSX.Element | null {
        const { arrayLevel, parentKeys, globalOptions, formItemData, ajv, getOptions, reducerKey, uiSchema, ArrayItemComponent } = this.props;
        const options = getOptions(this.props, schemaFormTypes.field, name);
        let SchemaFormWithHoc: any = SchemaForm;
        const properties: any[] = [];

        // 如果children设置成null，则返回空
        if (!uiSchema || uiSchema.children === null || !uiSchema.schemaPath || !uiSchema.originKeys) {
            return null;
        }

        // 如果需要对schemaform对hoc包装
        if (options.formHocs && options.formHocs.constructor === Array) {
            SchemaFormWithHoc = compose(...options.formHocs)(SchemaForm as any);
        }

        if (!formItemData) {
            return null;
        }

        (formItemData as Map<string, any>).forEach((val: any, key: string) => {
            if (uiSchema.originKeys) {
                const uiSchemaCopy: any = Object.assign({}, uiSchema);

                uiSchemaCopy.originKeys = uiSchema.originKeys.concat([key]);

                properties.push(
                    <SchemaFormWithHoc
                        key={key}
                        ArrayItemComponent={ArrayItemComponent}
                        arrayLevel={arrayLevel}
                        reducerKey={reducerKey}
                        schemaId={options.schemaId}
                        uiSchemas={[{
                            key: "",
                            temps: ["card"],
                            children: options.uiSchemas()
                        }]}
                        uiSchema={uiSchemaCopy}
                        parentKeys={parentKeys}
                        globalOptions={globalOptions}
                        ajv={ajv} />
                );
            }

        });

        return (
            <>
                {properties}
            </>
        );
    }
}

export default {
    [name]: FieldComponent
};