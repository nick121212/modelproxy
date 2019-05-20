var expect = require("chai").expect;
var modelProxy = require("../out/index");

var config = {
    key: "test",
    title: "p-uc",
    engine: "default",
    mockDir: "/mocks/",
    states: {
        dev: "http://www.baidu.com"
    },
    state: "dev",
    interfaces: [
        {
            key: "article",
            title: "文章接口",
            method: "GET",
            path: "/articles"
        },
        {
            key: "login",
            title: "登陆接口",
            method: "POST",
            path: "/passport/login",
            engine: "default",
            config: {
                test: "test-1"
            }
        }
    ]
};

describe("modelproxy cache------", function() {
    let proxy, defEngine;
    const fetch1 = (ctx, next) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                return resolve(Date.now().toString());
            }, 100);
        });
    };

    before(function() {
        defEngine = new modelProxy.DefaultEngine();
        proxy = new modelProxy.ModelProxy();
        proxy.addEngines({
            cache: defEngine
        });
        proxy.loadConfig(config, {
            engine: "cache"
        });
    });

    describe("测试cache", function() {
        it("正常cache", async () => {
            const article = proxy.getNs("test").get("article");

            defEngine.use(async (ctx, next) => {
                ctx.result = await modelProxy.cacheDec(fetch1, "/test/cache", ctx.executeInfo.settings)();

                next();
            });

            const dd = await article.get({
                settings: {
                    cache: true
                }
            });
            const dd1 = await article.get({
                settings: {
                    cache: true
                }
            });
            const dd2 = await article.get({
                settings: {
                    cache: false
                }
            });
            const dd3 = await article.get({
                settings: {
                    cache: true,
                    reload: true,
                    expire: 50
                }
            });
            const dd4 = await article.get({
                settings: {
                    cache: true
                }
            });

            expect(dd.result).eq(dd1.result);
            expect(dd1.result).not.eq(dd2.result);
            expect(dd.result).not.eq(dd3.result);
            expect(dd3.result).not.eq(dd4.result);
        });

        it("cache 方法测试", async () => {
            const localStorage = new modelProxy.BaseFactory();
            const cacheFunc = modelProxy.cacheDec;

            const res1 = await cacheFunc(fetch1, "/test/cache1", { local: true, cache: true, expire: 10 }, localStorage)();
            const localRes1 = localStorage.getItem("/test/cache1");

            await fetch1();

            const res2 = await cacheFunc(fetch1, "/test/cache1", { local: true, cache: true }, localStorage)();
            modelProxy.removeCacheFromKey("/test/cache1", localStorage);
            const res3 = await cacheFunc(fetch1, "/test/cache1", { local: true, cache: true }, localStorage)();

            expect(res1).to.not.eq(res2);
            expect(localRes1).to.be.a("string");
            expect(JSON.parse(localRes1).data).to.eq(res1);
            expect(res3).to.not.eq(res1);
        });
    });
});
