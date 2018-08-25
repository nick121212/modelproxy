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
        "key": "user",
        "title": "用户列表",
        "method": "GET",
        "path": "/users",
        "engine": "default"
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
        proxy = new modelProxy.ModelProxy();
        proxy.loadConfig(config);

        // proxy.forEach(console.log);

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
            proxy.execute("tes3t1", "11").catch((e) => {
                expect(e.message).to.equal("没有找到tes3t1空间;");
            })
        });
    });

    describe('executeAll function', () => {
        it('测试2个方法', (done) => {
            let login = proxy.getNs("test").get("login");
            let article = proxy.getNs("test").get("article");

            proxy.executeAll({
                login: login.get.bind(login, {
                    params: {
                        tag: "nora"
                    }
                }),
                article: article.delete.bind(article, 1)
            }).then(done.bind(null, null));
        });
    });

    describe('race function', () => {
        it('测试2个方法', (done) => {
            let login = proxy.getNs("test").get("login");
            let article = proxy.getNs("test").get("article");

            proxy.race([
                login.post(),
                article.getOne(1)
            ]).then(done.bind(null, null));
        });
    });

    describe('minix function', () => {
        it('合并user和article接口', () => {
            const userArticles = proxy.minix("test", "user", "article")(1);

            expect(userArticles.path).to.be.equal("/users/1/articles");
        });
    });

    describe('getFullPath 方法测试', () => {
        it('getFullPath方法测试', () => {
            const user = proxy.getNs("test").get("user");

            expect(user.getFullPath({
                params: {
                    a: 1
                }
            })).to.be.equal("http://www.baidu.com/users?a=1");
        });
    });

    describe('compose 方法的测试', () => {
        it('混入单个compose', async () => {
            const user = proxy.getNs("test").get("user");
            const dd = await user.get({
                before: new modelProxy.Compose(async (ctx, next) => {
                    ctx.result = [1];
                    await next();
                    ctx.result.push(2);
                }, async (ctx, next) => {
                    ctx.result.push(3);
                    await next();
                    ctx.result.push(4);
                })
            });

            expect(dd.result.join()).to.eq("1,3,4,2");
        });

        it('混入单个默認compose', async () => {
            proxy = new modelProxy.ModelProxy({
                before: new modelProxy.Compose(async (ctx, next) => {
                    ctx.result = [1];
                    await next();
                    ctx.result.push(2);
                }, async (ctx, next) => {
                    ctx.result.push(3);
                    await next();
                    ctx.result.push(4);
                })
            });
            proxy.loadConfig(config);

            const dd =  await proxy.getNs("test").get("user").get();

            expect(dd.result.join()).to.eq("1,3,4,2");
        });

        it('混入单个錯誤compose', async (done) => {
            proxy = new modelProxy.ModelProxy({
                before: new modelProxy.Compose(async (ctx, next) => {
                    throw new Error("nick test");
                }),
                error: new modelProxy.Compose(async (ctx, next) => {
                    ctx.isError = false;
                })
            });
            proxy.loadConfig(config);

            try {
                await proxy.execute("test", "user")
            } catch (e) {
                expect(e.message).eq("nick test");
            } finally {
                done();
            }
        });
    });

});