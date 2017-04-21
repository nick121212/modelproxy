import * as factory from "./base.factory";
import * as compose from "./compose";
export declare namespace ModelProxy {
    class ComposeFactory extends factory.ModelProxy.BaseFactory<compose.ModelProxy.Compose<any>> {
        constructor();
    }
}
