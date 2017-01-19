import { engineFactory } from "./engine.factory";
import { IInterfaceModel } from "../models/interface";
import { BaseFactory } from "./base.factory";

export class ModelProxy {
    private interfaces: { [id: string]: BaseFactory<IInterfaceModel>; } = {};

    constructor() { }

    loadConfigUrls(urls) {

    }

    loadConfig(config) {
        console.log(config);
    }
}