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
    "state": "dev",
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

describe('modelproxy cache------', function () {
    var proxy;

    before(function () {
        proxy = new modelProxy.ModelProxy();

        var engine = new eng.FetchEngine();

        engine.init();

        proxy.addEngines({
            fetch: engine
        });
        proxy.loadConfig(config, {
            engine: "fetch"
        });
    });

    describe("测试cache", function () {
        it("正常cache", async () => {
            const dd4 = await proxy.execute("tvmaze", "singlesearch.shows", {
                params: {
                    q: "batman"
                },
                settings: {
                    cache: true
                }
            });

            // expect(dd.result).eq(dd1.result);
            // expect(dd1.result).not.eq(dd2.result);
            // expect(dd.result).not.eq(dd3.result);
            // expect(dd3.result).not.eq(dd4.result);
        });
    });
});