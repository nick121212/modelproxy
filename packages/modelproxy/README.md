# modelproxy

## 1. 解决了什么问题

 通过配置文件，自动生成接口的调用方法，参考[modelproxy](https://github.com/papertiger8848/modelproxy)。
 在具体的实践过程中，总觉得很多的不满意，修改一下使得满足更多的场景。

## 2. 安装和依赖

```js
 npm install modelproxy
 ```

## 3. API

- [ModelProxy](#ModelProxy)
  - [constructor](#constructor)
  - [loadConfig](#loadConfig)
  - [addEngines](#addEngines)
  - [execute](#execute)
  - [executeAll](#executeAll)
  - [race](#race)
  - [getNs](#getNs)
  - [mixin](#mixin)
- [Engines](#Engines)
  - [proxy](#proxy)
  - [validate](#validate)
- [InterfaceFactory](#InterfaceFactory)
  - [get](#get)
  - [post](#post)
  - [delete](#delete)
  - [put](#put)
  - [getPath](#getPath)
- [Compose](#Compose)
  - [use](#use)
  - [clear](#clear)
  - [compose](#compose)
  - [callback](#callback)
  - [errorHandle](#errorHandle)

## 4. ModelProxy

### constructor

 构造函数

```typescript
    var proxy = new ModelProxy();
```

### loadConfig

载入接口配置信息，载入后即可调用接口，返回ModelProxy对象；

事例配置：

```typescript
proxy.loadConfig({
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
});
```

### addEngines

加入engines，默认只有default一个engine。

```typescript
proxy.addEngines({
    "wx": (new WxAppEngine()).init()
});
```

实例engine，本例中是一个微信小程序的engine。

```typescript
import { ModelProxy,BaseEngine } from 'modelproxy';
import URLSearchParams from 'url-search-params';

export class WxAppEngine extends BaseEngine {
    init() {
        this.use(async (ctx, next) => {
            const app = getApp();
            const { instance, executeInfo = {}, settings = {} } = ctx;
            let { header = {} } = settings;

            try{
                ctx.result = await app.wxPromisify(wx.request)({
                    url: this.getFullPath(instance, executeInfo),
                    data: executeInfo.data,
                    header: header || {},
                    method: instance.method
                });
            }catch(e){
                ctx.isError=true;
                ctx.err = e;
            }
            // 如果有错误，则调用下一个中间件，如果没错误则停止中间件的执行
            await next(!ctx.isError ? "abort" : null);
        });

        this.use(async (ctx,next)=>{
            wx.showToast({
                title: ctx.err.message,
                icon: "error"
            });

            console.group("接口调用错误！",new Date());
            console.error(ctx.err);
            console.groupEnd();

            throw ctx.err;
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

        return ctx.result;
    }
}
```

### execute

调用一个接口。返回一个promise对象；

```typescript
    proxy.execute("test","login",{
        data:{
            username:"nick",
            password:"111111"
        }
    });
```

### executeAll

调用多个接口。返回一个promise对象；

```typescript
    proxy.executeAll({
        login: login.get.bind(login, null, {
            params: {
                tag: "nora"
            }
        }),
        article: article.delete.bind(article, 1)
    }).then(console.log);
```

### race

调用多个接口，返回第一个返回的接口的数据，返回Promise;

```typescript
    proxy.race([
        login.get.bind(login, null, {
            params: {
                tag: "nora"
            }
        }),
        article.delete.bind(article, 1)
    ]).then(console.log);
```

### getNs

获取一个命名空间，空间中存放的是接口。不同命名空间中使用不同的域名，所以同域名的接口可以配置在同一个配置文件中。返回一个InterfaceFactory对象。

```typescript
    proxy.getNs("test");
```

### mixin

合并多个接口，生成rest风格的接口。返回一个方法。

```typescript
    const modelproxy = require("./");
    const proxy = new modelproxy.ModelProxy();

    proxy.loadConfig({
        "key": "test",
        "engine": "default",
        "states": {
            "dev": "http://www.baidu.com"
        },
        "state": "dev",
        "interfaces": [{
            "key": "articles",
            "title": "文章接口",
            "method": "GET",
            "path": "/articles"
        }, {
            "key": "users",
            "title": "用户列表",
            "method": "GET",
            "path": "/users",
            "engine": "default"
        }]
    }, {});

    const userArticles = proxy.mixin("test", "users", "articles")(1);
    const users = proxy.mixin("test", "users")();

    console.log(userArticles.path); // /users/1/articles

    userArticles.get(5); // GET /users/1/articles/5
    users.get(); // GET /users
```

## 5. InterfaceFactory

### get

通过get调用接口。这里会覆盖配置文件中配置的method属性。

```typescript
    // 获取文章列表
    proxy.getNs("test").get("article").get();
    // 发送请求 GET http://www.baidu.com/articles
    // 获取文章的详情，id为1
    proxy.getNs("test").get("article").get(1);
    // 发送请求 GET http://www.baidu.com/articles/1
```

### post

通过post调用接口。这里会覆盖配置文件中配置的method属性。

```typescript
    proxy.getNs("test").get("article").post({
        data:{...}
    });
    // 发送请求 POST http://www.baidu.com/articles
```

### delete

通过delete调用接口。这里会覆盖配置文件中配置的method属性。

```typescript
    proxy.getNs("test").get("article").delete(1);
    // 发送请求 DELETE http://www.baidu.com/articles/1
```

### put

通过put调用接口。这里会覆盖配置文件中配置的method属性。

```typescript
    proxy.getNs("test").get("article").put(1,{
        data:{...}
    });
    // 发送请求 PUT http://www.baidu.com/articles/1
```

### getPath

这个方法用于获取接口的路径，比如socket链接的地址等；

```typescript
    proxy.getNs("test").get("article").getPath();
    // returns http://www.baidu.com/articles
```

## 6. Engines

继承自[Compose](#compose)类；提供接口的具体调用中间件。

### proxy

调用接口的时候，会触发这个方法，返回一个Promise对象；

### validate

调用接口的时候，会触发这个方法，返回一个Promise；

> engine列表

1. [fetch](https://github.com/nick121212/modelproxy-engine-fetch.git)

## 7. compose类

拷贝于koa的compose类；

### use

添加一个中间件函数

```js
    engine.use(async(ctx,next)=>{
        // do something

        await next();
    })
```

### clear

清除掉所有的中间件方法

### compose

生成执行方法,返回一个方法：(context: T, next: MiddleFunc) => Promise

### callback

执行compose生成的方法，返回一个方法：() => Promise

### errorHandle

错误处理方法

## 8. DEMO

可以贴到runkit中执行

```typescript
let ModelProxy = require("modelproxy").ModelProxy;
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
}, {});

let login = proxy.getNs("test").get("login");

if (login) {
    (async () => {
        console.log("登录接口：", login.getFullPath({ params: { tag: "ni", a: 33 } }), await login.get(null, {
            params: { tag: "test" }
        }));
    })();
}

let article = proxy.getNs("test").get("article");

if (article) {
    console.log("getPath", article.getFullPath({
        data: {},
        params: { a: 1 }
    }));
    (async () => {
        console.log(await article.get(null, { params: { tag: "nick" } }));
        console.log(await article.get(1, { params: { tag: "nick" } }));
        console.log(await article.put(1, { data: { tag: "nick" } }));
        console.log(await article.delete(1));
        console.log(await article.post({ data: { tag: "nick" } }));
        console.log(await proxy.execute("test", "article"));
        console.log(await proxy.execute("test", "login", {
            params: {
                tag: "nora"
            }
        }).catch(console.log));
    })()
}

if (login && article) {
    proxy.executeAll({
        login: login.get.bind(login, null, {
            params: {
                tag: "nora"
            }
        }),
        article: article.delete.bind(article, 1)
    }).then(console.log);

    proxy.race([{
        ns: login.ns, key: login.key, options: {
            params: { tag: "race" }
        }
    }, article.delete(1)]).then(console.log).catch(console.error);
}

```

## 9. ChangeList
- 2.0.8
  - 添加了before，after，error中間件處理邏輯  
- 1.0.21
  - 修复了bug;
- 1.0.20
  - 修复了bug;
- 1.0.19
  - 修复了bug;
- 1.0.18
  - 修复了bug;
- 1.0.17
  - 修复了bug;
- 1.0.16
  - 修复了bug;
- 1.0.15
  - 修复了bug;
- 1.0.14
  - 添加了mixin方法，修复了一些bug;
- 1.0.11
  - 为compose类添加结束标志位;
- 1.0.10
  - 修改Engine中的validate返回值为Promise;
- 1.0.9
  - 添加了executeAll和race方法;

## 10. License

MIT