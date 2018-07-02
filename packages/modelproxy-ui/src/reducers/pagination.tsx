

import Immutable from "immutable";
import { Reducer } from "redux";
import { createAction, createReducer, EmptyActionCreator, SimpleActionCreator } from "redux-act";

export interface IPaginationReducerModel {
  total: number;
  curPage: number;
  pageSize: number;

  totalPage: number;
  hasNext?: boolean;
  hasPrev?: boolean;
}

/**
 * 分页的reducer
 * actions
 */
export class PaginationReducer {
  private setInfo: SimpleActionCreator<IPaginationReducerModel> = createAction<IPaginationReducerModel>("设置基础信息");
  private next: EmptyActionCreator = createAction("下一页");
  private prev: EmptyActionCreator = createAction("上一页");
  private setPage: SimpleActionCreator<number> = createAction<number>("设置页码");
  private setPageSize: SimpleActionCreator<number> = createAction<number>("设置数量");

  /**
   * 构造函数
   * @param initialState state的初始值
   */
  constructor(protected initialState: IPaginationReducerModel = {
    total: 0,
    curPage: 0,
    pageSize: 10,
    totalPage: 0
  }) { }

  /**
   * 返回当前的actions
   */
  public get actions() {
    return {
      next: this.next,
      prev: this.prev,
      setInfo: this.setInfo,
      setPage: this.setPage,
      setPageSize: this.setPageSize
    };
  }

  /**
   * 返回当前的reducers
   */
  public get reducer(): Reducer<Immutable.Map<string, any>> {

    return createReducer<Immutable.Map<string, any>>({
      [this.setPage as any]: (state: Immutable.Map<string, any>, data: number) => {
        return state.merge({ curPage: data });
      },
      [this.setPageSize as any]: (state: Immutable.Map<string, any>, data: number) => {
        return state.merge({ pageSize: data });
      },
      [this.setInfo as any]: (state: Immutable.Map<string, any>, data: IPaginationReducerModel) => {
        if (data.total && data.pageSize) {
          data.totalPage = Math.ceil(data.total / data.pageSize);
        }

        if (data.totalPage < data.curPage) {
          data.curPage = data.totalPage;
        }

        if ((data.totalPage || 0) < (data.curPage || 0)) {
          data.curPage = data.totalPage || 0;
        }

        return state.merge(data);
      },
      [this.prev as any]: (state: Immutable.Map<string, any>) => {
        const data: IPaginationReducerModel = state.toJS();

        if (data.curPage && data.curPage > 0) {
          data.curPage = data.curPage - 1;
        }

        return state.merge(data);
      },
      [this.next as any]: (state: Immutable.Map<string, any>) => {
        const data: IPaginationReducerModel = state.toJS();

        if (data.curPage < data.totalPage - 1) {
          data.curPage = data.curPage + 1;
        }

        return state.merge(data);
      }
    }, Immutable.Record(this.initialState)());
  }
}
