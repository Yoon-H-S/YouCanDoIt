import TodoListItem from './TodoListItem';
import styled from 'styled-components';
import './Todo.css';

const ToDoList = ({ todoList }) => (
	<div className="todoapp__list">
		<ul className="todoapp__list-ul">
			{todoList.length > 0 ? ( // todoList가 있을때만 출력
				todoList?.map((todoItem) => (
					// map을 이용하여 ToDoItem을 출력
					<TodoListItem
						key={todoItem.number}
						todoItem={todoItem}
					/>
				))
			) : (
				<None>스케줄러에서 일정을 추가해주세요.</None>
			)}
		</ul>
	</div>
);

export default ToDoList;

// 일정이 없을 때
const None = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;
	width: 100%;
	height: 100%;
	font-size: 12px;
	color: #a4a4a4;
	margin-top: 10px;
`;
