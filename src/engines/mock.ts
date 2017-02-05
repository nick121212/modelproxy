import { IEngine } from "../models/engine";
import * as Mock from "mockjs";
import { IInterfaceModel } from '../models/interface';
import { MethodType } from "../models/method";

export class MockEngine implements IEngine {
    MockObj: any;
    mockEngine: IEngine;

    constructor(mockEngine?: IEngine) {
        this.MockObj = Mock;
        this.mockEngine = mockEngine;
    }

    validate(data: any): boolean {
        return true;
    }

    async proxy(intance: IInterfaceModel, data: any, params: any) {
        let path = `${intance.mockDir}/${intance.ns}/${intance.path}.js`.replace(/\/\//ig, "/");
        let mockInfo;

        if (!this.mockEngine) {
            throw new Error("没有设置mock的默认引擎！");
        }

        mockInfo = await this.mockEngine.proxy({
            path: path,
            key: "mock" + intance.key,
            method: MethodType.GET,
            title: ""
        }, null, null);

        return {
            req: {
                data: data,
                params: params
            },
            mockData: Mock.mock(mockInfo)
        };
    }
}

export const MockObj = Mock;