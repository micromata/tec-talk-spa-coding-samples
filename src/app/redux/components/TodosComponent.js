import React from 'react';

const TodosComponent = React.createClass({
	getInitialState() {
		return {todos: this.props.store.getState().todos};
	},

	componentDidMount() {
		this.props.store.subscribe(() => {
			this.setState(this.props.store.getState());
		});
	},

	renderTodoList() {

		return this.state.todos.map(todo => {
			return <li key={todo.id}>
				{todo.text}
				<button onClick={this.deleteTodo(todo.id)}>Delete</button>
			</li>;
		});
	},

	deleteTodo(todoId) {
		return () => {
			this.props.store.dispatch({
				type: 'DELETE_TODO',
				id: todoId
			});
		};
	},

	addTodo() {
		const newTodoText = this.refs.newTodoInput.value;
		if (newTodoText === '') {
			return;
		}

		this.props.store.dispatch({
			type: 'ADD_TODO',
			text: newTodoText
		});
	},

	render() {
		return <div>
			<ul>
				{this.renderTodoList()}
			</ul>
			<input type="text" ref="newTodoInput"/>
			<button onClick={this.addTodo}>Hinzufügen</button>
		</div>;
	}
});

export default TodosComponent;
