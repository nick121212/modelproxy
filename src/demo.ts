import { ModelProxy } from "./";

let proxy = new ModelProxy();

proxy.loadConfig({
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
        "key": "article",
        "title": "文章接口",
        "method": "GET",
        "path": "/articles"
    }, {
        "key": "login",
        "title": "登陆接口",
        "method": "POST",
        "path": "/passport/login/:tag",
        "engine": "default",
        "config": {
            "test": "test-1"
        }
    }]
}, {});

let login = proxy.getNs("test").get("login");

if (login) {
    (async () => {
        console.log("登录接口：", login.getFullPath({ params: { tag: "ni", a: 33 } }), await login.get(null, {
            params: { tag: "test" }
        }));
    })();
}

let article = proxy.getNs("test").get("article");

if (article) {
    console.log("getPath", article.getFullPath({
        data: {},
        params: { a: 1 }
    }));
    (async () => {
        console.log(await article.get(null, { params: { tag: "nick" } }));
        console.log(await article.get(1, { params: { tag: "nick" } }));
        console.log(await article.put(1, { data: { tag: "nick" } }));
        console.log(await article.delete(1));
        console.log(await article.post({ data: { tag: "nick" } }));
        console.log(await proxy.execute("test", "article"));
        console.log(await proxy.execute("test", "login", {
            params: {
                tag: "nora"
            }
        }).catch(console.log));
    })()
}

if (login && article) {
    proxy.executeAll({
        login: login.get.bind(login, null, {
            params: {
                tag: "nora"
            }
        }),
        article: article.delete.bind(article, 1)
    }).then(console.log);

    proxy.race([{
        ns: login.ns, key: login.key, options: {
            params: { tag: "race" }
        }
    }, article.delete(1)]).then(console.log).catch(console.error);
}
