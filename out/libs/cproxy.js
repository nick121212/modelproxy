"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const compose_1 = require("./compose");
class ComposeProxy extends compose_1.Compose {
    constructor() {
        super();
        this.composes = {};
    }
}
exports.ComposeProxy = ComposeProxy;
