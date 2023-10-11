import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbtack } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

import ToDoList from './TodoList';

function ToDaySchedule(props) {
	const [todoList, setTodoList] = useState([]);

	useEffect(() => {
		axios.get('api/schedule-api/daily-schedule'
		).then(function (response) {
			setTodoList(response.data);
		}).catch(
			(error) => console.log(error)
		);
	},[]);

	return (
		<TodoTemplete>
			<FontAwesomeIcon icon={faThumbtack} />
			<Header>
				<span>오늘의 일정</span>
			</Header>
			{/* 할 일 Item 리스트 */}
			<ToDoList // (1)
				todoList={todoList}
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
