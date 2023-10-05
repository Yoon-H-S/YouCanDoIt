import React, { useState } from 'react';
import styled from 'styled-components';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';
import * as S from 'styles/ReactCalendarStyle';

const CustomCalendar = () => {
	//기본적으로 캘린더가 선택할 수 있게 넣어줄 value이다.
	//value 값만 표시하게 할 게 아니라면 나중에 수정해주거나 지워주자.
	const [value, setValue] = useState(new Date()); // 클릭한 날짜 (초기값으로 현재 날짜 넣어줌)
	const [activeDate, setActiveDate] = useState(moment(value).format('YYYY-MM-DD')); // 클릭한 날짜 (년-월-일))
	const [activeMonth, setActiveMonth] = useState(moment(value).format('YYYY-MM'));

	//받아온 인자(activStartDate)에 따라 현재 보여지는 달(activeMonth)의 state를 변경하는 함수
	const getActiveMonth = (action, activeStartDate) => {
		if (action !== 'drillUp') {
			const newActiveMonth = moment(activeStartDate).format('YYYY-MM');
			setActiveMonth(newActiveMonth);
			console.log('바뀐 달 : ' + newActiveMonth);
		}
	};

	const dateChange = (date) => {
		setValue(date);
		setActiveDate(moment(date).format('YYYY-MM-DD'));
		console.log('클릭한 날짜 : ' + moment(date).format('YYYY-MM-DD'));
	};

	return (
		<Wrap>
			<S.MainCalender>
				<S.CustomCalendar
					onChange={dateChange}
					value={value}
					calendarType="gregory"
					next2Label={null}
					prev2Label={null}
					minDetail="year"
					showFixedNumberOfWeeks
					formatDay={(locale, date) => moment(date).format('DD')}
					onActiveStartDateChange={({ action, activeStartDate }) => getActiveMonth(action, activeStartDate)}
					tileContent={({ date }) => {
						// 각 날짜 타일에 컨텐츠 추가
						if (dayList.filter((x) => x === moment(date).format('YYYY-MM-DD')).length === 1) {
							return (
								<TodoList>
									<Todo />
								</TodoList>
							);
						} else if (dayList.filter((x) => x === moment(date).format('YYYY-MM-DD')).length >= 2) {
							return (
								<TodoList>
									<Todo />
									<Todo />
								</TodoList>
							);
						}
					}}
					tileClassName={({ date }) => {
						if (stickers.find((x) => x.date === moment(date).format('YYYY-MM-DD') && x.success === '2')) {
							return 'green';
						} else if (stickers.find((x) => x.date === moment(date).format('YYYY-MM-DD') && x.success === '1')) {
							return 'yellow';
						} else if (stickers.find((x) => x.date === moment(date).format('YYYY-MM-DD') && x.success === '0')) {
							return 'red';
						}
					}}
				/>
			</S.MainCalender>
		</Wrap>
	);
};

export default CustomCalendar;

const Wrap = styled.div``;

const TodoList = styled.div`
	width: 65px;
	height: 24px;
`;

const Todo = styled.div`
	width: 65px;
	height: 11px;
	background-color: #608cff;
	opacity: 30%;
	margin-bottom: 1px;
	border-radius: 1px;
`;

const dayList = [
	'2023-09-10',
	'2023-09-10',
	'2023-09-21',
	'2023-10-02',
	'2023-09-14',
	'2023-09-15',
	'2023-09-15',
	'2023-09-16',
	'2023-10-27',
];

const stickers = [
	{
		date: '2023-10-01',
		success: '2',
	},
	{
		date: '2023-10-02',
		success: '1',
	},
	{
		date: '2023-10-03',
		success: '1',
	},
	{
		date: '2023-10-04',
		success: '0',
	},
];
