# modelproxy

 ## 1. 解决了什么问题

 通过配置文件，自动生成接口的调用方法，参考[modelproxy](https://github.com/papertiger8848/modelproxy)。   
 在具体的实践过程中，总觉得很多的不满意，修改一下使得满足更多的场景。
 
 ## 2. 安装和依赖

```
 npm install modelproxy     
 ```

## 3. API

- [ModelProxy](#modelproxy)
    - [constructor](#modelproxy_constructor)
    - [loadConfig](#modelproxy_loadConfig)
    - [addEngines](#modelproxy_addEngines)
    - [execute](#modelproxy_execute)
    - [getNs](#modelproxy_getNs)
- [Engines](#engine)
    - [proxy](#engine_proxy)
    - [validate](#engine_validate)
- [InterfaceFactory](#interfaceFactory)
    - [get](#interfaceFactory_get)
    - [post](#interfaceFactory_post)
    - [delete](#interfaceFactory_delete)
    - [put](#interfaceFactory_put)
    - [getPath](#interfaceFactory_getPath)
- [Compose](#compose)

## 4. ModelProxy类<i id="modelproxy"></i>

 + constructor <i id="modelproxy_constructor"></i>

 构造函数

```
    var proxy = new ModelProxy();
```

+ loadConfig <i id="modelproxy_loadConfig"></i>

载入接口配置信息，载入后即可调用接口，返回ModelProxy对象；

事例配置：
```
{
    "key": "test",
    "title": "p-uc",
    "engine": "default",
    "mockDir": "/mocks/",
    "states": {
        "dev": "http://www.baidu.com"
    },
    "state": "dev",
    "interfaces": [{
        "key": "article",
        "title": "文章接口",
        "method": "GET",
        "path": "/articles"
    }, {
        "key": "login",
        "title": "登陆接口",
        "method": "POST",
        "path": "/passport/login",
        "engine": "default",
        "config": {
            "test": "test-1"
        }
    }]
}
```

+ addEngines <i id="modelproxy_addEngines"></i>

加入engines，默认只有default一个engine。

```
proxy.addEngines({
    "wx": (new WxAppEngine()).init()
});
```

实例engine，本例中是一个微信小程序的engine。

```
import { ModelProxy,BaseEngine } from 'modelproxy';
import URLSearchParams from 'url-search-params';

export class WxAppEngine extends BaseEngine {
    init() {
        this.use(async (ctx, next) => {
            const app = getApp(); 
            const { instance, executeInfo = {}, settings = {} } = ctx;
            let { header = {} } = settings;

            ctx.result = await app.wxPromisify(wx.request)({
                url: this.getFullPath(instance, executeInfo),
                data: executeInfo.data,
                header: header || {},
                method: instance.method
            });

            await next();
        });

        return this;
    }

    async proxy(instance, options) {
        const fn = this.callback(() => { });
        const ctx = {
            instance: instance,
            executeInfo: options,
        };

        await fn(ctx);

        if (ctx.isError) {
            wx.showToast({
                title: ctx.err.message,
                icon: "error"
            });

            console.group("接口调用错误！",new Date());
            console.error(ctx.err);
            console.groupEnd();

            throw ctx.err;
        }

        return ctx.result;
    }
}
```

+ execute <i id="modelproxy_execute"></i>

调用一个接口。返回一个promise对象；

```
    proxy.execute("test","login",{ 
        data:{
            username:"nick",
            password:"111111"
        }
    });
```

+ getNs <i id="modelproxy_getNs"></i>

获取一个命名空间，空间中存放的是接口。不同命名空间中使用不同的域名，所以同域名的接口可以配置在同一个配置文件中。返回一个InterfaceFactory对象。

```
    proxy.getNs("test");
```

## 5. InterfaceFactory<T>类 <i id="interfaceFactory" />

+ get <i id="interfaceFactory_get" />

通过get调用接口。这里会覆盖配置文件中配置的method属性。

```
    // 获取文章列表
    proxy.getNs("test").get("article").get();
    // 发送请求 GET http://www.baidu.com/articles
    // 获取文章的详情，id为1
    proxy.getNs("test").get("article").get(1);
    // 发送请求 GET http://www.baidu.com/articles/1
```

+ post <i id="interfaceFactory_post" />

通过post调用接口。这里会覆盖配置文件中配置的method属性。

```
    proxy.getNs("test").get("article").post({
        data:{...}
    });
    // 发送请求 POST http://www.baidu.com/articles
```

+ delete <i id="interfaceFactory_delete" />

通过delete调用接口。这里会覆盖配置文件中配置的method属性。
```
    proxy.getNs("test").get("article").delete(1);
    // 发送请求 DELETE http://www.baidu.com/articles/1
```

+ put <i id="interfaceFactory_put" />

通过put调用接口。这里会覆盖配置文件中配置的method属性。
```
    proxy.getNs("test").get("article").put(1,{
        data:{...}
    });
    // 发送请求 PUT http://www.baidu.com/articles/1
```

+ getPath <i id="interfaceFactory_getPath" />

这个方法用于获取接口的路径，比如socket链接的地址等；

```
    proxy.getNs("test").get("article").getPath();
    // returns http://www.baidu.com/articles
```

## 6. Engines类 <i id="engine">

继承自[Compose](#compose)类；提供接口的具体调用中间件。

- proxy <i id="engine_proxy">

调用接口的时候，会触发这个方法，返回一个Promise对象；

- validate <i id="engine_validate">

调用接口的时候，会触发这个方法，返回一个boolean；

## 7. compose类

拷贝于koa的compose类；


## 8. DEMO

```
import { ModelProxy } from './';

let proxy = new ModelProxy();

proxy.loadConfig({
    "key": "test",
    "title": "p-uc",
    "engine": "default",
    "mockDir": "/mocks/",
    "states": {
        "prod": "http://www.baidu.com",
        "test": "http://www.baidu.com",
        "dev": "http://www.baidu.com",
        "stag": "http://www.baidu.com"
    },
    "state": "dev",
    "interfaces": [{
        "key": "article",
        "title": "文章接口",
        "method": "GET",
        "path": "/articles"
    }, {
        "key": "login",
        "title": "登陆接口",
        "method": "POST",
        "path": "/passport/login/:tag",
        "engine": "default",
        "config": {
            "test": "test-1"
        }
    }]
}, {}).then(async () => {
    let login = proxy.getNs("test").get("login");

    if (login) {
        console.log(await login.get());
    }
}).then(async () => {
    let article = proxy.getNs("test").get("article");

    if (article) {
        console.log(article.getPath());
        console.log(await article.get(null, { params: { tag: "nick" } }));
        console.log(await article.get(1, { params: { tag: "nick" } }));
        console.log(await article.put(1, { data: { tag: "nick" } }));
        console.log(await article.delete(1));
        console.log(await article.post({ data: { tag: "nick" } }));
        console.log(await proxy.execute("test", "article"));

        console.log(await proxy.execute("test", "login"));
    }
}).catch(console.error);
```

## 9. License

MIT