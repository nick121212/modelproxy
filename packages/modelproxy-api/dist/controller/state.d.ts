import { Repository } from "typeorm";
import { StateEntity } from "../entity/state";
/**
 * 项目相关信息
 */
export declare class ProjectController {
    constructor();
    /**
     * 获取所有的数据
     */
    getAll(repo: Repository<StateEntity>): Promise<{
        models: StateEntity[];
        total: number;
    }>;
    /**
     * 获取单个信息
     * @param entity
     */
    getOne(repo: Repository<StateEntity>, entity: StateEntity): Promise<StateEntity | undefined>;
    /**
     * 新建一个信息
     * @param  {Repository<User>} repo   用户的Repo
     * @param  {User}             entity 用户的信息
     * @return {User}
     */
    save(repo: Repository<StateEntity>, entity: StateEntity): Promise<StateEntity[]>;
    /**
     * 修改一个信息
     * @param  {Repository<ProjectEntity>} repo         当前的Repo
     * @param  {ProjectEntity}             entity       模型信息
     * @param  {ProjectEntity}             updateEntity 修改的模型户信息
     */
    put(repo: Repository<StateEntity>, entity: StateEntity, updateEntity: StateEntity): Promise<any>;
    /**
     * 删除一个数据
     * @param  {Repository<ProjectEntity>} repo   用户的Repo
     * @param  {ProjectEntity}             entity 用户的信息
     */
    remove(repo: Repository<StateEntity>, entity: StateEntity): Promise<StateEntity>;
}
