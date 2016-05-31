const combineReducers = reducers => {
	return (state = {}, action) => {
		return Object.keys(reducers).reduce((wholeState, key) => {
			wholeState[key] = reducers[key](state[key], action);
			return wholeState;
		}, {});
	};
};

export default combineReducers;
