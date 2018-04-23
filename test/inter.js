var path = require("path");
var bluebird = require("bluebird");
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

describe('modelproxy interface', function () {
    var proxy;
    var data = { "username": "nick", "password": "111111" };

    before(function () {
        global.Promise = bluebird;
        proxy = new modelProxy.ModelProxy();
        proxy.loadConfig(config);
    });

    describe("测试接口", function () {
        it('测试文章接口', function (done) {
            var article = proxy.getNs("test").get("article");
            let path = article.getPath();

            expect(article).to.be.a("object");
            expect(article.get).to.be.a("function");
            expect(article.post).to.be.a("function");
            expect(article.put).to.be.a("function");
            expect(article.delete).to.be.a("function");
            expect(path).to.be.equal("http://www.baidu.com/articles");

            article.get().then(function (articles) {
                expect(articles).to.be.a("object");
                expect(articles.constructor).to.be.equal({}.constructor);

                return article.post({ data: { title: '测试文章标题', content: '测试文章内容' } });
            }).then(function (art) {
                expect(art.method).to.equal("POST");
            }).then(done.bind(null, null));
        });
    });
});