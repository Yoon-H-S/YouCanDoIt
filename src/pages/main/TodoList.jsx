import TodoListItem from './TodoListItem';

const ToDoList = ({ todoList, setTodoList }) => (
	<div className="todoapp__list">
		{/* props로 부터 title 값을 전달 받음 */}

		<ul className="todoapp__list-ul">
			{todoList && // todoList가 있을때만 출력
				todoList.map((todoItem) => (
					// map을 이용하여 ToDoItem을 출력
					<TodoListItem
						key={todoItem.id}
						todoItem={todoItem}
						todoList={todoList}
						setTodoList={setTodoList}
					/>
				))}
		</ul>
	</div>
);

export default ToDoList;
