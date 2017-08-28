"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var compose_1 = require("./compose");
var ComposeProxy = (function (_super) {
    __extends(ComposeProxy, _super);
    function ComposeProxy() {
        var _this = _super.call(this) || this;
        _this.composes = {};
        return _this;
    }
    return ComposeProxy;
}(compose_1.Compose));
exports.ComposeProxy = ComposeProxy;
