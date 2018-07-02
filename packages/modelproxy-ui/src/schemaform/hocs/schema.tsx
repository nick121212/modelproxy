
import { getSchemaId, ResolveLib, schemaKeysFactory } from "fx-schema-form-core";
import { RC } from "fx-schema-form-react/libs/models";
import { JSONSchema6 } from "json-schema";
import React from "react";

import { curAjv } from "../";
import { getSchema } from "../../modelproxy/proxy";

export const name = "asyncSchema";

/**
 * 用来获取schema的插件
 * @param hocFactory  hoc的工厂方法
 * @param Component 需要包装的组件
 */
export const hoc = () => {
    return (Component: any): RC<any, any> => {
        class ComponentHoc extends React.PureComponent<any, any> {

            constructor(props: any, context: any) {
                super(props, context);
                this.state = {
                    loaded: false
                };
            }


            public componentWillMount() {
                const { schemaId } = this.props;
                const schemaIdInRaw = getSchemaId(schemaId)

                if (!schemaKeysFactory.has(schemaIdInRaw)) {
                    this.initSchema(schemaIdInRaw).then(() => {
                        this.setState({
                            loaded: true
                        });
                    });
                }
            }

            /**
             * 如果当前的schema不存在，则远程拉取
             */
            public render(): JSX.Element | null {
                const { schemaId, ...extraProps } = this.props;
                const schemaIdInRaw = getSchemaId(schemaId)

                if (!schemaKeysFactory.has(schemaIdInRaw)) {
                    return null;
                }

                return <Component schemaId={schemaId} {...extraProps} />;
            }

            /**
             * 获取指定的schema的json文件
             * 使用fx-schema-form-core中的ResolveLib来编译
             * @param {string} schemaId schema的id
             */
            private initSchema(schemaId: string) {
                return getSchema.get(null, {
                    params: {
                        id: schemaId + ".json"
                    },
                    settings: {
                        cache: true
                    }
                }).then(((schema: JSONSchema6) => {
                    return curAjv.compileAsync(schema).then(() => {
                        // tslint:disable-next-line:no-unused-expression
                        new ResolveLib(curAjv, schema);
                    });
                }) as any);
            }

        }

        return ComponentHoc as any;
    };
};

export default {
    name,
    hoc
};
