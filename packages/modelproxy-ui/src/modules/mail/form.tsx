import schemaFormReact from "fx-schema-form-react";
import { SchemaFormProps } from "fx-schema-form-react/libs/libs/dec";
// import { JSONSchema6 } from "json-schema";
import { Button, PrimaryButton } from "office-ui-fabric-react/lib/Button";
import React from "react";
import { compose, defaultProps } from "recompose";

import { curAjv } from "../../schemaform";
import { globalOptions } from "../../schemaform/options/default";
import { uiSchemasOfSchema } from "./constant";

const { schemaFormDec, SchemaForm, hocFactory } = schemaFormReact;

// const a: JSONSchema6;

@(compose(
  defaultProps({
    ajv: curAjv,
    schemaId: "schema",
    reducerKey: "schemaForm",
    formKey: "schema",
    shouldResetForm: true,
    initData: {}
  }),
  hocFactory.get("asyncSchema"),
  schemaFormDec({
    rootReducerKey: ["schemaForm"],
    parentKeys: ["schema"]
  })) as any)
export class DashboardTestComponent extends React.PureComponent<SchemaFormProps & any, any> {

  public render() {
    const { parentKeys, schemaId, validateAll, data, isValid, resetForm } = this.props;

    if (!this.props.root) {
      return null;
    }

    return <>
      <div className="ba b--light-gray pa3 mb3">
        {JSON.stringify(data)}
      </div>

      <hr className="mb3" />

      <SchemaForm
        schemaId={schemaId}
        uiSchemas={uiSchemasOfSchema}
        parentKeys={parentKeys}
        globalOptions={globalOptions}
        ajv={curAjv} />

      <PrimaryButton className="mt3" onClick={async () => {
        if (validateAll) {
          const { data: dataRaw, isValid: isValidRaw } = await validateAll();

          console.log(dataRaw, isValidRaw);
        }
      }}>保存设置({String(isValid)})</PrimaryButton>

      <Button onClick={() => {
        if (resetForm) {
          resetForm();
        }
      }} className=" ml2 mt3">放弃</Button>

    </>;
  }
}
