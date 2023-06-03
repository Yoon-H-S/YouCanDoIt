import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import DatePicker from 'react-datepicker';
import { ko } from 'date-fns/esm/locale';
import "react-datepicker/dist/react-datepicker.css";

import * as S from 'styles/DatePickerStyle';

function RankingDetails(props) {
    const [selectDate, setSelectDate] = useState(new Date());
    const [maxResult, setMaxResult] = useState(17950);

    return(
        <Wrapper>
            <Title>
                <FontAwesomeIcon icon={faChevronLeft}/>
                <span>하루 5,000보 이상 걷기</span>
            </Title>
            <RankingArea>
                <GroupBar>
                    <GroupName>Happy_W 랭킹</GroupName>
                    <S.Calender>
                        <S.CustomDatePicker
                            showIcon
                            showPopperArrow={false}
                            fixedHeight
                            dateFormat="yyyy - MM - dd"
                            // minDate={new Date('2023-05-01')}
                            // maxDate={new Date('2023-06-10')}
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
                </GroupBar>
                <RankingList>
                    <Rank result={17950/maxResult} rank={1}>
                        <div>
                            <img src={"/profilePicture/profile10.png"} alt="" />
                            <span>김시은</span>
                        </div>
                        <span>17950</span>
                    </Rank>
                    <Rank result={15057/maxResult} rank={2}>
                        <div>
                            <img src={"/profilePicture/profile9.png"} alt="" />
                            <span>김혜나</span>
                        </div>
                        <span>15057</span>
                    </Rank>
                    <Rank result={14199/maxResult} rank={3}>
                        <div>
                            <img src={"/profilePicture/profile9.png"} alt="" />
                            <span>강지연</span>
                        </div>
                        <span>14199</span>
                    </Rank>
                    <Rank result={13893/maxResult} rank={4}>
                        <div>
                            <img src={"/profilePicture/profile9.png"} alt="" />
                            <span>김우석</span>
                        </div>
                        <span>13893</span>
                    </Rank>
                    <Rank result={13024/maxResult} rank={5}>
                        <div>
                            <img src={"/profilePicture/profile9.png"} alt="" />
                            <span>손나은</span>
                        </div>
                        <span>13024</span>
                    </Rank>
                    <Rank result={12087/maxResult} rank={6}>
                        <div>
                            <img src={"/profilePicture/profile9.png"} alt="" />
                            <span>JJ</span>
                        </div>
                        <span>12087</span>
                    </Rank>
                    <Rank result={11735/maxResult} rank={7}>
                        <div>
                            <img src={"/profilePicture/profile9.png"} alt="" />
                            <span>박보검</span>
                        </div>
                        <span>11735</span>
                    </Rank>
                    <Rank result={10906/maxResult} rank={8}>
                        <div>
                            <img src={"/profilePicture/profile9.png"} alt="" />
                            <span>박민석</span>
                        </div>
                        <span>10906</span>
                    </Rank>
                    <Rank result={15/maxResult} rank={9}>
                        <div>
                            <img src={"/profilePicture/profile9.png"} alt="" />
                            <span>차병호</span>
                        </div>
                        <span>15</span>
                    </Rank>
                </RankingList>
            </RankingArea>
        </Wrapper>
    );
}

export default RankingDetails;

// 랭킹 상세페이지의 틀
const Wrapper = styled.div`
    position: relative;
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