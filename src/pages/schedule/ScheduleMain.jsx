import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';


function ScheduleMain(props) {
    const {handleChange} = props;
    const [isChecked, setIsChecked] = useState(false);

    const onClickCheck = () => {
        setIsChecked(!isChecked);
        console.log(!isChecked);
    };

    return (
        <Schedule>
            <TimeTable>
                <TimeTable_Title>
                    <span> 타임 테이블 </span>
                </TimeTable_Title>
                <TTable>
                    <TTable_Time />
                </TTable>
            </TimeTable>
            <MiddleLine />
            <ToSoon_Schedule>
                <TodayTitle>
                    <span> 오늘의 일정 </span>
                    <FontAwesomeIcon icon={faPlus} onClick={() => handleChange(null)} />
                </TodayTitle>
                <ToTable>
                    <ToDetail>
                        <ToTime>
                            <StartTime> 08:30 </StartTime>
                            <LastTime> 10:30 </LastTime>
                        </ToTime>
                        <ToDivisionLine />
                        <ToTitle>
                            <ToTitle_Detail>
                                <Schedule_Title> 개발 스터디 </Schedule_Title>
                                <input type="checkbox" id="toinput" />
                            </ToTitle_Detail>
                            <ToTitleLine />
                        </ToTitle>
                    </ToDetail>
                    <ToDetail>
                        <ToTime>
                            <StartTime> - </StartTime>
                            <LastTime />
                        </ToTime>
                        <ToDivisionLine />
                        <ToTitle>
                            <ToTitle_Detail>
                                <Schedule_Title> 친구 약속 </Schedule_Title>
                                <input type="checkbox" id="toinput" />
                            </ToTitle_Detail>
                            <ToTitleLine />
                        </ToTitle>
                    </ToDetail>
                    <ToDetail>
                        <ToTime>
                            <StartTime> 16:00 </StartTime>
                            <LastTime> 17:30 </LastTime>
                        </ToTime>
                        <ToDivisionLine />
                        <ToTitle>
                            <ToTitle_Detail>
                                <Schedule_Title> 영어 1단원 풀기 </Schedule_Title>
                                <input type="checkbox" id="toinput" />
                            </ToTitle_Detail>
                            <ToTitleLine />
                        </ToTitle>
                    </ToDetail>
                    <ToDetail>
                        <ToTime>
                            <StartTime> 18:00 </StartTime>
                            <LastTime> 19:30 </LastTime>
                        </ToTime>
                        <ToDivisionLine />
                        <ToTitle>
                            <ToTitle_Detail>
                                <Schedule_Title> 가족 일정 </Schedule_Title>
                                <input type="checkbox" id="toinput" />
                            </ToTitle_Detail>
                            <ToTitleLine />
                        </ToTitle>
                    </ToDetail>
                    {/* <ToMiddleLine /> */}
                </ToTable>
                <ScheMiddleLine />
                <SoonTitle>
                    <span> 다가오는 일정 </span>
                </SoonTitle>
                <SoonTable>
                    <Soon_Detail>
                        <span> 4/5 </span>
                        <Soon>
                            <Detail>
                                <SoonTime>
                                    <StartTime> 08:30 </StartTime>
                                    <LastTime> 10:30 </LastTime>
                                </SoonTime>
                                <DivisionLine />
                                <Schedule_Title> 개발 스터디 </Schedule_Title>
                            </Detail>
                            <DetailLine />
                            <Detail>
                                <SoonTime>
                                    <StartTime> 13:00 </StartTime>
                                    <LastTime> 15:30 </LastTime>
                                </SoonTime>
                                <DivisionLine />
                                <Schedule_Title> 면허 필기 공부 </Schedule_Title>
                            </Detail>
                        </Soon>
                    </Soon_Detail>
                    <SoonMiddleLine />
                    <Soon_Detail>
                        <span> 4/9 </span>
                        <Soon>
                            <Detail>
                                <SoonTime>
                                    <StartTime> 08:00 </StartTime>
                                    <LastTime> 11:30 </LastTime>
                                </SoonTime>
                                <DivisionLine />
                                <Schedule_Title> JSP 5단원 풀기 </Schedule_Title>
                            </Detail>
                            <DetailLine />
                            <Detail>
                                <SoonTime>
                                    <StartTime> 13:00 </StartTime>
                                    <LastTime> 16:00 </LastTime>
                                </SoonTime>
                                <DivisionLine />
                                <Schedule_Title> 개발 스터디 </Schedule_Title>
                            </Detail>
                        </Soon>
                    </Soon_Detail>
                </SoonTable>
            </ToSoon_Schedule>
        </Schedule>
    );
}

export default ScheduleMain;

// 스케줄러 좌측 페이지 영역
const Schedule = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 555.5px;
    height: 100%;
