import { IEngine } from "../models/engine";
import { BaseFactory } from "./base.factory";

import { DefaultEngine } from "../engines/default";
import { MockEngine } from '../engines/mock';

export const engineFactory = new BaseFactory<IEngine>();

engineFactory.add("default", new DefaultEngine());
// engineFactory.add("mockjs", new MockEngine());