var modelProxy = require("../built/node").default;
var path = require("path");
var expect = require("chai").expect;
var assert = require("chai").assert;

describe('modelproxy', function() {
    var proxy;

    before(function(done) {
        new modelProxy.ModelProxy()
            .loadConfig({
                "key": "test",
                "title": "p-uc",
                "engine": "mockjs",
                "mockDir": "./mocks/",
                "states": {
                    "prod": "http://www.baidu.com",
                    "test": "http://www.baidu.com",
                    "dev": "http://www.baidu.com",
                    "stag": "http://www.baidu.com"
                },
                "state": "dev",
                "interfaces": [{
                    "key": "login",
                    "title": "登陆接口",
                    "method": "GET",
                    "path": "/passport/login",
                    "config": {
                        "test": "test-1"
                    }
                }]
            }).then(function(result) {
                proxy = result;
                done();
            });
    });

    after(function() {
        proxy = null;
    });

    describe("命名空间", function() {
        it('测试命名空间test', function() {
            expect(proxy.getNs("test")).to.be.a("object");
        });
        it('测试命名空间test1,抛出没有找到test1空间', function() {
            assert.throw((function() { proxy.getNs("test1"); }), "没有找到test1空间");
        });
    });

    describe("测试方法", function() {
        it('测试login方法是否存在', function() {
            expect(proxy.getNs("test").login).to.be.a("function")
        });
        it('测试login方法,抛出错误的engine', function(done) {
            proxy.getNs("test").login({ username: "nick", "password": "111111" }, {}).then(function(result) {

            }, function(err) {
                expect(err).to.be.an.instanceof(Error);
                expect(err.message).to.contain('mockjs');
                done();
            });
        });
        it('测试login方法成功', function(done) {
            var data = { username: "nick", "password": "111111" };
            proxy.getNs("test").login(data, {}, { engine: "default" }).then(function(result) {
                expect(result).to.be.deep.equal(data);
                done();
            });
        });
    });
});