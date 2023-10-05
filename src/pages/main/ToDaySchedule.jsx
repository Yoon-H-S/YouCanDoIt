import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbtack } from '@fortawesome/free-solid-svg-icons';

import ToDoList from './TodoList';

function ToDaySchedule(props) {
	const [todoList, setTodoList] = useState([
		{
			id: 1,
			text: '리액트 기초 알아보기',
			checked: true,
		},
		{
			id: 2,
			text: '컴포넌트 스타일링 하기',
			checked: true,
		},
		{
			id: 3,
			text: '투두리스트 만들기',
			checked: false,
		},
	]);
	return (
		<TodoTemplete>
			<FontAwesomeIcon icon={faThumbtack} />
			<Header>
				<span>오늘의 일정</span>
			</Header>
			{/* 할 일 Item 리스트 */}
			<ToDoList // (1)
				todoList={todoList}
				setTodoList={setTodoList}
			/>
		</TodoTemplete>
	);
}

export default ToDaySchedule;

const TodoTemplete = styled.div`
	width: 240px;
	height: 190px;
	background-color: #feffd6;
	border-bottom-left-radius: 50px;
	padding: 20px 28px 20px 28px;
	& > svg {
		position: absolute;
		left: 219px;
		top: -9px;
		color: #000000;
		font-size: 35px;
		transform: rotate(45deg);
	}
`;

const Header = styled.div`
	width: 186px;
	height: 30px;
	border-bottom: 1px solid black;
	font-size: 13px;
	margin-bottom: 6px;
	font-weight: 500;
`;
