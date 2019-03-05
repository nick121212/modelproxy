var path = require("path");
var expect = require("chai").expect;
var assert = require("chai").assert;
var modelProxy = require("../out/index");

var config = {
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
};

describe('modelproxy cache------', function () {
    var proxy, defEngine;
    var data = { "username": "nick", "password": "111111" };

    before(function () {
        defEngine = new modelProxy.DefaultEngine();
        proxy = new modelProxy.ModelProxy();
        proxy.addEngines({
            cache: defEngine
        });
        proxy.loadConfig(config, {
            engine: "cache"
        });
    });

    describe("测试cache", function () {
        it("正常cache", async () => {
            const article = proxy.getNs("test").get("article");
            const fetch1 = (ctx, next) => {
                return new Promise((resolve) => {
                    setTimeout(() => {
                        return resolve(Date.now());
                    }, 100);
                });
            }

            defEngine.use(async (ctx, next) => {
                ctx.result = await modelProxy.cacheDec(fetch1, ctx, "/test/cache")();
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
    });
});