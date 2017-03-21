# modelproxy

>## 1、解决了什么问题
 通过配置文件，自动生成接口的调用方法，参考[modelproxy](https://github.com/papertiger8848/modelproxy)。   
 在具体的实践过程中，总觉得很多的不满意，修改一下使得满足更多的场景。
 
>## 2、安装和依赖
 npm install modelproxy     
 ### 依赖列表
 1. [tv4](https://github.com/geraintluff/tv4) Tiny Validator (for v4 JSON Schema)
 2. [bluebird](https://github.com/petkaantonov/bluebird) Bluebird is a fully featured promise library with focus on innovative features and performance
 3. [json-pointer](https://github.com/manuelstofer/json-pointer) Some utilities for JSON pointers described by RFC 6901
 4. [mockjs](https://github.com/nuysoft/Mock/wiki/Getting-Started) 生成mock数据
 5. [node-serialize](https://github.com/luin/serialize) Serialize a object including it's function into a JSON.
 6. [lodash](https://github.com/lodash/lodash) 工具库
 
>## 3、编译
 1. 进入根目录执行 npm install
 2. grunt build-node生成built目录
 3. 执行 npm run demo
 4. 测试 npm run test

>## 4、接口配置文件
> ```
>    {
>        "key": "test",
>        "title": "p-uc",
>        "engine": "mockjs",
>        "mockDir": "./mocks/",
>        "states": {
>            "prod": "http://www.baidu.com",
>            "test": "http://www.baidu.com",
>            "dev": "http://www.baidu.com",
>            "stag": "http://www.baidu.com"
>        },
>        "state": "dev",
>        "interfaces": [{
>            "key": "login",
>            "title": "登陆接口",
>            "method": "GET",
>            "path": "/passport/login",
>            "dataSchema":{}, // 用于验证data
>            "paramsSchema":{},// 用于验证params
>            
>        }]
>    } 
> ```

>## 5、使用配置
> ```
>     var proxy = new modelProxy.ModelProxy();
> 
>     proxy.loadConfig(config).then((result) => {
>         return result.getNs("test1");
>     }).then((result) => {
>         if (!result) {
>             return;
>         }
>         return result.login({
>             data:{ usename: "1", password: "111111" }, 
>             params:{},
>             instance: { engine: "default", mockDir: path.resolve(__dirname, "../mocks/") }
>         });
>     }).then((result) => {
>         console.info(JSON.stringify(result));
>     }).catch(console.error);
> ```

>## 6、默认的处理ENGINE
> 默认的engine只是返回了数据的内容，可自定义开发engine来处理接口的转发；例如（jquery,superagent,dubbo,mockjs）等；     
> ```
>     export class DefaultEngine extends BaseEngine {
>         constructor() {
>              super();
>         }
> 
>         validate(intance: IInterfaceModel, options:IExecute): boolean {
>             return true;
>         }
> 
>         async proxy(intance: IInterfaceModel, options:IExecute) {
>             return data;
>         }
>     }
> ```