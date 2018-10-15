var path = require("path");
var expect = require("chai").expect;
var assert = require("chai").assert;
var modelProxy = require("../out/index");

var config = {
	key: "test",
	title: "p-uc",
	engine: "default",
	mockDir: "/mocks/",
	states: {
		dev: "http://www.baidu.com",
	},
	state: "dev",
	interfaces: [
		{
			key: "article",
			title: "文章接口",
			method: "GET",
			path: "/articles",
		},
		{
			key: "login",
			title: "登陆接口",
			method: "POST",
			path: "/passport/login",
			engine: "default",
			config: {
				test: "test-1",
			},
		},
	],
};

describe("处理错误的逻辑", function() {
	var proxy, defEngine;

	before(function() {
		defEngine = new modelProxy.DefaultEngine();

		proxy = new modelProxy.ModelProxy();
		proxy.addEngines({
			test: defEngine,
		});
		proxy.loadConfig(config, {
			engine: "test",
		});
	});

	describe("测试error", function() {
		it("错误逻辑处理", function(done) {
			proxy
				.execute("test", "article", {
					before: new modelProxy.Compose(function(ctx, next) {
						throw new Error("before 1");
						// next();
					}),
					error: new modelProxy.Compose(function(ctx, next) {
						return proxy
							.execute("test", "login", {})
							.then(function(res) {
								ctx.result = res;
								ctx.isError = false;
								ctx.err = null;
								next();
							})
							.catch(function(err) {
								next();
							});
					}),
				})
				.then(function(data) {
                    expect(data.result.instance.key).to.eq("login");
                    done();
				})
				.catch(function(err) {
                    done()
				});
		});
	});
});