`;

// 타임 테이블 (제목 + 타임 테이블) 틀
const TimeTable = styled.div`
    display: flex;
    flex-direction: column;
`;

// 타임 테이블 제목
const TimeTable_Title = styled.div`
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

const TTable_Time = styled.div`
    width: 28px;
    height: 326px;
    border-right: 1.6px solid #B1B1B1;
    background-color: white;
    padding-bottom: 1px;
`;

// 중간 라인
const MiddleLine = styled.div`
    display: flex;
    width: 0px;
    height: 330px;
    border-left: 1px dashed #B1B1B1;
    margin: 23px 15px 0 15px;
`;

// 일정 (오늘의 일정, 다가오는 일정) 영역
const ToSoon_Schedule = styled.div`
    display: flex;
    flex-direction: column;
`;

// 오늘의 일정 제목
const TodayTitle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 25px;
    padding-bottom: 12px;

    & > span {
        font-size: 16px;
        font-weight: bold;
        border-bottom: 3.5px solid #DCA600;
    }

    & > svg {
        cusor: pointer;
    }
`;

// 오늘의 일정 (시간, 일정 제목, 체크) 틀
const ToTable = styled.div`
    display: flex;
    flex-direction: column;
    height: 136px;
    border: 1.6px solid #B1B1B1;
    background-color: #FFFBDA;
    margin-bottom: 1px;
    overflow-y: scroll;

    ::-webkit-scrollbar {
        width: 0px;
}
`;

const ToDetail = styled.div`
    display: flex;
    align-items: center;
    width: 250px;
    height: 36px;
    margin: 3px 0 3px 0;
`;

const ToTime = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 52px;
`;

// 오늘의 일정 (시간, 일정 제목) 구분선
const ToDivisionLine = styled.div`
    display: flex;
    width: 0px;
    height: 25px;
    border-left: 2px solid #FF8282;
    padding-right: 6px;
`;

const ToTitle = styled.div`
    display: flex;
    flex-direction: column;
`;

const ToTitle_Detail = styled.div`
    display: flex;
    justify-content: space-between;

    & > input {
        display: flex;
        width: 18px;
        height: 18px;
    }
`;

const ToTitleLine = styled.div`
    width: 171px;
    border-bottom: 1px solid #B1B1B1;
    padding-bottom: 3px;
`;

// const ToMiddleLine = styled.div`
// `;

// 일정 중간 라인
const ScheMiddleLine = styled.div`
    width: 250px;
    height: 0px;
    border-top: 1px dashed #B1B1B1;
    margin-top: 15px;
    margin-bottom: 16px;
`;

// 다가오는 일정 제목
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

// 다가오는 일정 (날짜, 시간, 구분선, 일정 제목) 틀
const SoonTable = styled.div`
    display: flex;
    flex-direction: column;
    height: 136px;
    border: 1.6px solid #B1B1B1;
    background-color: #FFFBDA;
    margin-bottom: 1px;
    overflow-y: scroll;

    ::-webkit-scrollbar {
        width: 0px;
}
`;


const Soon_Detail = styled.div`
    display: flex;
    width: 250px;
    height: 92px;
    padding-top: 12px;

    & > span {
        font-size: 11px;
        margin-right: 6px;
        margin-left: 12px;
    }
`;

// 상세 내용, 구분선 틀
const Soon = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 180px;
    height: 70px;
    border: 0.5px solid #B1B1B1;
    background-color: #FFFDF6;
`;

// 다가오는 일정 상세 내용
const Detail = styled.div`
    display: flex;
    align-items: center;
    width: 180px;
    height: 35px;
    padding-bottom: 3px;
`;

// 일정 시간 (시작 시간, 끝나는 시간) 영역
const SoonTime = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 10px 0 16px;
`;

// 일정 시작 시간
const StartTime = styled.div`
    font-size: 10px;
`;

// 일정 끝나는 시간
const LastTime = styled.div`
    font-size: 10px;
    color: #A5A5A5;
`;

// 다가오는 일정 (시간, 일정 제목) 구분선
const DivisionLine = styled.div`
    display: flex;
    width: 0px;
    height: 25px;
    border-left: 2px solid #FF8282;
    padding-right: 15px;
`;

// 일정 제목
const Schedule_Title = styled.div`
    font-size: 11px;
`;

// 하루의 여러 일정 구분 라인
const DetailLine = styled.div`
    width: 150px;
    height: 0px;
    border-top: 1px dashed #B1B1B1;
`;

// 다가오는 일정 중간 라인
const SoonMiddleLine = styled.div`
    display: flex;
    width: 220px;
    height: 0px;
    border-top: 1px dashed #B1B1B1;
    margin-left: 18px;
`;

// const label = styled.div`
//     width: 50px;
//     height: 50px;
//     border: 5px solid #000000;
//     border-radius: 5px;
//     display: inline-block;
//     cursor: pointer;
// `;
