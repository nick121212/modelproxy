var modelProxy = require("../../built/node").default;
var path = require("path");
var expect = require("chai").expect;
var config = require("../config/config.json");
var config1 = require("../config/config.1.json");

var proxy = new modelProxy.ModelProxy();

proxy.loadConfig(config).then((result) => {
    return proxy.loadConfig(config1);
}).then((result) => {
    return result.getNs("test1");
}).then((result) => {
    if (!result) {
        return;
    }
    return result.login({ usename: "1", password: "111111" }, {}, { engine: "default", mockDir: path.resolve(__dirname, "../mocks/") });
}).then((result) => {
    console.info(JSON.stringify(result));
}).catch(console.error);