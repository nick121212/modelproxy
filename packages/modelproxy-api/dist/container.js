"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_1 = require("inversify");
const modelproxy_1 = require("modelproxy");
const log_1 = require("./service/log");
const proxy_1 = require("./service/proxy");
const container = new inversify_1.Container({
    autoBindInjectable: true,
    skipBaseClassChecks: true
});
exports.container = container;
inversify_1.decorate(inversify_1.injectable(), modelproxy_1.Compose);
inversify_1.decorate(inversify_1.injectable(), modelproxy_1.ModelProxy);
inversify_1.decorate(inversify_1.injectable(), modelproxy_1.BaseEngine);
container.bind("log").toConstantValue(log_1.log).whenTargetTagged("color", false);
container.bind("log").toConstantValue(log_1.colorLog).whenTargetTagged("color", true);
container.bind("proxy").toConstantValue(proxy_1.proxy);
//# sourceMappingURL=container.js.map