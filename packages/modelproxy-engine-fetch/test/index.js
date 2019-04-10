var path = require("path");
var expect = require("chai").expect;
var assert = require("chai").assert;
var modelProxy = require("modelproxy");
var eng = require("../out/index");

var config = {
    "key": "tvmaze",
    "title": "p-uc",
    "engine": "json",
    "mockDir": "/mocks/",
    "states": {
        "prod": "http://api.tvmaze.com",
        "test": "http://api.tvmaze.com",
        "dev": "/tvmaze",
        "stag": "http://api.tvmaze.com"
    },
    "state": "stag",
    "interfaces": [{
        "key": "search.shows",
        "title": "搜索所有的电影数据",
        "method": "GET",
        "path": "/search/shows"
    }, {
        "key": "singlesearch.shows",
        "title": "搜索单步电影数据",
        "method": "GET",
        "path": "/singlesearch/shows"
    }]
};

describe('modelproxy fetch engine------', function () {
    var proxy;

    before(function () {
        proxy = new modelProxy.ModelProxy();

        var engine = new eng.FetchEngine();

        engine.init();

        engine.use(async (ctx, next) => {
            ctx.result = ctx.result.clone();
            ctx.result = await ctx.result.json();

            await next();
        });

        proxy.addEngines({
            fetch: engine
        });
        proxy.loadConfig(config, {
            engine: "fetch"
        });
    });

    describe("测试cache", function (done) {
        it("接口的返回值不为空", async () => {
            const dd = await proxy.execute("tvmaze", "singlesearch.shows", {
                params: {
                    q: "batman"
                },
                settings: {
                    cache: true,
                    timeout:10000
                }
            });
            const dd1 = await proxy.execute("tvmaze", "singlesearch.shows", {
                params: {
                    q: "batman"
                },
                settings: {
                    cache: true,
                    timeout:10000
                }
            });

            expect(dd.result.id).not.to.be.null;
            expect(dd1.result.id).not.to.be.null;
        });
    });
});