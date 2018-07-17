import ajv from "ajv";
import ajvErrors from "ajv-errors";
import { ResolveLib } from "fx-schema-form-core";
import { hocs as ehocs } from "fx-schema-form-extension/libs/hocs";
import schemaFormReact from "fx-schema-form-react";
import { JSONSchema6 } from "json-schema";

import { getSchema } from "../modelproxy/proxy";
import fields from "./fields";
import hocs from "./hocs";
import temps from "./temps";
import widgets from "./widgets";

const { defaultTheme, hocFactory } = schemaFormReact;
const { tempFactory, widgetFactory, fieldFactory } = defaultTheme;

// 添加templates到schemaForm组件
temps.forEach((temp: any) => {
    for (const key in temp) {
        if (temp.hasOwnProperty(key)) {
            tempFactory.add(key, temp[key]);
        }
    }
});
// 添加temps到schemaForm组件
widgets.forEach((widget: any) => {
    for (const key in widget) {
        if (widget.hasOwnProperty(key)) {
            widgetFactory.add(key, widget[key]);
        }
    }
});
// 添加hocs到schemaForm组件
[...ehocs, ...hocs].forEach((hoc: any) => {
    hocFactory.add(hoc.name, hoc.hoc(hocFactory), true);
});
// 添加fields到schemaForm组件
fields.forEach((field: { [key: string]: any }) => {
    for (const key in field) {
        if (field.hasOwnProperty(key)) {
            fieldFactory.add(key, field[key]);
        }
    }
});

// 初始化ajv实例
export const curAjv: ajv.Ajv = ajvErrors(new ajv({
    allErrors: true,
    jsonPointers: true,
    useDefaults: true,
    format: "full",
    $data: true,
    errorDataPath: "property",
    removeAdditional: true,
    loadSchema: (uri: string) => {
        return getSchema.get(null, {
            params: {
                id: uri + ".json"
            },
            settings: {
                cache: true
            }
        }).then((schema: JSONSchema6) => {
            return curAjv.compileAsync(schema).then(() => {
                // tslint:disable-next-line:no-unused-expression
                new ResolveLib(curAjv, schema);

                return schema;
            }) as any;
        }).catch(() => {
            console.error("fetch schema [" + uri + "] error!");
        }) as any;
    }
}));
