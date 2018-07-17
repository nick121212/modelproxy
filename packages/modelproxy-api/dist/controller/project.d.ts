import { Repository, Connection } from "typeorm";
import { ModelProxy } from "modelproxy";
import { ProjectEntity } from "../entity/project";
/**
 * 项目相关信息
 */
export declare class ProjectController {
    private proxy;
    constructor(proxy: ModelProxy);
    /**
     * 获取所有的数据
     */
    getAll(userRepository: Repository<ProjectEntity>, page?: number, pageSize?: number): Promise<{
        models: ProjectEntity[];
        total: number;
    }>;
    /**
     * 获取单个信息
     * @param entity
     */
    getOne(repo: Repository<ProjectEntity>, entity: ProjectEntity): Promise<ProjectEntity | undefined>;
    /**
     * 新建一个信息
     * @param  {Repository<User>} repo   用户的Repo
     * @param  {User}             entity 用户的信息
     * @return {User}
     */
    save(repo: Repository<ProjectEntity>, entity: ProjectEntity): Promise<ProjectEntity[]>;
    /**
     * 修改一个信息
     * @param  {Repository<ProjectEntity>} repo         当前的Repo
     * @param  {ProjectEntity}             entity       模型信息
     * @param  {ProjectEntity}             updateEntity 修改的模型户信息
     */
    put(repo: Repository<ProjectEntity>, entity: ProjectEntity, updateEntity: ProjectEntity): Promise<any>;
    /**
     * 删除一个数据
     * @param  {Repository<ProjectEntity>} repo   用户的Repo
     * @param  {ProjectEntity}             entity 用户的信息
     */
    remove(repo: Repository<ProjectEntity>, entity: ProjectEntity): Promise<ProjectEntity>;
    /**
     * 将RAP1中的数据导入
     */
    importFromRap(conn: Connection, entity: ProjectEntity, projectId: number): Promise<ProjectEntity>;
}
