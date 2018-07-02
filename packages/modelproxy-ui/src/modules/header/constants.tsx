import { IHeaderSettings } from "./reducer";

export interface IProps {
  headerSettings?: IHeaderSettings;
  setHeaderSettings?: (s: IHeaderSettings) => void;
}

export const mainReducerKey = "header";
export const rootReducerKeys = ["modules", mainReducerKey];
