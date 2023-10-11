import React from 'react';
import Page from 'pages/Page';
import styled from 'styled-components';

import ToDaySchedule from './ToDaySchedule';
import MiniCalendar from '../schedule/MiniCalendar';

function MainPage(props) {
	return (
		<Page>
			<LeftContent>
				<ToDaySchedule />
				<MiniCalendar />
			</LeftContent>
			<MiddleLine />
			<RightContent>
				{props.children}
			</RightContent>
		</Page>
	);
}

export default MainPage;

// 좌측 페이지 영역
const LeftContent = styled.div`
	position: relative;
	/* top: -24px; */
	width: 243px;
	height: 422px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
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
	width: 868px;
	height: 422px;
	background-color: white;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;
