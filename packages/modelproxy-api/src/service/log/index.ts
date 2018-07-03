import "reflect-metadata";
import { colorConsole, console, Tracer } from "tracer";

export const colorLog: Tracer.Logger = colorConsole();
export const log: Tracer.Logger = console({});

