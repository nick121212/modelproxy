import { IEngine } from "../models/engine";

export class DefaultEngine implements IEngine {
    constructor() {

    }

    validate(data: any): boolean {
        return true;
    }

    proxy(data) {
        return data;
    }
}

console.log(1);