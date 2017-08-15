"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var base_factory_1 = require("./base.factory");
var engine_def_1 = require("../engines/engine.def");
exports.engineFactory = new base_factory_1.BaseFactory();
exports.engineFactory.add("default", new engine_def_1.DefaultEngine());
//# sourceMappingURL=engine.factory.js.map