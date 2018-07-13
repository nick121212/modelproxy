import { fromJS } from "immutable";
import { LOCATION_CHANGE } from "react-router-redux";

/**
 * 使得react-router支持immutable
 */
export default (state = fromJS({
	locationBeforeTransitions: null
}), action: any) => {
	if (action.type === LOCATION_CHANGE) {
		console.log(action);
		return state.set("locationBeforeTransitions", action.payload);
	}

	return state;
};
