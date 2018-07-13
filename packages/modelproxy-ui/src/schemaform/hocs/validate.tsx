
import { BaseFactory, schemaFieldFactory } from "fx-schema-form-core";
import { DefaultProps } from "fx-schema-form-react/libs/components";
import { UtilsHocOutProps } from "fx-schema-form-react/libs/hocs/utils";
import { ValidateHocOutProps } from "fx-schema-form-react/libs/hocs/validate";
import { RC } from "fx-schema-form-react/libs/models";
import React, { PureComponent } from "react";
import { compose, withHandlers } from "recompose";
import { Action } from "redux-act";

export const name = "validate";

/**
 * 包装validate的组件HOC
 * @param hocFactory  hoc的工厂方法
 * @param Component   需要包装的组件
 * 加入属性
 */
export const hoc = (hocFactory: BaseFactory<any>) => {
    return (settings: any = {}) => {
        return (Component: any): RC<DefaultProps, any> => {
            @(compose(
                hocFactory.get("data")({
                    root: settings.root
                }),
                withHandlers<any, any>({
                    /**
                     * 验证单个数据
                     * 使用当前组件中的uiSchema，以及传递过来的数据做验证
                     * 这里可能有远程验证
                     */
                    validate: (propsCur: DefaultProps & UtilsHocOutProps) => {
                        return async (props: DefaultProps & UtilsHocOutProps, data: any, meta: any = {}) => {
                            const result: any = { dirty: true, isValid: false, isLoading: false };
                            const { uiSchema, parentKeys, ajv, getTitle } = props;
                            const schema = Object.assign({}, uiSchema);
                            const timeId = setTimeout(() => {
                                propsCur.getActions(propsCur).updateItemMeta({
                                    parentKeys,
                                    keys: (schema as any).keys,
                                    meta: { isLoading: true, isValid: false, errorText: false }
                                });
                            }, 200);

                            // 这里做一层try catch处理
                            try {
                                let validateFunc;

                                // 使用schema.schemaPath来确定schema
                                if (schema.schemaPath && ajv.getSchema(schema.schemaPath)) {
                                    validateFunc = ajv.getSchema(schema.schemaPath);
                                } else if (schema.$id) {
                                    validateFunc = ajv.getSchema(schema.$id);
                                } else {
                                    const schemaInCache = Object.assign({}, schemaFieldFactory.get(schema.schemaPath || ""));

                                    delete schemaInCache.$id;
                                    delete schemaInCache.$ref;

                                    validateFunc = ajv.compile(schemaInCache);
                                }

                                if (propsCur.formItemData) {
                                    result.isValid = await validateFunc(data, undefined, undefined,
                                        undefined, propsCur.formItemData.toJS());
                                } else {
                                    result.isValid = await validateFunc(data);
                                }

                                // 如果验证出错，则抛出错误
                                if (!result.isValid) {
                                    const error: any = new Error();

                                    error.errors = validateFunc.errors;

                                    throw error;
                                }
                            } catch (err) {
                                // 处理错误消息
                                result.errorText =  err.errors ?
                                    ajv.errorsText(err.errors, {
                                        dataVar: getTitle(props).toString()
                                    }) : err.message;
                            }
                            finally {
                                clearTimeout(timeId);
                            }

                            return Object.assign({}, meta, result);
                        };
                    }

                }),
                hocFactory.get("resetKey")({
                    excludeKeys: ["formItemData"]
                }),
                withHandlers<any, any>({
                    /**
                     * 更新一个数据
                     */
                    updateItemData: (propsCur: DefaultProps & UtilsHocOutProps) => {
                        return (raw: boolean, { parentKeys, uiSchema }: DefaultProps, data: any, meta?: any) => {
                            const { keys = [] } = uiSchema || {};

                            return propsCur.getActions(propsCur, raw).updateItemData({
                                parentKeys,
                                keys,
                                data,
                                meta
                            });
                        };
                    },
                    /**
                     * 更新一个元数据
                     */
                    updateItemMeta: (propsCur: DefaultProps & UtilsHocOutProps & ValidateHocOutProps) => {
                        return async (raw: boolean, props: DefaultProps, data: any, meta: any = null, noChange = false) => {
                            const { parentKeys, uiSchema } = props;
                            const { keys = [] } = uiSchema || {};

                            return propsCur.getActions(propsCur, raw).updateItemMeta({
                                parentKeys,
                                keys,
                                meta: meta || await propsCur.validate(props, data),
                                noChange
                            });
                        };
                    },
                    /**
                     * 删除一个元素的meta和data
                     */
                    removeItemData: (propsCur: DefaultProps & UtilsHocOutProps) => {
                        return (raw: boolean, { parentKeys, uiSchema }: DefaultProps, meta = true) => {
                            const { keys = [] } = uiSchema || {};

                            return propsCur.getActions(propsCur, raw).removeItemData({
                                parentKeys,
                                keys,
                                meta
                            });
                        };
                    },
                    /**
                     * 合并多个action
                     */
                    combineActions: (propsCur: DefaultProps & UtilsHocOutProps) => {
                        return (...actions: Array<Action<any>>) => {
                            return propsCur.getActions(propsCur).combineActions(actions);
                        };
                    },
                }),
                withHandlers<any, any>({
                    updateItemData: (propsCur: DefaultProps & ValidateHocOutProps) => {
                        return propsCur.updateItemData.bind(null, false);
                    },
                    updateItemMeta: (propsCur: DefaultProps & ValidateHocOutProps) => {
                        return propsCur.updateItemMeta.bind(null, false);
                    },
                    removeItemData: (propsCur: DefaultProps & ValidateHocOutProps) => {
                        return propsCur.removeItemData.bind(null, false);
                    },
                    updateItemDataRaw: (propsCur: DefaultProps & ValidateHocOutProps) => {
                        return propsCur.updateItemData.bind(null, true);
                    },
                    updateItemMetaRaw: (propsCur: DefaultProps & ValidateHocOutProps) => {
                        return propsCur.updateItemMeta.bind(null, true);
                    },
                    removeItemDataRaw: (propsCur: DefaultProps & ValidateHocOutProps) => {
                        return propsCur.removeItemData.bind(null, true);
                    }
                })) as any)
            class ArrayComponentHoc extends PureComponent<DefaultProps, any> {
                public render(): JSX.Element {
                    return <Component {...this.props} />;
                }
            }

            return ArrayComponentHoc as any;
        };
    };
};

export default {
    name,
    hoc
};