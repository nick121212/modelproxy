"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var BaseError = (function () {
    function BaseError(message) {
        this.message = message;
        this.stack = (new Error()).stack;
    }
    return BaseError;
}());
exports.BaseError = BaseError;
var ModelProxyValidaterError = (function (_super) {
    __extends(ModelProxyValidaterError, _super);
    function ModelProxyValidaterError(message, error, missing) {
        var _this = _super.call(this, message) || this;
        _this.name = "ModelProxy.ValidaterError";
        _this.error = error;
        _this.missing = missing;
        return _this;
    }
    return ModelProxyValidaterError;
}(BaseError));
exports.ModelProxyValidaterError = ModelProxyValidaterError;
var ModelProxyMissingError = (function (_super) {
    __extends(ModelProxyMissingError, _super);
    function ModelProxyMissingError(message) {
        var _this = _super.call(this, message) || this;
        _this.name = "ModelProxy.MissingError";
        return _this;
    }
    return ModelProxyMissingError;
}(BaseError));
exports.ModelProxyMissingError = ModelProxyMissingError;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3JzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2xpYnMvZXJyb3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUVBO0lBS0ksbUJBQVksT0FBZ0I7UUFDeEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFFdkIsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLElBQUksS0FBSyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFDckMsQ0FBQztJQUNMLGdCQUFDO0FBQUQsQ0FBQyxBQVZELElBVUM7QUFWWSw4QkFBUztBQWV0QjtJQUE4Qyw0Q0FBUztJQUluRCxrQ0FBWSxPQUFlLEVBQUUsS0FBdUQsRUFBRSxPQUFvQjtRQUExRyxZQUNJLGtCQUFNLE9BQU8sQ0FBQyxTQUtqQjtRQUhHLEtBQUksQ0FBQyxJQUFJLEdBQUcsMkJBQTJCLENBQUM7UUFDeEMsS0FBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsS0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7O0lBQzNCLENBQUM7SUFDTCwrQkFBQztBQUFELENBQUMsQUFYRCxDQUE4QyxTQUFTLEdBV3REO0FBWFksNERBQXdCO0FBZ0JyQztJQUE0QywwQ0FBUztJQUNqRCxnQ0FBWSxPQUFlO1FBQTNCLFlBQ0ksa0JBQU0sT0FBTyxDQUFDLFNBR2pCO1FBREcsS0FBSSxDQUFDLElBQUksR0FBRyx5QkFBeUIsQ0FBQzs7SUFDMUMsQ0FBQztJQUNMLDZCQUFDO0FBQUQsQ0FBQyxBQU5ELENBQTRDLFNBQVMsR0FNcEQ7QUFOWSx3REFBc0IifQ==