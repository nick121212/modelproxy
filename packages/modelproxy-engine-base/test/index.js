var expect = require("chai").expect;
var modelProxy = require("modelproxy");
var eng = require("../out/index");

var config = {
    key: "tvmaze",
    title: "p-uc",
    engine: "json",
    mockDir: "/mocks/",
    states: {
        prod: "http://api.tvmaze.com",
        test: "http://api.tvmaze.com",
        dev: "/tvmaze",
        stag: "http://api.tvmaze.com"
    },
    state: "stag",
    interfaces: [
        {
            key: "search.shows",
            title: "搜索所有的电影数据",
            method: "GET",
            path: "/search/shows"
        },
        {
            key: "singlesearch.shows",
            title: "搜索单步电影数据",
            method: "GET",
            path: "/singlesearch/shows"
        }
    ]
};

describe("modelproxy base engine------", function() {
    var proxy;

    before(function() {
        var engine = new eng.BaseEngine((url, method, data, ctx) => {
            return url + method;
        });

        proxy = new modelProxy.ModelProxy();
        engine.use(engine.fetch.bind(engine));
        engine.use(async (ctx, next) => {
            // ctx.result = ctx.result.clone();
            // ctx.result = await ctx.result.json();

            await next();
        });

        proxy.addEngines({
            fetch: engine
        });
        proxy.loadConfig(config, {
            engine: "fetch"
        });
    });

    describe("测试cache", function(done) {
        it("接口的返回值不为空", async () => {
            const dd = await proxy.execute("tvmaze", "singlesearch.shows", {
                params: {
                    q: "batman"
                },
                settings: {
                    cache: true,
                    timeout: 10000
                }
            });

            expect(dd).eq("http://api.tvmaze.com/singlesearch/shows?q=batmanGET");

        });
    });
});
