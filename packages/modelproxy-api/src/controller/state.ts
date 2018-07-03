import { JsonController, Body, Get, Post, Put, Delete } from "routing-controllers";
import { injectable } from "inversify";
import { EntityFromParam, EntityFromBody } from "typeorm-routing-controllers-extensions";
import { Repository, UpdateResult } from "typeorm";

import { Respository } from "../decorator/repository";
import { StateEntity } from "../entity/state";
import { ProjectEntity } from "../entity/project";

/**
 * 项目相关信息
 */
@injectable()
@JsonController("/states")
export class ProjectController {
    constructor() {

    }
    /**
     * 获取所有的数据
     */
    @Get("/")
    async getAll(@Respository({
        type: StateEntity
    }) repo: Repository<StateEntity>) {
        let data = await repo.findAndCount({
            where: {

            }
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
        type: StateEntity
    }) repo: Repository<StateEntity>, @EntityFromParam("id") entity: StateEntity) {

        if (!entity) {
            throw new Error("没有找到相对应的项目!");
        }

        return repo.findOne(entity.id, {
            relations: []
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
    }) repo: Repository<StateEntity>, @EntityFromBody() entity: StateEntity) {
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
        type: StateEntity
    }) repo: Repository<StateEntity>,
        @EntityFromParam("id") entity: StateEntity,
        @Body() updateEntity: StateEntity) {
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
        type: StateEntity
    }) repo: Repository<StateEntity>, @EntityFromParam("id") entity: StateEntity) {
        if (!entity) {
            throw new Error("不存在模型");
        }
        await repo.remove([entity]);

        return entity;
    }
}