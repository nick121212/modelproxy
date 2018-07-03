"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const routing_controllers_1 = require("routing-controllers");
const inversify_1 = require("inversify");
const modelproxy_1 = require("modelproxy");
const typeorm_1 = require("typeorm");
const lodash_1 = tslib_1.__importDefault(require("lodash"));
const repository_1 = require("../decorator/repository");
const project_1 = require("../entity/project");
/**
 * 接口转发路由
 */
let UserController = class UserController {
    constructor($mp) {
        this.$mp = $mp;
    }
    /**
     * 接口做转发，所有的请求都汇总这里处理
     * @param repo     数据库repo
     * @param req      request
     * @param res      response
     * @param params   请求参数
     * @param data     请求body参数
     */
    all(repo, req, res, params = {}, data) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            // 过滤path
            const paths = req.path.replace(/^\//ig, "").split("/").splice(1);
            const [ns, ...keys] = paths;
            // 如果paths小于2位，则抛出异常
            if (paths.length < 2) {
                throw new routing_controllers_1.HttpError(404);
            }
            // 调用真实的接口请求
            return this.execute(yield this.loadConfig(ns, repo), keys.join("."), req, res, params, data);
        });
    }
    /**
     * 第一次请求的时候，回去查看数据库有没有这个项目
     * 如果有则，吧项目中的接口load道modelproxy中
     * @param ns
     * @param repo
     */
    loadConfig(ns, repo) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (!this.$mp.hasNs(ns)) {
                const project = yield repo.findOne({
                    where: {
                        key: typeorm_1.Equal(ns)
                    },
                    relations: ["actions", "states"]
                });
                // 如果有项目，则添加项目信息到modelproxy
                if (project) {
                    // 放入接口信息
                    this.$mp.loadConfig(Object.assign({}, project, {
                        states: lodash_1.default.reduce(lodash_1.default.map(project.states, (s) => {
                            return {
                                [s.stateName]: s.stateUri
                            };
                        }), Object.assign),
                        interfaces: lodash_1.default.map(project.actions, ({ key, title, method, path }) => {
                            return {
                                key,
                                title,
                                method,
                                path
                            };
                        })
                    }), {});
                }
            }
            if (!this.$mp.hasNs(ns)) {
                throw new routing_controllers_1.HttpError(404, "没有找到命名空间！");
            }
            return this.$mp.getNs(ns);
        });
    }
    execute(nsFactory, key, req, res, params, data) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            let interFace = nsFactory.get(key);
            if (!interFace) {
                throw new routing_controllers_1.HttpError(404, "没有找到接口！");
            }
            // 拼装参数
            const { method } = req;
            const options = {
                params,
                data,
                instance: {
                    engine: "fetch",
                    state: "dev"
                },
                settings: {
                    cache: false
                }
            };
            const func = interFace[method.toLocaleLowerCase()];
            if (func) {
                if (method.toLocaleLowerCase() === "get") {
                    return func.call(interFace, params ? params._id : null, options, {
                        response: res,
                        request: req
                    });
                }
                return func.call(interFace, options, {
                    response: res,
                    request: req
                });
            }
            throw new routing_controllers_1.HttpError(404, "没有找到方法!");
        });
    }
};
tslib_1.__decorate([
    routing_controllers_1.Get("/*"),
    routing_controllers_1.Post("/*"),
    routing_controllers_1.Delete("/*"),
    routing_controllers_1.Put("/*"),
    tslib_1.__param(0, repository_1.Respository({
        type: project_1.ProjectEntity
    })),
    tslib_1.__param(1, routing_controllers_1.Req()),
    tslib_1.__param(2, routing_controllers_1.Res()),
    tslib_1.__param(3, routing_controllers_1.QueryParams()),
    tslib_1.__param(4, routing_controllers_1.Body({ required: false })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeorm_1.Repository, Object, Object, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UserController.prototype, "all", null);
UserController = tslib_1.__decorate([
    inversify_1.injectable(),
    routing_controllers_1.JsonController("/proxy"),
    tslib_1.__param(0, inversify_1.inject("proxy")),
    tslib_1.__metadata("design:paramtypes", [modelproxy_1.ModelProxy])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=proxy.js.map