import React from 'react';
import './Todo.css';

const ToDoListItem = ({ todoItem, todoList, setTodoList }) => (
	<li className="todoapp__list-li">
		<input
			className="check_box"
			checked={todoItem.checked}
			type="radio"
			disabled
		/>
		<span className={`item-text ${todoItem.checked ? 'checked' : ''}`}>{todoItem.text}</span>
	</li>
);

export default ToDoListItem;
