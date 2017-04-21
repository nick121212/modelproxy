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
var base = require("./base");
var ModelProxyEngine;
(function (ModelProxyEngine) {
    var DefaultEngine = (function (_super) {
        __extends(DefaultEngine, _super);
        function DefaultEngine() {
            var _this = _super.call(this) || this;
            _this.use(function (ctx, next) {
                next();
                return new Promise(function (resolve) {
                    resolve();
                });
            });
            return _this;
        }
        DefaultEngine.prototype.proxy = function (instance, options) {
            return __awaiter(this, void 0, void 0, function () {
                var fn;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            fn = this.callback(function () { });
                            return [4 /*yield*/, fn({})];
                        case 1:
                            _a.sent();
                            console.log("接口的路径：", this.getFullPath(instance, options));
                            return [2 /*return*/, {}];
                    }
                });
            });
        };
        return DefaultEngine;
    }(base.ModelProxyEngine.BaseEngine));
    ModelProxyEngine.DefaultEngine = DefaultEngine;
})(ModelProxyEngine = exports.ModelProxyEngine || (exports.ModelProxyEngine = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbmdpbmVzL2RlZmF1bHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSw2QkFBK0I7QUFHL0IsSUFBaUIsZ0JBQWdCLENBd0JoQztBQXhCRCxXQUFpQixnQkFBZ0I7SUFDN0I7UUFBbUMsaUNBQWdDO1FBQy9EO1lBQUEsWUFDSSxpQkFBTyxTQVNWO1lBUEcsS0FBSSxDQUFDLEdBQUcsQ0FBQyxVQUFDLEdBQUcsRUFBRSxJQUFJO2dCQUNmLElBQUksRUFBRSxDQUFDO2dCQUVQLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU87b0JBQ3ZCLE9BQU8sRUFBRSxDQUFDO2dCQUNkLENBQUMsQ0FBQyxDQUFDO1lBQ1AsQ0FBQyxDQUFDLENBQUM7O1FBQ1AsQ0FBQztRQUVLLDZCQUFLLEdBQVgsVUFBWSxRQUF5QixFQUFFLE9BQWlCOztvQkFDaEQsRUFBRTs7OztpQ0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQVEsQ0FBQyxDQUFDOzRCQUVqQyxxQkFBTSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUE7OzRCQUFaLFNBQVksQ0FBQzs0QkFFYixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDOzRCQUUzRCxzQkFBTyxFQUFFLEVBQUM7Ozs7U0FDYjtRQUNMLG9CQUFDO0lBQUQsQ0FBQyxBQXRCRCxDQUFtQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxHQXNCbEU7SUF0QlksOEJBQWEsZ0JBc0J6QixDQUFBO0FBQ0wsQ0FBQyxFQXhCZ0IsZ0JBQWdCLEdBQWhCLHdCQUFnQixLQUFoQix3QkFBZ0IsUUF3QmhDIn0=