import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

function ScheduleMain(props) {
    return (
        <TimeToSoon>
            <TimeTable>
                <TimeTableTitle>

                    <span> 타임 테이블 </span>
                </TimeTableTitle>
                <TTable>

                </TTable>

            </TimeTable>
            <MiddleLine />
            <ToSoonSchedule>
                <TodayTitle>

                    <span> 오늘의 일정 </span>
                </TodayTitle>
                <ToTable>

                </ToTable>

                <ScheMiddleLine />
                <SoonTitle>
                    <span> 다가오는 일정 </span>
                </SoonTitle>

                <SoonTable>
                    <SoonOne>
                        <span> 4/5</span>
                        <OneTable />
                    </SoonOne>
                    <SoonMiddleLine />
                    <SoonTwo>
                        <span> 4/9 </span>
                    </SoonTwo>
                </SoonTable>

            </ToSoonSchedule>
        </TimeToSoon>
    );
}

export default ScheduleMain;

const TimeToSoon = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 555.5px;
    height: 100%;
`;

const TimeTable = styled.div`
    display: flex;
    flex-direction: column;
`;

const TimeTableTitle = styled.div`
    display: flex;
    align-items: center;
    height: 25px;
    padding-bottom: 12px;

    & > span {
        font-size: 16px;
        font-weight: bold;
        border-bottom: 3.5px solid #DCA600;
    }
`;

const TTable = styled.div`
    display: flex;
    width: 185px;
    height: 329px;
    border: 1.6px solid #B1B1B1;
    background-color: #FFFBDA;
`;

// 중간 라인
const MiddleLine = styled.div`
    display: flex;
    width: 0px;
    height: 330px;
    border-left: 1px dashed #B1B1B1;
    margin: 23px 15px 0 15px;
`;

const ToSoonSchedule = styled.div`
    display: flex;
    flex-direction: column;
`;

const TodayTitle = styled.div`
    display: flex;
    align-items: center;
    height: 25px;
    padding-bottom: 12px;

    & > span {
        font-size: 16px;
        font-weight: bold;
        border-bottom: 3.5px solid #DCA600;
    }
`;

const ToTable = styled.div`
    height: 131px;
    border: 1.6px solid #B1B1B1;
    background-color: #FFFBDA;
`;

// 일정 중간 라인
const ScheMiddleLine = styled.div`
    width: 250px;
    height: 0px;
    border-top: 1px dashed #B1B1B1;
    margin-top: 19px;
    margin-bottom: 20px;
`;

const SoonTitle = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 25px;
    padding-bottom: 12px;

    & > span {
        font-size: 16px;
        font-weight: bold;
        border-bottom: 3.5px solid #DCA600;
    }
`;

const SoonTable = styled.div`

    display: flex;
    flex-direction: column;
    height: 131px;
    border: 1.6px solid #B1B1B1;
    // padding-top: 12px;
    background-color: #FFFBDA;
`;

const SoonOne = styled.div`
    display: flex;
    width: 250px;
    height: 92px;
    background-color: orange;
    // border-bottom: 1px dashed #B1B1B1;

    & > span {
        height: 0px;
        font-size: 11px;
        margin-right: 6px;
        margin-left: 12px;
    }
`;

const OneTable = styled.div`
    width: 180px;
    height: 70px;
    border: 0.5px solid #B1B1B1;
    background-color: #FFFDF6;
`;

const SoonMiddleLine = styled.div`
    width: 220px;
    height: 0px;
    border-top: 1px dashed #B1B1B1;
`;

const SoonTwo = styled.div`
    width: 250px;
    height: 92px;
    background-color: pink;

    & > span {
        height: 0px;
        font-size: 11px;
        margin-right: 6px;
        margin-left: 12px;
        background-color: pink;
    }

`;