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

    before(function () {
        global.Promise = bluebird;
        proxy = new modelProxy.ModelProxy();
        proxy.loadConfig(config);
    });

    describe("命名空间", function () {
        it('测试命名空间test', function () {
            expect(proxy.getNs("test")).to.be.a("object");
        });
        it('测试命名空间test1,抛出没有找到test1空间', function () {
            assert.throw((function () { proxy.getNs("test1"); }));
        });
    });

    describe("execute function", function () {
        
        it('测试execute，输入错误的命名空间,返回没有找到命名空间的错误', function () {
            proxy.execute("tes3t1","11").catch((e)=>{
                expect(e.message).to.equal("没有找到tes3t1空间;当前命名空间【test】");
            })
        });
    });
});