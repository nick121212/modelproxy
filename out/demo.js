"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require("./");
let proxy = new _1.ModelProxy();
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
}, {}).then(() => __awaiter(this, void 0, void 0, function* () {
    let login = proxy.getNs("test").get("login");
    if (login) {
        console.log(login.getFullPath({ params: { tag: "ni", a: 33 } }), yield login.get());
    }
})).then(() => __awaiter(this, void 0, void 0, function* () {
    let article = proxy.getNs("test").get("article");
    if (article) {
        console.log("getPath", article.getFullPath({
            data: {},
            params: { a: 1 }
        }));
    }
})).catch(console.error);
