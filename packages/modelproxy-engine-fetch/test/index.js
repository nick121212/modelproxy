var path = require("path");
var expect = require("chai").expect;
var assert = require("chai").assert;
var modelProxy = require("modelproxy");
var eng = require("../out/index");

var config = {
    key: "tvmaze",
    title: "p-uc",
    engine: "json",
    mockDir: "/mocks/",
    states: {
        prod: "http://www.baidu.com",
        test: "http://www.baidu.com",
        dev: "http://www.baidu.com",
        stag: "http://www.baidu.com"
    },
    state: "stag",
    interfaces: [
        {
            key: "singlesearch.shows",
            title: "搜索单步电影数据",
            method: "GET",
            path: "/"
        }
    ]
};

describe("modelproxy fetch engine------", function() {
    var proxy;

    before(function() {
        var engine = new eng.FetchEngine();

        proxy = new modelProxy.ModelProxy();
        engine.use(engine.fetch.bind(engine));
        engine.use(async (ctx, next) => {
            // console.log(ctx.result);
            
            ctx.result = ctx.result.clone();
            // ctx.result = await ctx.result.text();

            // console.log(ctx.result);

            await next();
        });

        proxy.addEngines({
            fetch: engine
        });
        proxy.loadConfig(config, {
            engine: "fetch"
        });
    });

    describe(
        "测试cache",
        function(done) {
            it("接口的返回值不为空", async () => {
                const dd = await proxy.execute("tvmaze", "singlesearch.shows", {
                    params: {
                        q: "batman"
                    },
                    settings: {
                        cache: true,
                        timeout: 20000
                    }
                });
                const dd1 = await proxy.execute("tvmaze", "singlesearch.shows", {
                    params: {
                        q: "batman"
                    },
                    settings: {
                        cache: true,
                        timeout: 20000
                    }
                });

                expect(dd.result.id).not.to.be.null;
                expect(dd1.result.id).not.to.be.null;
            });
        },
        2000
    );
});
