"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var factory = require("./base.factory");
var ModelProxy;
(function (ModelProxy) {
    var ComposeFactory = (function (_super) {
        __extends(ComposeFactory, _super);
        function ComposeFactory() {
            return _super.call(this) || this;
        }
        return ComposeFactory;
    }(factory.ModelProxy.BaseFactory));
    ModelProxy.ComposeFactory = ComposeFactory;
})(ModelProxy = exports.ModelProxy || (exports.ModelProxy = {}));
//# sourceMappingURL=compose.factory.js.map