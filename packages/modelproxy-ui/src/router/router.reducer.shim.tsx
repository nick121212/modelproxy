import { fromJS } from "immutable";
import { LOCATION_CHANGE } from "react-router-redux";

const initialState = fromJS({
	locationBeforeTransitions: null
});

/**
 * 使得react-router支持immutable
 */
export default (state = initialState, action: any) => {
	if (action.type === LOCATION_CHANGE) {
		return state.set("locationBeforeTransitions", action.payload);
	}

	return state;
};
