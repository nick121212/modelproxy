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

describe('modelproxy engine', function () {
    var proxy, defEngine;
    var data = { "username": "nick", "password": "111111" };

    before(function () {
        defEngine = new modelProxy.DefaultEngine();

        proxy = new modelProxy.ModelProxy();
        proxy.addEngines({
            test: defEngine
        });
        proxy.loadConfig(config, {
            engine: "test"
        });
    });

    describe("测试engine", function () {
        it("engine base", function (done) {
            var article = proxy.getNs("test").get("article");

            defEngine.use(function (ctx, next) {
                expect(ctx.executeInfo.instance.method).to.equal("GET");
                next();
            });

            article.get().then(done.bind(null, null));
        });
    });
});