import { ModelProxy } from 'modelproxy';
import { InterfaceFactory } from 'modelproxy/out/libs/interface.factory';
import { IInterfaceModel } from 'modelproxy/out/models/interface';

import { fetchEngine, fetchSchemaEngine } from './engines';


/**
 * 接口的配置以及初始化
 * 这里有fetch和jsonp的接口转发器
 */
const proxy = new ModelProxy();

proxy.loadConfig({
  "key": "test",
  "title": "p-uc",
  "engine": "fetch",
  "mockDir": "/mocks/",
  "states": {
    "dev": "http://localhost:3004"
  },
  "state": "dev",
  "interfaces": [{
    "key": "project",
    "title": "项目接相关口",
    "method": "GET",
    "path": "/projects"
  }, {
    "key": "user",
    "title": "用户接口",
    "method": "GET",
    "path": "/users"
  }]
}, {});

proxy.loadConfig({
  "engine": "schema",
  "interfaces": [{
    "key": "schema",
    "method": "get",
    "path": "/schemas/:id",
    "title": "调用本地的schema文件"
  }, {
    "key": "echarts",
    "method": "get",
    "path": "/echarts/:id",
    "title": "调用本地的echart配置文件"
  }],
  "key": "sf",
  "state": "dev",
  "states": {
    "dev": ""
  },
  "title": "schema的获取接口"
}, {});

// 加载引擎
proxy.addEngines({
  fetch: fetchEngine,
  schema: fetchSchemaEngine
});

// 获取接口的命名空间
const schemaNs = proxy.getNs("sf") as InterfaceFactory;
// 导出获取json的接口
export const getSchema = schemaNs.get("schema") as IInterfaceModel;

export default proxy;
