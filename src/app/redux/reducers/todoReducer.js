// Reducer
const todos = (state = [], action) => {
	switch (action.type) {
		case 'ADD_TODO':
			return [
				...state,
				{
					id: state.length + 1,
					text: action.text,
					completed: false
				}
			];
		case 'DELETE_TODO':
			return state.filter(t => t.id !== action.id);
		default:
			return state;
	}
};

export default todos;
