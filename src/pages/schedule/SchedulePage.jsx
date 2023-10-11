import React, { useState } from 'react';
import Page from 'pages/Page';
import styled from 'styled-components';

import CalendarMain from './CalendarMain';
import ScheduleMain from './ScheduleMain';
import AddSchedule from './AddSchedule';

function SchedulePage(props) {
	const [isAdd, setIsAdd] = useState(false);
	const [selectDate, setSelectDate] = useState(null);

	const changeDate = (date) => {
		setSelectDate(date);
		setIsAdd(true);
	}

	const showAdd = () => {
		setSelectDate(null);
		setIsAdd(true);
	}

	return (
		<Page>
			<LeftContent>
				<ScheduleMain showAdd={showAdd} isAdd={isAdd} />
				{isAdd && <AddSchedule setIsAdd={setIsAdd} selectDate={selectDate} />}
			</LeftContent>
			<MiddleLine />
			<RightContent>
				<CalendarMain changeDate={changeDate} isAdd={isAdd} />
			</RightContent>
		</Page>
	);
}

export default SchedulePage;

/** 좌측 페이지 영역 */
const LeftContent = styled.div`
	position: relative;
	width: 555.5px;
	height: 422px;
	background-color: white;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

// 중간 라인
const MiddleLine = styled.div`
	width: 0px;
	height: 422px;
	border-left: 1px solid black;
	margin-left: 43px;
	margin-right: 43px;
`;

// 우측 페이지 영역
const RightContent = styled.div`
	position: relative;
	width: 555.5px;
	height: 422px;
	background-color: white;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;
