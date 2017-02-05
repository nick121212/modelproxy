var modelProxy = require("../../built/index.js").default;
var path = require("path");
var expect = require("chai").expect;
var config = require("../config/config.json");
var config1 = require("../config/config.1.json");

var proxy = new modelProxy.ModelProxy();
var mockEngine = modelProxy.engineFactory.use("mockjs");

mockEngine.MockObj.Random.extend({
    constellation: (date) => {
        const constellations = ['白羊座', '金牛座', '双子座', '巨蟹座', '狮子座', '处女座', '天秤座', '天蝎座', '射手座', '摩羯座', '水瓶座', '双鱼座'];

        return this.pick(constellations)
    }
});

function NodeEngine() {}
NodeEngine.prototype = {
    validate: function() {
        return true;
    },

    proxy: function(intance) {
        return require(intance.path);
    }
};

modelProxy.engineFactory.use("mockjs").mockEngine = new NodeEngine();

proxy.loadConfig(config).then((result) => {
    return proxy.loadConfig(config1);
}).then((result) => {
    return result.getNs("test1");
}).then((result) => {
    if (!result) {
        return;
    }
    return result.login({ usename: "1", password: "111111" }, {}, { engine: "mockjs", mockDir: path.resolve(__dirname, "../mocks/") });
}).then((result) => {
    console.info(JSON.stringify(result));

}).catch(console.error);