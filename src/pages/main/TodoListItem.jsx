import React from 'react';

const ToDoListItem = ({ todoItem, todoList, setTodoList }) => (
	<li className="todoapp__item">
		{/* 아이템 완료 체크 / 체크 해제를 위한 체크박스 */}
		<input
			type="checkbox"
			className="todoapp__item-checkbox"
		/>
		{/* 아이템 내용 */}
		<span className="todoapp__item-ctx">{todoItem.text}</span>
	</li>
);

export default ToDoListItem;
