import { BaseFactory } from "fx-schema-form-core";
import { ConditionHocOutProps, ConditionHocSettings } from "fx-schema-form-extension/dist/dts/hocs/condition";
import schemaFormReact from "fx-schema-form-react";
import { DefaultProps } from "fx-schema-form-react/libs/components";
import { UtilsHocOutProps } from "fx-schema-form-react/libs/hocs/utils";
import { ValidateHocOutProps } from "fx-schema-form-react/libs/hocs/validate";
import { RC } from "fx-schema-form-react/libs/models";
import Immutable, { fromJS } from "immutable";
import { IExecute } from "modelproxy/out/models/execute";
import { IInterfaceModel } from "modelproxy/out/models/interface";
import React from "react";
import { branch } from "recompose";

const { schemaFormTypes } = schemaFormReact;

export interface IProps extends DefaultProps, UtilsHocOutProps, ValidateHocOutProps, ConditionHocOutProps {
}

export const name = "proxy";

export interface IProxyHocSetting {
    proxyApi?: IInterfaceModel;
    options?: IExecute;
    dataTo?: string[];
    dataFilter?: (data: any) => any;

    paramMap?: string[],
    dataMap?: string[],

    condition?: ConditionHocSettings;
}

export interface IProxyHocOutProps {
    exeucte?: (props: DefaultProps) => void;
}

/**
 * proxy装饰器
 * 用于拉取接口，为select，autocomplete等组件提供数据支持
 * 必须接conditionHoc使用
 * @param hocFactory  hoc的工厂方法
 * @param Component   需要包装的组件
 */
export const hoc = (hocFactory: BaseFactory<any>) => {
    return (settings: IProxyHocSetting = {}) => {
        const innerHoc = (Component: any): RC<IProps, any> => {
            @(hocFactory.get("data")({
                meta: true,
                metaKeys: ["isProxyLoaded", "isLoading"]
            }) as any)
            class ComponentHoc extends React.PureComponent<IProps, any> {
                private isLoading: boolean = false;

                /**
                 * 判断condition属性是否更改
                 * 如果更改则重新调用接口
                 * @param props props
                 */
                public async componentWillUpdate(nextProps?: IProps) {
                    const { condition } = this.props;
                    const { formItemMeta = null } = nextProps || {};
                    const isProxyLoaded = formItemMeta ? formItemMeta.get("isProxyLoaded") : false;
                    const isLoading = formItemMeta ? formItemMeta.get("isLoading") : false;

                    if (nextProps && nextProps.condition !== condition) {
                        return this.execute(this.props);
                    }

                    if (!isProxyLoaded && !isLoading && !this.isLoading) {
                        this.execute(this.props);
                    }
                }

                /**
                 * 初始化的时候调用一次接口
                 */
                public componentWillMount() {
                    this.componentWillUpdate(this.props);
                }

                /**
                 * 渲染组件
                 */
                public render(): JSX.Element | null {
                    return <Component {...this.props} execute={this.execute} />;
                }


                /**
                 * 调用接口
                 * 1. 更改当前的meta状态isLoading为true
                 * 2. 处理参数
                 * 3. 触发接口
                 * 4. 更新状态
                 * @param  {IProps}         props           Props
                 * @param  {IExecute}       executeOptions  接口的调用参数
                 * @return {Promise<any>}
                 */
                private async execute(props: IProps, executeOptions?: IExecute) {
                    const { getOptions, updateItemMeta } = props;
                    const options: IProxyHocSetting = getOptions(this.props, schemaFormTypes.hoc, name, Immutable.fromJS(settings));

                    let params: any;
                    let timeId: any;

                    this.isLoading = true;
                    if (!options.proxyApi || !options.dataTo) {
                        return;
                    }

                    timeId = setTimeout(() => {
                        // 更改当前meta，表示正在loading
                        updateItemMeta(props, null, {
                            isLoading: true,
                        });
                    }, 200);

                    // 合并数据
                    params = Immutable.fromJS(options.options || {});

                    if (executeOptions) {
                        params = params.mergeDeep(executeOptions);
                    }

                    return this.getParamsAndData(props, params, options).then((p: Immutable.Map<string, any>) => {
                        if (!options.proxyApi) {
                            return;
                        }
                        return options.proxyApi.execute(p.toJS());
                    }).then((data: any) => {
                        let dataTo = Immutable.fromJS({});

                        clearTimeout(timeId);
                        this.isLoading = false;
                        // 数据的设置
                        dataTo = dataTo.setIn(options.dataTo, options.dataFilter ? options.dataFilter(data) : data);
                        // 更新meta
                        updateItemMeta(props, null, {
                            isLoading: false,
                            isProxyLoaded: true,
                            ...dataTo.toJS()
                        });
                    }).catch((e: Error) => {
                        clearTimeout(timeId);
                        this.isLoading = false;
                        // 报错
                        updateItemMeta(props, null, {
                            isValid: false,
                            isLoading: false,
                            isProxyLoaded: true,
                            dirty: true,
                            errorText: `接口请求失败【${e.message}】`
                        });
                    });
                }

                /**
                 * 处理接口的请求的数据
                 * @param props 
                 * @param params 
                 * @param options 
                 */
                private async getParamsAndData(props: IProps, params: Immutable.Map<string, any>, options: IProxyHocSetting) {
                    const { uiSchema, getPathKeys, condition = fromJS({}) } = props;
                    const { keys = [] } = uiSchema || {};
                    const { dataMap = [], paramMap = [] } = options;
                    const fillOptions = (keyMap: string[], path: string) => {
                        keyMap.forEach((dataKey: string) => {
                            const reg: RegExp = /\?$/;
                            const isRequired = reg.test(dataKey);
                            const dataKeys = getPathKeys(keys as string[], dataKey.replace(reg, ""));
                            const data = condition ? condition.get(dataKeys.join("/")) : null;
                            const paramKey: string = (dataKeys.pop() || "").toString();

                            if (isRequired && (data === undefined || data === null)) {
                                throw new Error(`${dataKey}不能为空`);
                            }

                            params = params.setIn([path, paramKey.replace(reg, "")], data);
                        });
                    }

                    fillOptions(dataMap, "data");
                    fillOptions(paramMap, "params");

                    return params;
                }

            }

            return ComponentHoc as any;
        };

        return branch((props: IProps) => {
            const { getOptions } = props;
            const { condition }: IProxyHocSetting = getOptions(props, schemaFormTypes.hoc, name, Immutable.fromJS(settings));

            if (condition && condition.paths && condition.paths.length) {
                return true;
            }

            return false;
        },
            hocFactory.get("wrapper")({
                hoc: innerHoc,
                hocName: name
            }),
            innerHoc);
    };
};

export default {
    name,
    hoc
};
