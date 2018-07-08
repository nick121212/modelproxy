import Immutable from "immutable";
import { Reducer } from "redux";
import { createAction, createReducer, EmptyActionCreator, SimpleActionCreator } from "redux-act";

export interface IPaginationReducerModel {
  total: number;
  curPage?: number;
  pageSize?: number;

  totalPage?: number;
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
    curPage: 1,
    pageSize: 10,
    totalPage: 0,
    hasNext: false,
    hasPrev: false
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
        const { total, pageSize } = data;
        let { totalPage = 0, curPage = 0 } = data;

        if (total && pageSize) {
          totalPage = Math.ceil(total / pageSize);

          data.hasNext = totalPage > curPage;
        }

        if (totalPage < curPage) {
          curPage = totalPage;
        }

        if (curPage < 1) {
          curPage = 1;
        }

        data.hasPrev = curPage > 1;

        return state.merge(Object.assign({}, data, {
          total, pageSize, totalPage, curPage
        }));
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
        const { curPage = 0, totalPage = 0 } = data;

        if (curPage < totalPage - 1) {
          data.curPage = curPage + 1;
        }

        return state.merge(data);
      }
    }, Immutable.Record(this.initialState)());
  }
}
