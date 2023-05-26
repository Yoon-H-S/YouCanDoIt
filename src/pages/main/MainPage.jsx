import React from 'react';
import Page from 'pages/Page';
import styled from 'styled-components';

import Schedule from 'assets/testImg/schedule.png';
import Calender from 'assets/testImg/calender.png';

function Main(props) {
    return(
        <Page>
            <LeftContent>
                <ScheduleImg src={Schedule} alt="" />
                <CalenderImg src={Calender} alt="" />
            </LeftContent>
            <MiddleLine />
            <RightContent>
                {props.children}
            </RightContent>
        </Page>
    );
}

export default Main;

// 좌측 페이지 영역
const LeftContent = styled.div`
    position: relative;
    top: -24px;
    width: 243px;
    height: 422px;
`;

// 일정 이미지
const ScheduleImg = styled.img`
    display: block;
`;

// 미니캘린더 이미지
const CalenderImg = styled.img`
    display: block;
    margin-top: 33px;
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