var path = require("path");
var tv4 = require("tv4");
var expect = require("chai").expect;
var bluebird = require("bluebird");
var assert = require("chai").assert;
var modelProxy = require("../libs/index").modelProxy;

describe('modelproxy', function() {
    var proxy;
    var data = { "username": "nick", "password": "111111" };

    before(function(done) {
        global.Promise = bluebird;
        new modelProxy.Proxy()
            .loadConfig({
                "key": "test",
                "title": "p-uc",
                "engine": "default",
                "mockDir": "/mocks/",
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
                    "engine": "default",
                    "dataSchema": {
                        "type": "object",
                        "required": ["username", "password"],
                        "properties": {
                            "username": {
                                "type": "string"
                            },
                            "password": {
                                "type": "string"
                            }
                        }
                    },
                    "config": {
                        "test": "test-1"
                    }
                }]
            }).then(function(result) {
                proxy = result;
                done();
            });
    });

    // after(function() {
    //     proxy = null;
    // });

    describe("命名空间", function() {
        it('测试命名空间test', function() {
            expect(proxy.getNs("test")).to.be.a("object");
        });
        it('测试命名空间test1,抛出没有找到test1空间', function() {
            assert.throw((function() { proxy.getNs("test1"); }));
        });
    });

    describe("测试方法", function() {
        it('测试login方法是否存在', function() {
            expect(proxy.getNs("test").login).to.be.a("function")
        });
        it('测试login方法,抛出错误的engine', function(done) {
            proxy.getNs("test").login({ data: data, instance: { engine: "mockjs" } }).catch(function(err) {
                expect(err).to.be.an.instanceof(modelProxy.errors.ModelProxyMissingError);
                expect(err.message).to.contain('mockjs');
                done();
            });
        });
        it('测试login方法,抛出验证错误', function(done) {
            var data1 = { password: "111111" };
            try {
                proxy.getNs("test").login({ data: data1, params: {} }).catch(function(err) {
                    expect(err).to.be.an.instanceof(modelProxy.errors.ModelProxyValidaterError);
                    expect(err.error[0].code).to.equal(302);
                    done();
                });
            } catch (e) {
                console.log(e);
            }
        });
        it('测试login方法成功', function(done) {
            var test = proxy.getNs("test");

            test.login({
                data: data,
                params: {},
                instance: { engine: "default" }
            }).then(function(result) {
                expect(result).to.be.an("object");
                done();
            });
        });
        it('测试login方法成功,使用json path', function(done) {
            proxy.execute("/test/login", {
                data: data,
                params: {},
                instance: { engine: "default" }
            }).then(function(result) {
                expect(result).to.be.an("object");
                done();
            });
        });
    });
});