import React from 'react';
import './Todo.css';

const ToDoListItem = ({ todoItem }) => (
	<li className="todoapp__list-li">
		<input
			className="check_box"
			checked={todoItem.success === '1'}
			type="radio"
			disabled
		/>
		<span className={`item-text ${todoItem.success === '1' ? 'checked' : ''}`}>{todoItem.title}</span>
		{/* <span className={`item-text ${todoItem.success === '1' ? 'checked' : ''}`}>jsp 단원 풀기</span> */}
	</li>
);

export default ToDoListItem;
