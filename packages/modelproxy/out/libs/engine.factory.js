"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_factory_1 = require("./base.factory");
const engine_def_1 = require("../engines/engine.def");
exports.engineFactory = new base_factory_1.BaseFactory();
exports.engineFactory.add("default", new engine_def_1.DefaultEngine());
