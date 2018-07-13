import Immutable from "immutable";
import { connect } from "react-redux";
import { compose, shouldUpdate } from "recompose";
import { Dispatch } from "redux";

import { IProps, mainReducerKey, rootReducerKeys } from "./constants";
import { headReducer } from "./redux";

const mapStateToProps = (state: Immutable.Map<string, any>, ownProps: IProps) => {
  return {
    headerSettings: state.getIn(rootReducerKeys.concat([mainReducerKey])).toJS()
  };
};

const mapActionToProps = (dispatch: Dispatch, ownProps: IProps) => {
  return {
    ...headReducer.actions
  };
};

export const hoc = compose<IProps, any>(
  shouldUpdate(() => false),
  connect(mapStateToProps, mapActionToProps)
);
