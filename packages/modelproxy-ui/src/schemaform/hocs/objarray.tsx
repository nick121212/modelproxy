import { BaseFactory } from "fx-schema-form-core";
// import schemaFormReact from "fx-schema-form-react";
import { DefaultProps } from "fx-schema-form-react/libs/components";
import { UtilsHocOutProps } from "fx-schema-form-react/libs/hocs/utils";
import { ValidateHocOutProps } from "fx-schema-form-react/libs/hocs/validate";
import { FxUiSchema, RC } from "fx-schema-form-react/libs/models/index";
// import { fromJS } from "immutable";
import React from "react";
import { compose, shouldUpdate, withHandlers } from "recompose";

// const { schemaFormTypes, merge } = schemaFormReact;

export interface IObjArrayProps extends DefaultProps, UtilsHocOutProps, ValidateHocOutProps {
    ArrayComponent?: new () => React.PureComponent<DefaultProps>;
    ArrayItemComponent?: new () => React.PureComponent<DefaultProps>;

    addProperty?: (props: IObjArrayProps, data?: any) => void;
    removeProperty?: (props: IObjArrayProps, key: string, data?: any) => void;
}

export const name = "objarray";

/**
 * 动态添加对象的属性的HOC
 * 
 * @param hocFactory  hoc的工厂方法
 * @param Component   需要包装的组件
 */
export const hoc = (hocFactory: BaseFactory<any>) => {
    let count = 1;

    return () => {
        const commHoc = compose(
            hocFactory.get("data")({
                data: true
            }),
            withHandlers<IObjArrayProps, any>({
                /**
                 * 更新一个数据
                 * @param {ArrayProps} propsCur 当前的props
                 */
                addProperty: (propsCur: IObjArrayProps) => {
                    return async (props: IObjArrayProps, data?: any) => {
                        if (!data) {
                            data = {};
                        }

                        data["field" + count++] = {};

                        props.updateItemData(props, data);
                        // console.log("add", props, data);
                    };
                },
                /**
                 * 删除一个数组元素
                 * @param {ArrayProps} propsCur 当前的props
                 */
                removeProperty: (propsCur: IObjArrayProps) => {
                    return (props: IObjArrayProps, key: string) => {
                        const data = propsCur.formItemData ? propsCur.formItemData.toJS() : {};

                        console.log(propsCur);
                        console.log(data, propsCur.formItemData, props.formItemData, key)

                        if (!data) {
                            return;
                        }

                        console.log(key, data);

                        delete data[key];

                        props.updateItemData(props, data);
                    };
                },
                /**
                 * 初始化array的操作组件
                 * @param {ArrayProps} propsCur 当前的props
                 */
                initArrayComponent: (propsCur: DefaultProps) => {
                    return (props: IObjArrayProps, index?: number) => {
                        const { ArrayComponent, ArrayItemComponent, ...extraProps } = props;
                        const uiSchema = props.uiSchema as FxUiSchema;

                        if (uiSchema.type === "object") {
                            return ArrayComponent ? <ArrayComponent {...extraProps} /> : null;
                        }

                        return ArrayItemComponent ? <ArrayItemComponent {...extraProps} /> : null;
                    };
                }
            }),
            shouldUpdate(() => false)) as any;

        return (Component: any): RC<IObjArrayProps, any> => {
            class ComponentHoc extends React.PureComponent<IObjArrayProps, any> {
                private ArrayComponent: new () => React.PureComponent;
                private ArrayItemComponent: new () => React.PureComponent;

                constructor(props: IObjArrayProps) {
                    super(props);

                    this.initArrayComponents();
                }

                /**
                 * 渲染组件
                 */
                public render(): JSX.Element | null {
                    const props: any = {};

                    if (this.ArrayComponent) {
                        props.ArrayComponent = this.ArrayComponent;
                    }

                    if (this.ArrayItemComponent) {
                        props.ArrayItemComponent = this.ArrayItemComponent;
                    }

                    return <Component {...this.props} {...props} />;
                }

                private initArrayComponents() {
                    const { getOptions } = this.props;
                    const hocOptions: any = getOptions(this.props, "hoc", name);

                    // 设置当前的arrayComponent和ArrayItemComponent
                    if (hocOptions.ArrayComponent) {
                        this.ArrayComponent = hocOptions.ArrayComponent;
                    }

                    if (hocOptions.ArrayItemComponent) {
                        this.ArrayItemComponent = hocOptions.ArrayItemComponent;
                    }
                }
            }

            return commHoc(ComponentHoc) as any;
        };
    };
};

export default {
    name,
    hoc
};