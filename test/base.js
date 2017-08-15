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

describe('modelproxy base', function () {
    var proxy;
    var data = { "username": "nick", "password": "111111" };

    before(function (done) {
        global.Promise = bluebird;
        proxy = new modelProxy.ModelProxy();
        proxy.loadConfig(config).then(done.bind(null, null));
    });

    describe("命名空间", function () {
        it('测试命名空间test', function () {
            expect(proxy.getNs("test")).to.be.a("object");
        });
        it('测试命名空间test1,抛出没有找到test1空间', function () {
            assert.throw((function () { proxy.getNs("test1"); }));
        });
    });

    // describe("测试方法", function () {
    //     it('测试login方法是否存在', function () {
    //         expect(proxy.getNs("test").login).to.be.a("function")
    //     });
    //     it('测试login方法,抛出错误的engine', function (done) {
    //         proxy.getNs("test").login({ data: data, instance: { engine: "mockjs" } }).catch(function (err) {
    //             expect(err).to.be.an.instanceof(modelProxy.errors.ModelProxyMissingError);
    //             expect(err.message).to.contain('mockjs');
    //             done();
    //         });
    //     });
    //     it('测试login方法,抛出验证错误', function (done) {
    //         var data1 = { password: "111111" };
    //         try {
    //             proxy.getNs("test").login({ data: data1, params: {} }).catch(function (err) {
    //                 expect(err).to.be.an.instanceof(modelProxy.errors.ModelProxyValidaterError);
    //                 expect(err.error[0].code).to.equal(302);
    //                 done();
    //             });
    //         } catch (e) {
    //             console.log(e);
    //         }
    //     });
    //     it('测试login方法成功', function (done) {
    //         var test = proxy.getNs("test");

    //         test.login({
    //             data: data,
    //             params: {},
    //             instance: { engine: "default" }
    //         }).then(function (result) {
    //             expect(result).to.be.an("object");
    //             done();
    //         });
    //     });
    //     it('测试login方法成功,使用json path', function (done) {
    //         proxy.execute("/test/login", {
    //             data: data,
    //             params: {},
    //             instance: { engine: "default" }
    //         }).then(function (result) {
    //             expect(result).to.be.an("object");
    //             done();
    //         });
    //     });
    // });
});