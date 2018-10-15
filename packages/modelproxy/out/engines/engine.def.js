"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var engine_base_1 = require("./engine.base");
var compose_1 = require("../libs/compose");
var DefaultEngine = (function (_super) {
    tslib_1.__extends(DefaultEngine, _super);
    function DefaultEngine() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DefaultEngine.prototype.doProxy = function (instance, executeInfo) {
        var otherOptions = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            otherOptions[_i - 2] = arguments[_i];
        }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var c, before, after, error, ctx, err;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        c = new compose_1.Compose();
                        before = executeInfo.before, after = executeInfo.after, error = executeInfo.error;
                        if (before) {
                            c.merge(before);
                        }
                        c.merge(this);
                        if (after) {
                            c.merge(after);
                        }
                        return [4, c.callback()(Object.assign.apply(Object, [{}].concat(otherOptions, [{
                                    executeInfo: executeInfo,
                                    instance: instance
                                }])))];
                    case 1:
                        ctx = _a.sent();
                        if (!ctx.isError) return [3, 4];
                        err = ctx.err;
                        if (!error) return [3, 3];
                        return [4, error.callback()(ctx)];
                    case 2:
                        ctx = _a.sent();
                        _a.label = 3;
                    case 3:
                        if (ctx.isError) {
                            throw err || ctx.err;
                        }
                        _a.label = 4;
                    case 4: return [2, ctx];
                }
            });
        });
    };
    DefaultEngine.prototype.proxy = function (instance, executeInfo) {
        var otherOptions = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            otherOptions[_i - 2] = arguments[_i];
        }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2, this.doProxy.apply(this, [instance, executeInfo].concat(otherOptions))];
            });
        });
    };
    return DefaultEngine;
}(engine_base_1.BaseEngine));
exports.DefaultEngine = DefaultEngine;
