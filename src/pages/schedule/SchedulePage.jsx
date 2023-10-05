import React, { useState } from 'react';
import Page from 'pages/Page';
import styled from 'styled-components';
import CalendarMain from './CalendarMain';
import ScheduleMain from './ScheduleMain';

function SchedulePage(props) {
	return (
		<Page>
			<LeftContent>
				<ScheduleMain />
			</LeftContent>
			<MiddleLine />
			<RightContent>
				<CalendarMain />
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
