import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbtack } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

import ToDoList from './TodoList';

function ToDaySchedule(props) {
	const navigate = useNavigate();
	const [todoList, setTodoList] = useState([]);

	useEffect(() => {
		axios
			.get('api/schedule-api/daily-schedule')
			.then(function (response) {
				setTodoList(response.data);
			})
			.catch((error) => console.log(error));
	}, []);

	// 샘플데이터
	// const [todoList, setTodoList] = useState([
	// 	{
	// 		id: 1,
	// 		text: '리액트 기초 알아보기',
	// 		checked: true,
	// 	},
	// 	{
	// 		id: 2,
	// 		text: '컴포넌트 스타일링 하기',
	// 		checked: true,
	// 	},
	// 	{
	// 		id: 3,
	// 		text: '투두리스트 만들기',
	// 		checked: false,
	// 	},
	// 	{
	// 		id: 4,
	// 		text: '투두리스트 만들기',
	// 		checked: false,
	// 	},
	// 	{
	// 		id: 5,
	// 		text: '투두리스트 만들기',
	// 		checked: false,
	// 	},
	// 	{
	// 		id: 6,
	// 		text: '투두리스트 만들기',
	// 		checked: false,
	// 	},
	// ]);

	return (
		<TodoTemplete onClick={() => navigate('/schedule')}>
			<FontAwesomeIcon icon={faThumbtack} />
			<Header>
				<span>오늘의 일정</span>
			</Header>
			{/* 할 일 Item 리스트 */}
			<ToDoList_wrapper>
				<ToDoList // (1)
					todoList={todoList}
				/>
			</ToDoList_wrapper>
		</TodoTemplete>
	);
}

export default ToDaySchedule;

const TodoTemplete = styled.div`
	width: 240px;
	height: 190px;
	background-color: #feffd6;
	border-bottom-left-radius: 50px;
	padding: 0 28px 0px 28px;
	cursor: pointer;

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
	height: 50px;
	display: flex;
	align-items: center;
	border-bottom: 1px solid black;
	font-size: 13px;
	margin-bottom: 10px;
	font-weight: 500;
	position: fixed;
	background-color: #feffd6;
	z-index: 2;
`;

const ToDoList_wrapper = styled.div`
	width: 186px;
	height: 106px;
	/* background-color: red; */
	position: relative;
	top: 50px;
	overflow: auto;
	//스크롤바 숨기기
	::-webkit-scrollbar {
		display: none; /* Chrome, Safari, Opera*/
	}
`;
