



// import { Reducer } from "redux";
import { fromJS, Map } from "immutable";
import { createAction, createReducer, Reducer, SimpleActionCreator } from "redux-act";

export interface IHeaderSettings {
  application?: boolean;
  settings?: boolean;
  help?: boolean;
  person?: boolean;
  feature?: boolean;
}

/**
 * 主页的reudcer
 */
export class HeaderReducer<T> {
  private setHeaderSettings: SimpleActionCreator<IHeaderSettings> = createAction<IHeaderSettings>("设置头部的按钮状态");

  /**
   * 构造函数
   * @param initialState state的初始值
   */
  constructor(protected initialState: IHeaderSettings = {
    application: false,
    settings: false,
    help: false,
    person: false,
    feature: false
  }) { }

  /**
   * 返回当前的actions
   */
  public get actions(): {
    setHeaderSettings: SimpleActionCreator<IHeaderSettings>
  } {
    return {
      setHeaderSettings: this.setHeaderSettings
    };
  }

  /**
   * 返回当前的reducers
   */
  public get reducer(): Reducer<Map<string, any>> {
    return createReducer<Map<string, any>>({
      [this.setHeaderSettings as any]: (state: Map<string, any>, payload: IHeaderSettings) => {
        const originState = state.merge(this.initialState);

        return originState.merge(payload);
      }
    }, fromJS(this.initialState));
  }
}
