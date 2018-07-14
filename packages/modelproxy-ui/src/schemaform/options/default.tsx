import schemaFormReact from "fx-schema-form-react";
import Immutable from "immutable";
import { compose } from "recompose";

import proxy from "../../modelproxy/proxy";
import { ArrayComponent } from "../components/array";
import { ArrayItemComponent } from "../components/arrayitem";
import { NoneComponent } from "../components/none";

const { hocFactory } = schemaFormReact;

/**
 * 正常的表单配置
 */
export const globalOptions = Immutable.fromJS({
    field: {
        default: {
            temps: ["formItem"],
            hocs: ["utils", "theme", "format", "field", "validate", "array", "temp"],
            widgetHocs: [hocFactory.get("data")({
                data: true,
                meta: true,
                metaKeys: ["isLoading", "options", "children"]
            })]
        },
        objarray: {
            temps: ["card"],
            fieldHocs: [hocFactory.get("data")({
                data: true
            })]
        },
        array: {
            temps: ["card"],
            Root: NoneComponent,
            ArrayFieldComponent: NoneComponent,
            // 这里为array字段添加sort排序功能
            formHocs: [
                hocFactory.get("resetKey")({
                    excludeKeys: ["formItemData", "formItemMeta"]
                })
            ],
            formItemHocs: [
            ],
            fieldHocs: [hocFactory.get("data")({
                data: true,
                dataLength: true
            })],
            options: Immutable.fromJS({
                temp: {
                    card: {
                        icon: "apps"
                    }
                }
            })
        },
        object: {
            temps: ["card"],
            Root: NoneComponent
        },
        boolean: {
            widget: "checkbox",
            options: Immutable.fromJS({
                temp: {
                    formItem: {
                        showTitle: false
                    }
                }
            })
        }
    },
    temp: {
        card: {
            tempHocs: [hocFactory.get("data")({
                meta: true,
                data: true,
                dataLength: true,
                metaKeys: ["collapsing", "errorText", "isValid"]
            })],
            options: {
                elevation: 0,
                raised: false,
                // className: "ml3 mr3"
            }
        },
        formItem: {
            tempHocs: [hocFactory.get("data")({
                meta: true,
                metaKeys: ["isLoading", "errorText", "isValid", "dirty"]
            })],
            showTitle: false,
            options: {
                fullWidth: true,
                margin: "normal",
                className: "flex w-auto"
            }
        }
    },
    hoc: {
        data: {
            rootReducerKey: ["schemaForm"]
        },
        array: {
            ArrayComponent,
            ArrayItemComponent: compose(hocFactory.get("utils")(), hocFactory.get("data")({
                data: true,
                dataLength: true
            }))(ArrayItemComponent)
        },
        schemaFormDec: {
            hocIncludeKeys: ["schemaId", "isValid", "data"]
        },
        proxy: {
            proxy
        }
    },
    widget: {
        
    }
});
