import schemaFormReact from "fx-schema-form-react";
import Immutable from "immutable";

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
            tempHocs: [schemaFormReact.hocFactory.get("data")({
                meta: true,
                data: true,
                dataLength: true,
                metaKeys: ["collapsing", "errorText", "isValid"]
            })],
            options: {
                className: "ml3 mr3"
            }
        },
        formItem: {
            tempHocs: [schemaFormReact.hocFactory.get("data")({
                meta: true,
                metaKeys: ["isLoading", "errorText", "isValid", "dirty"]
            })],
            options: {
                className: "ml3 mr3 flex w-auto",
                labelCol: {
                    xs: { span: 24 },
                    sm: { span: 5 },
                },
                wrapperCol: {
                    xs: { span: 24 },
                    sm: { span: 12 },
                }
            }
        }
    },
    hoc: {
        data: {
            rootReducerKey: ["schemaForm"]
        },
        array: {
            ArrayComponent,
            ArrayItemComponent
        },
        schemaFormDec: {
            hocIncludeKeys: ["schemaId", "isValid"]
        },
        proxy: {
            proxy
        },
        format: {
            date: {
                widget: "date"
            },
            "date-time": {
                widget: "date",
                options: Immutable.fromJS({
                    widget: {
                        date: {
                            options: {
                                style: {
                                    width: "100%"
                                },
                                format: "YYYY-MM-DD HH:mm",
                                showTime: true
                            }
                        }
                    }
                })
            },
            time: {
                widget: "date",
                options: Immutable.fromJS({
                    widget: {
                        date: {
                            options: {
                                style: {
                                    width: "100%"
                                },
                                mode: "time",
                                format: "HH:mm:ss",
                                showTime: true
                            }
                        }
                    }
                })
            }
        }
    },
    widget: {
        text: {
            options: {
                autoFocus: false
            }
        },
        number: {
            options: {
                style: {
                    width: "100%"
                }
            }
        },
        date: {
            options: {
                style: {
                    width: "100%"
                }
            }
        }
    }
});
