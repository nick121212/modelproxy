import { Get, Post, Req, QueryParams, Body, JsonController, Res, HttpError, Delete, Put } from "routing-controllers";
import { injectable, inject } from "inversify";
import { InterfaceFactory } from "modelproxy/out/libs/interface.factory";
import { ModelProxy } from "modelproxy";
import { Request, Response } from "express";
import { Repository, Equal } from "typeorm";
import _ from "lodash";

import { Respository } from "../decorator/repository";
import { ProjectEntity } from "../entity/project";
import { ActionEntity } from "../entity/action";
import { StateEntity } from "../entity/state";

/**
 * 接口转发路由
 */
@injectable()
@JsonController("/proxy")
export class UserController {

    constructor(@inject("proxy") private $mp: ModelProxy) { }

    /**
     * 接口做转发，所有的请求都汇总这里处理
     * @param repo     数据库repo
     * @param req      request
     * @param res      response
     * @param params   请求参数
     * @param data     请求body参数
     */
    @Get("/*")
    @Post("/*")
    @Delete("/*")
    @Put("/*")
    async all(
        @Respository({
            type: ProjectEntity
        }) repo: Repository<ProjectEntity>,
        @Req() req: Request,
        @Res() res: Response,
        @QueryParams() params: any = {},
        @Body({ required: false }) data: any) {

        // 过滤path
        const paths = req.path.replace(/^\//ig, "").split("/").splice(1);
        const [ns, ...keys] = paths;

        // 如果paths小于2位，则抛出异常
        if (paths.length < 2) {
            throw new HttpError(404);
        }

        // 调用真实的接口请求
        return this.execute(await this.loadConfig(ns, repo), keys.join("."), req, res, params, data);
    }

    /**
     * 第一次请求的时候，回去查看数据库有没有这个项目
     * 如果有则，吧项目中的接口load道modelproxy中
     * @param ns 
     * @param repo 
     */
    private async loadConfig(ns: string, repo: Repository<ProjectEntity>) {
        if (!this.$mp.hasNs(ns)) {
            const project: ProjectEntity | undefined = await repo.findOne({
                where: {
                    key: Equal(ns)
                },
                relations: ["actions", "states"]
            });

            // 如果有项目，则添加项目信息到modelproxy
            if (project) {
                // 放入接口信息
                this.$mp.loadConfig(Object.assign({}, project, {
                    states: _.reduce(_.map(project.states, (s: StateEntity) => {
                        return {
                            [s.stateName]:
                                s.stateUri
                        };
                    }), Object.assign),
                    interfaces: _.map(project.actions, ({ key, title, method, path }: ActionEntity) => {
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
        
        if(!this.$mp.hasNs(ns)) {
            throw new HttpError(404, "没有找到命名空间！")
        }

        return this.$mp.getNs(ns);
    }

    private async execute(nsFactory: InterfaceFactory, key: string, req: Request, res: Response, params: any, data: any) {
        let interFace = nsFactory.get(key);

        if (!interFace) {
            throw new HttpError(404, "没有找到接口！")
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

        const func = (interFace as any)[method.toLocaleLowerCase()];

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

        throw new HttpError(404, "没有找到方法!");
    }
}