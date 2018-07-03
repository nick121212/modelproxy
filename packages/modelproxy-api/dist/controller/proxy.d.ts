import { ModelProxy } from "modelproxy";
import { Request, Response } from "express";
import { Repository } from "typeorm";
import { ProjectEntity } from "../entity/project";
/**
 * 接口转发路由
 */
export declare class UserController {
    private $mp;
    constructor($mp: ModelProxy);
    /**
     * 接口做转发，所有的请求都汇总这里处理
     * @param repo     数据库repo
     * @param req      request
     * @param res      response
     * @param params   请求参数
     * @param data     请求body参数
     */
    all(repo: Repository<ProjectEntity>, req: Request, res: Response, params: any, data: any): Promise<any>;
    /**
     * 第一次请求的时候，回去查看数据库有没有这个项目
     * 如果有则，吧项目中的接口load道modelproxy中
     * @param ns
     * @param repo
     */
    private loadConfig;
    private execute;
}
