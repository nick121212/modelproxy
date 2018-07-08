import { UiSchema } from "fx-schema-form-core";
import { fromJS } from "immutable";

export const uiSchemasOfDashboard = [{
    key: "",
    temps: ["block"],
    options: fromJS({
        temp: {
            block: {
                title: "日历外观",
                description: ""
            }
        }
    }),
    children: [{
        key: "firstName",
        title: "姓名"
    }, {
        key: "favoriteColor",
        widget: "dropdown",
        title: "显示每周的第一天为",
        options: fromJS({
            widget: {
                dropdown: {
                    options: {
                        options: [{
                            key: "Sunday",
                            text: "星期日"
                        }, {
                            key: "Monday",
                            text: "星期一"
                        }, {
                            key: "Tuesday",
                            text: "星期二"
                        }, {
                            key: "Wednesday",
                            text: "星期三"
                        }, {
                            key: "Thursday",
                            text: "星期四"
                        }, {
                            key: "Friday",
                            text: "星期五"
                        }, {
                            key: "Saturday",
                            text: "星期六"
                        }]
                    }
                }
            }
        })
    } as UiSchema, {
        key: "sex",
        widget: "choiseGroup",
        title: "显示小时数",
        options: fromJS({
            widget: {
                choiseGroup: {
                    options: {
                        options: [{
                            key: "15",
                            text: "以15分钟为增量"
                        }, {
                            key: "30",
                            text: "以30分钟为增量"
                        }]
                    }
                }
            }
        })
    } as UiSchema, "habit", {
        key: "habit",
        field: "none",
        temps: ["formItem"],
        widget: "checkboxs",
        title: "工作周显示方式",
        options: fromJS({
            widget: {
                checkboxs: {
                    options: {
                        options: [{
                            key: "Sunday",
                            text: "周日"
                        }, {
                            key: "Monday",
                            text: "周一"
                        }, {
                            key: "Tuesday",
                            text: "周二"
                        }, {
                            key: "Wednesday",
                            text: "周三"
                        }, {
                            key: "Thursday",
                            text: "周四"
                        }, {
                            key: "Friday",
                            text: "周五"
                        }, {
                            key: "Saturday",
                            text: "周六"
                        }]
                    }
                }
            },
            temp: {
                formItem: {
                    showToolbox: false
                }
            }
        })
    } as UiSchema, {
        key: "born",
        title: "开始日期",
        widget: "date"
    } as UiSchema, {
        key: "isEighteen",
        title: "显示周数",
        widget: "checkbox",
        options: fromJS({
            temp: {
                formItem: {
                    showTitle: false
                }
            }
        })
    } as UiSchema, {
        key: "lastName",
        title: "一年的第一会走开始于",
        widget: "dropdown",
        hocs: ["utils", "theme", "format", "field", "validate", "show", "temp"],
        options: fromJS({
            temp: {
                formItem: {
                    className: "ml4"
                }
            },
            widget: {
                dropdown: {
                    options: {
                        options: [{
                            key: "1",
                            text: "一年的第一天"
                        }, {
                            key: "4",
                            text: "一年之中第一个包含4天的周"
                        }, {
                            key: "7",
                            text: "一年的第一个完整周"
                        }]
                    }
                }
            },
            hoc: {
                show: {
                    condition: {
                        paths: [
                            { path: "../isEighteen" }
                        ]
                    },
                    paths: ["../isEighteen"]
                }
            }
        })
    } as UiSchema]
}];
export const uiSchemasOfSchema = ["type"];