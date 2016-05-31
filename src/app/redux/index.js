import React from 'react'; // eslint-disable-line
import ReactDOM from 'react-dom';

import createStore from './_pattern/createStore';
import combineReducers from './_pattern/combineReducers';
import todos from './reducers/todoReducer';
import TodosComponent from './components/TodosComponent'; // eslint-disable-line

const init = $el => {
	$el.textContent = '';

	const todoApp = combineReducers({todos});
	const store = createStore(todoApp);

	store.subscribe(() => {
		console.log(store.getState());
	});

	store.dispatch({
		type: 'ADD_TODO',
		text: 'Mett holen'
	});

	console.log(store.getState());

	ReactDOM.render(<TodosComponent store={store} />, $el);
};

const dispose = () => {
	console.log('disposing redux route');
};

export default {init, dispose};
