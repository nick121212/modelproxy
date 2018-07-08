import { JsonController, Body, Get, Post, Put, Delete, Param, QueryParam } from "routing-controllers";
import { injectable, inject } from "inversify";
import { EntityFromParam, EntityFromBody } from "typeorm-routing-controllers-extensions";
import { Repository, UpdateResult } from "typeorm";
import { ModelProxy } from "modelproxy";
// import { Response } from "express";

import { Respository } from "../decorator/repository";
import { ProjectEntity } from "../entity/project";
import { TagEntity } from "../entity/tag";
import { ActionEntity } from "../entity/action";

/**
 * 项目相关信息
 */
@injectable()
@JsonController("/projects")
export class ProjectController {
    constructor(@inject("proxy") private proxy: ModelProxy) {

    }
    /**
     * 获取所有的数据
     */
    @Get("/")
    async getAll(@Respository({
        type: ProjectEntity
    }) userRepository: Repository<ProjectEntity>, @QueryParam("page") page: number = 1, @QueryParam("pageSize") pageSize: number = 10) {
        let data = await userRepository.findAndCount({
            where: {

            },
            skip: (page - 1) * pageSize,
            take: pageSize
        });

        return {
            models: data[0],
            total: data[1]
        };
    }

    /**
     * 获取单个信息
     * @param entity 
     */
    @Get("/:id")
    getOne(@Respository({
        type: ProjectEntity
    }) repo: Repository<ProjectEntity>, @EntityFromParam("id") entity: ProjectEntity) {

        if (!entity) {
            throw new Error("没有找到相对应的项目!");
        }

        return repo.findOne(entity.id, {
            relations: ["tags", "tags.actions"]
        })
    }

    /**
     * 新建一个信息
     * @param  {Repository<User>} repo   用户的Repo
     * @param  {User}             entity 用户的信息
     * @return {User}
     */
    @Post("/")
    save(@Respository({
        type: ProjectEntity
    }) repo: Repository<ProjectEntity>, @EntityFromBody() entity: ProjectEntity) {
        return repo.save([entity]);
    }

    /**
     * 修改一个信息
     * @param  {Repository<ProjectEntity>} repo         当前的Repo
     * @param  {ProjectEntity}             entity       模型信息
     * @param  {ProjectEntity}             updateEntity 修改的模型户信息
     */
    @Put("/:id")
    put(@Respository({
        type: ProjectEntity
    }) repo: Repository<ProjectEntity>,
        @EntityFromParam("id") entity: ProjectEntity,
        @Body() updateEntity: ProjectEntity) {
        return repo.update(entity, updateEntity).then((data: UpdateResult) => {
            return data.raw.affectedRows;
        });
    }

    /**
     * 删除一个数据
     * @param  {Repository<ProjectEntity>} repo   用户的Repo
     * @param  {ProjectEntity}             entity 用户的信息
     */
    @Delete("/:id")
    async remove(@Respository({
        type: ProjectEntity
    }) repo: Repository<ProjectEntity>, @EntityFromParam("id") entity: ProjectEntity) {
        if (!entity) {
            throw new Error("不存在模型");
        }
        await repo.remove([entity]);

        return entity;
    }

    /**
     * 将RAP1中的数据导入
     */
    @Post("/:id/import/rap/:projectId")
    async importFromRap(@Respository({
        type: TagEntity
    }) tagRepo: Repository<ProjectEntity>, @Respository({
        type: ActionEntity
    }) actionRepo: Repository<ActionEntity>, @EntityFromParam("id") entity: ProjectEntity, @Param("projectId") projectId: number) {
        let rapData;
        const tags: any[] = [];
        const actions: any[] = [];

        // 发起接口请求，获取rap的数据
        rapData = await this.proxy.execute("rap", "queryRAPModel.do", {
            params: {
                projectId: projectId
            }
        });

        let { moduleList } = JSON.parse(rapData.modelJSON.replace(/\\'/g, `'`));

        moduleList.forEach((m: any) => {
            const tag = {
                tagName: m.name,
                description: m.introduction,
                project: entity
            };

            tags.push(tag);

            m.pageList.forEach((p: any) => {
                p.actionList.forEach((a: any) => {
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
                    } as never);
                });
            });
        });

        await tagRepo.save(tags);
        await actionRepo.save(actions);

        return entity;
    }

}