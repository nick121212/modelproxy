"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var compose = require("./compose");
var ModelProxy;
(function (ModelProxy) {
    var ComposeProxy = (function (_super) {
        __extends(ComposeProxy, _super);
        function ComposeProxy() {
            var _this = _super.call(this) || this;
            _this.composes = {};
            return _this;
        }
        return ComposeProxy;
    }(compose.ModelProxy.Compose));
    ModelProxy.ComposeProxy = ComposeProxy;
})(ModelProxy = exports.ModelProxy || (exports.ModelProxy = {}));
//# sourceMappingURL=cproxy.js.map