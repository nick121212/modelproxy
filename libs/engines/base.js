"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t;
    return { next: verb(0), "throw": verb(1), "return": verb(2) };
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var tv4 = require("tv4");
var compose_1 = require("../libs/compose");
var errors_1 = require("../libs/errors");
var ModelProxyEngine;
(function (ModelProxyEngine) {
    var BaseEngine = (function (_super) {
        __extends(BaseEngine, _super);
        function BaseEngine() {
            return _super.call(this) || this;
        }
        BaseEngine.prototype.validateTv4 = function (obj, schema) {
            var valid = tv4.validateMultiple(obj, schema);
            if (!valid.valid) {
                throw new errors_1.ModelProxyValidaterError("tv4验证错误", valid.errors, valid.missing);
            }
            return true;
        };
        BaseEngine.prototype.validate = function (instance, options) {
            instance.dataSchema && this.validateTv4(options.data, instance.dataSchema);
            instance.paramsSchema && this.validateTv4(options.params, instance.paramsSchema);
            return true;
        };
        BaseEngine.prototype.proxy = function (instance, options) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, {}];
                });
            });
        };
        BaseEngine.prototype.getStatePath = function (instance) {
            if (instance.states && instance.state) {
                return instance.states[instance.state] || "";
            }
            return "";
        };
        return BaseEngine;
    }(compose_1.ModelProxy.Compose));
    ModelProxyEngine.BaseEngine = BaseEngine;
})(ModelProxyEngine = exports.ModelProxyEngine || (exports.ModelProxyEngine = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbmdpbmVzL2Jhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5QkFBMkI7QUFJM0IsMkNBQTZDO0FBRzdDLHlDQUFrRjtBQUVsRixJQUFpQixnQkFBZ0IsQ0EwRGhDO0FBMURELFdBQWlCLGdCQUFnQjtJQUM3QjtRQUF5Qyw4QkFBNkI7UUFDbEU7bUJBQ0ksaUJBQU87UUFDWCxDQUFDO1FBUVMsZ0NBQVcsR0FBckIsVUFBc0IsR0FBUyxFQUFFLE1BQXNCO1lBQ25ELElBQUksS0FBSyxHQUFvQixHQUFHLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLE1BQXdCLENBQUMsQ0FBQztZQUVqRixFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUNmLE1BQU0sSUFBSSxpQ0FBd0IsQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDL0UsQ0FBQztZQUVELE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDaEIsQ0FBQztRQVFELDZCQUFRLEdBQVIsVUFBUyxRQUF5QixFQUFFLE9BQWlCO1lBQ2pELFFBQVEsQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUMzRSxRQUFRLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUM7WUFFakYsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNoQixDQUFDO1FBUUssMEJBQUssR0FBWCxVQUFZLFFBQXlCLEVBQUUsT0FBaUI7OztvQkFDcEQsc0JBQU8sRUFBRSxFQUFDOzs7U0FDYjtRQU9ELGlDQUFZLEdBQVosVUFBYSxRQUF5QjtZQUNsQyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsTUFBTSxJQUFJLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUNwQyxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ2pELENBQUM7WUFFRCxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQ2QsQ0FBQztRQUNMLGlCQUFDO0lBQUQsQ0FBQyxBQXhERCxDQUF5QyxvQkFBVSxDQUFDLE9BQU8sR0F3RDFEO0lBeERxQiwyQkFBVSxhQXdEL0IsQ0FBQTtBQUNMLENBQUMsRUExRGdCLGdCQUFnQixHQUFoQix3QkFBZ0IsS0FBaEIsd0JBQWdCLFFBMERoQyJ9