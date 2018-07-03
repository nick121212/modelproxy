import { Container, injectable, decorate } from "inversify";
import { Tracer } from "tracer";
import { Compose, ModelProxy, BaseEngine } from 'modelproxy';

import { colorLog, log } from "./service/log";
import { proxy } from "./service/proxy";

const container: Container = new Container({
    autoBindInjectable: true,
    skipBaseClassChecks: true
});

decorate(injectable(), Compose);
decorate(injectable(), ModelProxy);
decorate(injectable(), BaseEngine);

container.bind<Tracer.Logger>("log").toConstantValue(log).whenTargetTagged("color", false);
container.bind<Tracer.Logger>("log").toConstantValue(colorLog).whenTargetTagged("color", true);
container.bind<ModelProxy>("proxy").toConstantValue(proxy);

export { container };