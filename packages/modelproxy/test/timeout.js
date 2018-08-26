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
    }]
};

const delay = async (interval) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, interval);
    });
}

describe('modelproxy timeout------', function () {
    var proxy, defEngine;
    var data = { "username": "nick", "password": "111111" };

    before(function () {
        defEngine = new modelProxy.DefaultEngine();
        proxy = new modelProxy.ModelProxy();
        proxy.addEngines({
            timeout: defEngine
        });
        proxy.loadConfig(config, {
            engine: "timeout"
        });
    });

    describe("测试timeout", function () {
        it("超时错误", async (done) => {
            defEngine.use(async (ctx, next) => {
                ctx.result = await Promise.race([
                    delay(100).then(() => {
                        throw (new Error("timeout"));
                    }),
                    new Promise((resolve) => {
                        setTimeout(() => {
                            resolve("ok");
                        }, 200);
                    }),
                ]);
            });

           await proxy.execute("test", "article", {
                settings: {
                    cache: true
                }
            }).catch((e) => {
                expect(e.message).eq("timeout");

                done();
            });


            // expect(dd1.result).not.eq(dd2.result);
            // expect(dd.result).not.eq(dd3.result);
            // expect(dd3.result).not.eq(dd4.result);
        });
    });
});