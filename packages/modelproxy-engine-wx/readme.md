# modelproxy-engine-fetch

使用微信小程序提供的调用接口的方法来调用接口的engine。
构造函数中默认传入一个方法，这个方法必须返回promise。

## 支持的设置

1. settings.timeout 设置超时时间，默认为5s。
2. settings.cache   设置缓存，key为fullPath+method，类型为Promise。没有持久化。
3. settings.expire  设置缓存过期时间，单位为毫秒。
4. settings.reload  强制不使用缓存

## 安装

```javascript
npm i modelproxy-engine-wx
```

## demo

```typescript

    import { FetchEngine } from 'modelproxy-engine-wx';

    const engine = new FetchEngine(wepy.request);

    engine.init();

    /**
    * 请求真正的数据接口
    * 返回数据
    */
    engine.use(async (ctx, next) => {
        // 处理想要的逻辑
        await next();
    });

    const proxy = new modelProxy.Proxy();

    proxy.addEngines({"wx":engine});

```

## Licence

MIT