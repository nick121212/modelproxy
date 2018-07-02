import { createHashHistory, History } from "history";

export const historyInstance: History = createHashHistory({ basename: "/" });
