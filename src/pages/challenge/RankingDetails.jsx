import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { ko } from 'date-fns/esm/locale';
import "react-datepicker/dist/react-datepicker.css";

import * as S from 'styles/DatePickerStyle';

function RankingDetails(props) {
    const {groupNumber, isDaily, close} = props;
    const [selectDate, setSelectDate] = useState(new Date());
    const [maxResult, setMaxResult] = useState(0);
    const [groupInfo, setGroupInfo] = useState(null);
    const [groupRanking, setGroupRanking] = useState([]);

    useEffect(() => {
        if(isDaily) {
            const year = selectDate.getFullYear();
            const month = selectDate.getMonth() + 1;
            const date = selectDate.getDate();
            const sendDate = year + "-" + month + "-" + date;
            axios.get('/api/challenge-api/daily-ranking-detail', {
                params: {
                    groupNumber: groupNumber,
                    date: sendDate
                }
            }).then(function (response) {
                setGroupInfo(response.data[0]);
                setGroupRanking(response.data[1]);
                setMaxResult(response.data[1][0][2]);
            }).catch(
                (error) => console.log(error)
            );
        } else {
            axios.get('/api/challenge-api/godlife-ranking-detail', {
                params: {
                    groupNumber: groupNumber
                }
            }).then(function (response) {
                console.log(response.data);
                setGroupInfo(response.data[0]);
                setGroupRanking(response.data[1]);
                setMaxResult(response.data[1][0][2]);
            }).catch(
                (error) => console.log(error)
            );
        }
        
    },[groupNumber, selectDate]);

    if(groupInfo !== null) {
        return(
            <Wrapper>
                <Title>
                    <FontAwesomeIcon icon={faChevronLeft} onClick={close}/>
                    <span>{groupInfo["groupSubject"]}</span>
                </Title>
                <RankingArea>
                    <GroupBar>
                        <GroupName>{groupInfo["groupName"]} 랭킹</GroupName>
                        {isDaily && 
                            <S.Calender>
                                <S.CustomDatePicker
                                    showIcon
                                    showPopperArrow={false}
                                    fixedHeight
                                    dateFormat="yyyy - MM - dd"
                                    minDate={new Date(groupInfo["groupStartdate"])}
                                    maxDate={new Date()}
                                    locale={ko}
                                    closeOnScroll={true}
                                    selected={selectDate}
                                    onChange={(date) => setSelectDate(date)}
                                    renderCustomHeader={({
                                        date,
                                        decreaseMonth,
                                        increaseMonth,
                                        prevMonthButtonDisabled,
                                        nextMonthButtonDisabled
                                    }) => (
                                        <S.CustomHeader>
                                            <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
                                                {"<"}
                                            </button>
                                            <div>
                                                {date.getFullYear()}년 {date.getMonth()+1}월
                                            </div>
                                            <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
                                                {">"}
                                            </button>
                                        </S.CustomHeader>
                                    )}
                                />
                            </S.Calender>
                        }
                    </GroupBar>
                    <RankingList>
                        {groupRanking.length > 0 && groupRanking.map((value, index) => {
                            return(
                                <Rank key={index} result={value[2]/maxResult} rank={value[3]}>
                                    <div>
                                        <img src={value[1]} alt="" />
                                        <span>{value[0]}</span>
                                    </div>
                                    <span>{value[2]}</span>
                                </Rank>
                            );
                        })}
                    </RankingList>
                </RankingArea>
            </Wrapper>
        );
    }
}

export default RankingDetails;

// 랭킹 상세페이지의 틀
const Wrapper = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

// 상단 챌린지 주제 영역
const Title = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 50px;
    background-color: #DCA600;
    z-index: 2;

    & > span {
        font-size: 16px;
        font-weight: 500;
        color: white;
        cursor: default;
    }

    & > svg {
        position: absolute;
        left: 45px;
        color: white;
        cursor: pointer;
    }
`;

// 본문 영역. 스크롤되는 영역
const RankingArea = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 28px 0;
    width: 100%;
    height: 372px; 
    background-color: #FFF9BF;
    overflow-y: scroll;

    ::-webkit-scrollbar {
        width: 0px;
    }
`;

// 그룹 이름과 캘린더가 들어가는 영역
const GroupBar = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 465px;
    height: 24px;
    margin-bottom: 13px;
`;

// 그룹 이름
const GroupName = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: max-content;
    height: 100%;
    padding: 0 12px;
    border-radius: 5px;
    background-color: #FFCB65;
    font-size: 10px;
`;

// 랭킹 리스트
const RankingList = styled.div`
    width: 465px;
    display: flex;
    flex-direction: column;
    align-items: start;
`;

// 각 랭킹
const Rank = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: ${(props) => props.result*100}%;
    min-width: 150px;
    height: 40px;
    padding: 0 20px;
    background-color: hsl(45,100%,${(props) => props.rank*2+15}%);
    overflow: hidden;

    :not(:last-child) {
        margin-bottom: 3px;
    }

    // 프로필사진과 닉네임
    & > div {
        display: flex;
        align-items: center;

        & > img {
            width: 18px;
            height: 18px;
            border: 0.5px solid #999999;
            border-radius: 18px;
        }

        & > span {
            margin-left: 10px;
            font-size: 11px;
            color: white;
        }
    }

    // 만보기 수
    & > span {
        font-size: 10px;
        color: white;
    }
`;