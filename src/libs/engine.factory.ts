import { IEngine } from "../models/engine";
import { BaseFactory } from "./base.factory";
import { DefaultEngine } from "../engines/engine.def";

export const engineFactory = new BaseFactory<IEngine>();

engineFactory.add("default", new DefaultEngine());
