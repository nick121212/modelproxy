import { createBrowserHistory as createHistory, History } from "history";

export const historyInstance: History = createHistory({ basename: "/" });
