"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const routing_controllers_1 = require("routing-controllers");
const inversify_1 = require("inversify");
const typeorm_routing_controllers_extensions_1 = require("typeorm-routing-controllers-extensions");
const typeorm_1 = require("typeorm");
const modelproxy_1 = require("modelproxy");
const repository_1 = require("../decorator/repository");
const conn_1 = require("../decorator/conn");
const project_1 = require("../entity/project");
/**
 * 项目相关信息
 */
let ProjectController = class ProjectController {
    constructor(proxy) {
        this.proxy = proxy;
    }
    /**
     * 获取所有的数据
     */
    getAll(userRepository, page = 1, pageSize = 10) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            let data = yield userRepository.findAndCount({
                where: {},
                relations: ["tags"],
                skip: (page - 1) * pageSize,
                take: pageSize
            });
            return {
                models: data[0],
                total: data[1]
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
            relations: ["tags", "tags.actions"]
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
    /**
     * 将RAP1中的数据导入
     */
    importFromRap(conn, entity, projectId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            let rapData;
            const tags = [];
            const actions = [];
            // 发起接口请求，获取rap的数据
            rapData = yield this.proxy.execute("rap", "queryRAPModel.do", {
                params: {
                    projectId: projectId
                }
            });
            let { moduleList } = JSON.parse(rapData.modelJSON.replace(/\\'/g, `'`));
            moduleList.forEach((m) => {
                const tag = {
                    tagName: m.name,
                    description: m.introduction,
                    project: entity
                };
                tags.push(tag);
                m.pageList.forEach((p) => {
                    p.actionList.forEach((a) => {
                        const path = a.requestUrl.replace(/\\\\\\/ig, "");
                        const keys = path.replace(/^\//ig, "").split("/").reverse();
                        actions.push({
                            key: keys.reverse().join("."),
                            title: a.name,
                            description: a.description,
                            method: ["", "GET", "POST", "PUT", "DELETE"][a.requestType],
                            path,
                            requestSchema: "",
                            responseSchema: "",
                            tag: tag,
                            project: entity
                        });
                    });
                });
            });
            yield conn.transaction((entityManager) => {
                return Promise.all([
                    entityManager.save(tags),
                    entityManager.save(actions)
                ]);
            });
            return entity;
        });
    }
};
tslib_1.__decorate([
    routing_controllers_1.Get("/"),
    tslib_1.__param(0, repository_1.Respository({
        type: project_1.ProjectEntity
    })),
    tslib_1.__param(1, routing_controllers_1.QueryParam("page", { required: false })),
    tslib_1.__param(2, routing_controllers_1.QueryParam("pageSize", { required: false })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeorm_1.Repository, Number, Number]),
    tslib_1.__metadata("design:returntype", Promise)
], ProjectController.prototype, "getAll", null);
tslib_1.__decorate([
    routing_controllers_1.Get("/:id"),
    tslib_1.__param(0, repository_1.Respository({
        type: project_1.ProjectEntity
    })), tslib_1.__param(1, typeorm_routing_controllers_extensions_1.EntityFromParam("id")),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeorm_1.Repository, project_1.ProjectEntity]),
    tslib_1.__metadata("design:returntype", void 0)
], ProjectController.prototype, "getOne", null);
tslib_1.__decorate([
    routing_controllers_1.Post("/"),
    tslib_1.__param(0, repository_1.Respository({
        type: project_1.ProjectEntity
    })), tslib_1.__param(1, typeorm_routing_controllers_extensions_1.EntityFromBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeorm_1.Repository, project_1.ProjectEntity]),
    tslib_1.__metadata("design:returntype", void 0)
], ProjectController.prototype, "save", null);
tslib_1.__decorate([
    routing_controllers_1.Put("/:id"),
    tslib_1.__param(0, repository_1.Respository({
        type: project_1.ProjectEntity
    })),
    tslib_1.__param(1, typeorm_routing_controllers_extensions_1.EntityFromParam("id")),
    tslib_1.__param(2, routing_controllers_1.Body()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeorm_1.Repository,
        project_1.ProjectEntity,
        project_1.ProjectEntity]),
    tslib_1.__metadata("design:returntype", void 0)
], ProjectController.prototype, "put", null);
tslib_1.__decorate([
    routing_controllers_1.Delete("/:id"),
    tslib_1.__param(0, repository_1.Respository({
        type: project_1.ProjectEntity
    })), tslib_1.__param(1, typeorm_routing_controllers_extensions_1.EntityFromParam("id")),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeorm_1.Repository, project_1.ProjectEntity]),
    tslib_1.__metadata("design:returntype", Promise)
], ProjectController.prototype, "remove", null);
tslib_1.__decorate([
    routing_controllers_1.Post("/:id/import/rap/:projectId"),
    tslib_1.__param(0, conn_1.GetConnection({})),
    tslib_1.__param(1, typeorm_routing_controllers_extensions_1.EntityFromParam("id")),
    tslib_1.__param(2, routing_controllers_1.Param("projectId")),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeorm_1.Connection,
        project_1.ProjectEntity, Number]),
    tslib_1.__metadata("design:returntype", Promise)
], ProjectController.prototype, "importFromRap", null);
ProjectController = tslib_1.__decorate([
    inversify_1.injectable(),
    routing_controllers_1.JsonController("/projects"),
    tslib_1.__param(0, inversify_1.inject("proxy")),
    tslib_1.__metadata("design:paramtypes", [modelproxy_1.ModelProxy])
], ProjectController);
exports.ProjectController = ProjectController;
//# sourceMappingURL=project.js.map