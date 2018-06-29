"use strict";
const modelproxy = require("./");
const proxy = new modelproxy.ModelProxy();
proxy.loadConfig({
    "engine": "default",
    "interfaces": [{
            "key": "articles",
            "method": "GET",
            "path": "/articles",
            "title": "文章接口",
        }, {
            "key": "users",
            "method": "GET",
            "path": "/users",
            "title": "用户列表",
        }],
    "key": "test",
    "mockDir": "/mocks/",
    "state": "dev",
    "states": {
        "dev": "http://www.baidu.com",
        "prod": "http://www.baidu.com",
        "stag": "http://www.baidu.com",
        "test": "http://www.baidu.com",
    },
    "title": "p-uc",
}, {});
let users = proxy.getNs("test").get("users");
let articles = proxy.getNs("test").get("articles");
if (users && articles) {
    const userArticles = proxy.minix("test", "users", "articles")(1);
    console.log(userArticles);
    console.log(proxy.minix("test", "users")());
    userArticles.delete(1);
}
