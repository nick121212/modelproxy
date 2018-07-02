import { Map } from "immutable";
import { RouteComponentProps } from "react-router";

import { mainReducerKey } from "../constants";

export interface IProps extends RouteComponentProps<any, any> {
    listData?: Map<string, any>;
    fetchListData?: () => void;
}


export const reducerKey = "list";
export const reducerKeys = ["modules", mainReducerKey, reducerKey];
export const proxySettings = {
    project: {
        ns: "test",
        key: "project"
    }
};
