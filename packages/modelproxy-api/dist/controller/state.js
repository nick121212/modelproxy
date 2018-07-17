"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const routing_controllers_1 = require("routing-controllers");
const inversify_1 = require("inversify");
const typeorm_routing_controllers_extensions_1 = require("typeorm-routing-controllers-extensions");
const typeorm_1 = require("typeorm");
const repository_1 = require("../decorator/repository");
const state_1 = require("../entity/state");
const project_1 = require("../entity/project");
/**
 * 项目相关信息
 */
let ProjectController = class ProjectController {
    constructor() {
    }
    /**
     * 获取所有的数据
     */
    getAll(repo, params, page = 1, pageSize = 10) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const [models, total] = yield repo.findAndCount({
                where: {
                    projectId: params.projectId ? typeorm_1.Equal(params.projectId) : null
                },
                skip: (page - 1) * pageSize,
                take: pageSize
            });
            return {
                models,
                total
            };
        });
    }
    /**
     * 获取单个信息
     * @param entity
     */
    getOne(repo, entity) {
        if (!entity) {
            throw new Error("没有找到相对应的项目!");
        }
        return repo.findOne(entity.id, {
            relations: []
        });
    }
    /**
     * 新建一个信息
     * @param  {Repository<User>} repo   用户的Repo
     * @param  {User}             entity 用户的信息
     * @return {User}
     */
    save(repo, entity) {
        return repo.save([entity]);
    }
    /**
     * 修改一个信息
     * @param  {Repository<ProjectEntity>} repo         当前的Repo
     * @param  {ProjectEntity}             entity       模型信息
     * @param  {ProjectEntity}             updateEntity 修改的模型户信息
     */
    put(repo, entity, updateEntity) {
        return repo.update(entity, updateEntity).then((data) => {
            return data.raw.affectedRows;
        });
    }
    /**
     * 删除一个数据
     * @param  {Repository<ProjectEntity>} repo   用户的Repo
     * @param  {ProjectEntity}             entity 用户的信息
     */
    remove(repo, entity) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (!entity) {
                throw new Error("不存在模型");
            }
            yield repo.remove([entity]);
            return entity;
        });
    }
};
tslib_1.__decorate([
    routing_controllers_1.Get("/"),
    tslib_1.__param(0, repository_1.Respository({
        type: state_1.StateEntity
    })),
    tslib_1.__param(1, routing_controllers_1.Params()),
    tslib_1.__param(2, routing_controllers_1.QueryParam("page", { required: false })),
    tslib_1.__param(3, routing_controllers_1.QueryParam("pageSize", { required: false })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeorm_1.Repository, Object, Number, Number]),
    tslib_1.__metadata("design:returntype", Promise)
], ProjectController.prototype, "getAll", null);
tslib_1.__decorate([
    routing_controllers_1.Get("/:id"),
    tslib_1.__param(0, repository_1.Respository({
        type: state_1.StateEntity
    })),
    tslib_1.__param(1, typeorm_routing_controllers_extensions_1.EntityFromParam("id")),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeorm_1.Repository,
        state_1.StateEntity]),
    tslib_1.__metadata("design:returntype", void 0)
], ProjectController.prototype, "getOne", null);
tslib_1.__decorate([
    routing_controllers_1.Post("/"),
    tslib_1.__param(0, repository_1.Respository({
        type: project_1.ProjectEntity
    })), tslib_1.__param(1, typeorm_routing_controllers_extensions_1.EntityFromBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeorm_1.Repository, state_1.StateEntity]),
    tslib_1.__metadata("design:returntype", void 0)
], ProjectController.prototype, "save", null);
tslib_1.__decorate([
    routing_controllers_1.Put("/:id"),
    tslib_1.__param(0, repository_1.Respository({
        type: state_1.StateEntity
    })),
    tslib_1.__param(1, typeorm_routing_controllers_extensions_1.EntityFromParam("id")),
    tslib_1.__param(2, routing_controllers_1.Body()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeorm_1.Repository,
        state_1.StateEntity,
        state_1.StateEntity]),
    tslib_1.__metadata("design:returntype", void 0)
], ProjectController.prototype, "put", null);
tslib_1.__decorate([
    routing_controllers_1.Delete("/:id"),
    tslib_1.__param(0, repository_1.Respository({
        type: state_1.StateEntity
    })), tslib_1.__param(1, typeorm_routing_controllers_extensions_1.EntityFromParam("id")),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeorm_1.Repository, state_1.StateEntity]),
    tslib_1.__metadata("design:returntype", Promise)
], ProjectController.prototype, "remove", null);
ProjectController = tslib_1.__decorate([
    inversify_1.injectable(),
    routing_controllers_1.JsonController("/states"),
    routing_controllers_1.JsonController("/projects/:projectId/states"),
    tslib_1.__metadata("design:paramtypes", [])
], ProjectController);
exports.ProjectController = ProjectController;
//# sourceMappingURL=state.js.map