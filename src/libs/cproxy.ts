import { ComposeFactory } from "./compose.factory";
import { Compose } from "./compose";

export class ComposeProxy extends Compose<any> {
    private composes: { [id: string]: ComposeFactory; } = {};

    constructor() {
        super();
    }
}