var modelProxy = require("../../libs").modelProxy;
var path = require("path");
var bluebird = require("bluebird");
var expect = require("chai").expect;
var tv4 = require("tv4");
var config = require("../config/config.json");
var config1 = require("../config/config.1.json");

var proxy = new modelProxy.Proxy();

global.Promise = bluebird;


proxy.loadConfig(config).then((result) => {
    return proxy.loadConfig(config1);
}).then((result) => {
    console.log(proxy.getHost("/test1/login", { engine: "default", mockDir: path.resolve(__dirname, "../mocks/") }));

    return proxy.execute("/test1/login", {
        data: { username: "3331", password: "111111" },
        params: {},
        instance: { engine: "default", mockDir: path.resolve(__dirname, "../mocks/") }
    }).then(result => console.info(JSON.stringify(result))).catch(console.error);
    // 
}).then((result) => {
    console.info(JSON.stringify(result));
}).catch(console.error);