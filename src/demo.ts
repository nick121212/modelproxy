import { ModelProxy } from './';

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
}, {}).then(async () => {
    let login = proxy.getNs("test").get("login");

    if (login) {
        console.log(await login.get());
    }
}).then(async () => {
    let article = proxy.getNs("test").get("article");

    if (article) {
        console.log(article.getPath());
        console.log(await article.get(null, { params: { tag: "nick" } }));
        console.log(await article.get(1, { params: { tag: "nick" } }));
        console.log(await article.put(1, { data: { tag: "nick" } }));
        console.log(await article.delete(1));
        console.log(await article.post({ data: { tag: "nick" } }));
        console.log(await proxy.execute("test", "article"));

        console.log(await proxy.execute("test", "login"));
    }
}).catch(console.error);
