/// <reference types="tv4" />
import * as tv4 from "tv4";
import { IEngine } from '../models/engine';
import { IExecute } from '../models/execute';
import { ModelProxy } from '../libs/compose';
import { IProxyCtx } from '../models/proxyctx';
import { IInterfaceModel } from '../models/interface';
export declare namespace ModelProxyEngine {
    abstract class BaseEngine extends ModelProxy.Compose<IProxyCtx> implements IEngine {
        constructor();
        /**
         * 验证数据的准确性
         * @param obj         {JSON}        数据
         * @param schema      {JSONSCHEMA}  JSONSCHEMA
         * @return            {Boolean}
         */
        protected validateTv4(obj: JSON, schema: tv4.JsonSchema): boolean;
        /**
         * 验证数据的准确性
         * @param instance   {IInterfaceModel}  接口模型
         * @param options    {IExecute}         参数
         * @return           {boolean}
         */
        validate(instance: IInterfaceModel, options: IExecute): boolean;
        /**
         * 代理接口
         * @param instance   {IInterfaceModel}  接口模型
         * @param options    {IExecute}         参数
         * @return           {Promise<any>}
         */
        proxy(instance: IInterfaceModel, options: IExecute): Promise<any>;
        /**
         * 取得state所对应的环境
         * @param instance  {IInterfaceModel}   接口实例
         * @return          {String}
         */
        getStatePath(instance: IInterfaceModel): string;
        /**
         * 替换path中的变量
         * @param instance   {IInterfaceModel}  接口模型
         * @param options    {IExecute}         参数
         */
        replacePath(instance: IInterfaceModel, options: IExecute): string;
        /**
         * 获取接口的全路径
         * @param instance   {IInterfaceModel}  接口模型
         * @param options    {IExecute}         参数
         */
        getFullPath(instance: IInterfaceModel, options: IExecute): string;
    }
}
