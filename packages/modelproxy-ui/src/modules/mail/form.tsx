import { UiSchema } from "fx-schema-form-core";
import schemaFormReact from "fx-schema-form-react";
// import { DefaultProps } from "fx-schema-form-react/libs/components";
import { SchemaFormProps } from "fx-schema-form-react/libs/libs/dec";
import { fromJS } from "immutable";
import { Button, PrimaryButton } from "office-ui-fabric-react/lib/Button";
import React from "react";
import { compose, defaultProps } from "recompose";

import { curAjv } from "../../schemaform";
import { globalOptions } from "../../schemaform/options/default";


const { schemaFormDec, SchemaForm } = schemaFormReact;

@(compose(
  defaultProps({
    ajv: curAjv,
    schemaId: "dashboard",
    reducerKey: "schemaForm",
    formKey: "dashboard",
    shouldResetForm: true,
    initData: {
      habit: [],
      favoriteColor: "Monday",
      sex: "15",
      born: "2018/6/29",
      isEighteen: true
    }
  }),
  // hocFactory.get("asyncSchema"),
  schemaFormDec({
    rootReducerKey: ["schemaForm"],
    parentKeys: ["dashboard"]
  })) as any)
export class DashboardTestComponent extends React.PureComponent<SchemaFormProps & any, any> {

  public render() {
    const { parentKeys, schemaId, validateAll, data, isValid, resetForm } = this.props;

    if (!this.props.root) {
      return null;
    }

    return <>
      <div className="b f2 mb3">
        Schema Form Example
      </div>

      <div className="ba b--light-gray pa3 mb3">
        {JSON.stringify(data)}
      </div>

      <hr className="mb3" />

      <SchemaForm
        schemaId={schemaId}
        uiSchemas={[{
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
        }]}
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
