import { Map } from "immutable";
import { RouteComponentProps } from "react-router";

import { mainReducerKey } from "../constants";

export interface IProps extends RouteComponentProps<any, any> {
    listData?: Map<string, any>;
    paginationData?: Map<string, any>;
    fetchListData?: (page?: number, pageSize?: number) => void;
    setPageInfo?: (total: number, page: number, pageSize: number) => void;
}


export const reducerKey = "list";
export const reducerKeys = ["modules", mainReducerKey, reducerKey];
export const proxySettings = {
    project: {
        ns: "test",
        key: "project"
    }
};
