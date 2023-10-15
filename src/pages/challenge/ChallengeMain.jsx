import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import Diy from 'assets/challenge/diy.jpg';

function ChallengeMain(props) {
    const {handleChange} = props;
    const [bookX, setBookX] = useState(0);
    const [bookChallengeList, setBookChallengeList] = useState([]);
    const [godChallengeList, setGodChallengeList] = useState([]);

    useEffect(() => {
        axios.post('/api/challenge-api/challenge-reservation')
		.then(function (response) {
			setBookChallengeList(response.data);
        }).catch(
            (error) => console.log(error)
        );
        axios.get('/api/challenge-api/godlife-challenge-list')
		.then(function (response) {
			setGodChallengeList(response.data);
        }).catch(
            (error) => console.log(error)
        );
    },[]);

    return (
        <Wrapper>
            <Challenge>
                <BookChallenge>
                    <span> 예약된 챌린지 </span>
                    <BookList>
                        {bookChallengeList.length > 0 ? bookChallengeList.map((value, index) => {
                            return(
                                <Book key={index} x={bookX}>
                                    <Bimage>
                                        <img src={value["groupImage"]} alt="" />
                                        <Period>
                                            {value["groupStartdate"].slice(5,7)}/{value["groupStartdate"].slice(8,10)} ~&nbsp;
                                            {value["groupEnddate"].slice(5,7)}/{value["groupEnddate"].slice(8,10)}
                                        </Period>
                                    </Bimage>
                                    <BookDetail>
                                        <ChallengeTItle> {value["groupSubject"]} </ChallengeTItle>
                                        <GroupName> {value["groupName"]} </GroupName>
                                    </BookDetail>
                                </Book>
                            );
                        }) : 
                            <None>예약된 챌린지가 없습니다.</None>
                        }
                    </BookList>
                    {(bookX === 0) ?
                        <Blank /> :
                        <FontAwesomeIcon icon={faChevronLeft} size="xl" className="left" onClick={() => setBookX(bookX - 1)} />
                    }
                    {(bookX + 3 >= bookChallengeList.length) ?
                        <Blank /> :
                        <FontAwesomeIcon icon={faChevronRight} size="xl" className="right" onClick={() => setBookX(bookX + 1)} />
                    }
                </BookChallenge>
                <OfficialChallenge> 
                    <span> 갓생 챌린지 </span>
                    <OfficialList>
                        {godChallengeList.length > 0 && godChallengeList.map((value, index) => {
                            return(
                                <Oneofficial key={index} onClick={() => handleChange(value["challengeSubject"])}>
                                    <Oimage>
                                        <img src={value["challengeImage"]} alt="" />
                                        <Filter />
                                        <Category> {value["challengeCategory"]} </Category>
                                        <Explain>
                                            <Explain_One> 지인과 함께 </Explain_One>
                                            <Explain_Two> 챌린지 그룹을 생성하세요. </Explain_Two>
                                        </Explain>
                                    </Oimage>
                                    <OfficialTitle> {value["challengeSubject"]} </OfficialTitle>
                                </Oneofficial>
                            );
                        })}
                    </OfficialList>
                </OfficialChallenge>
                <UnofficialChallenge>
                    <Unofficial>
                        <span> D.I.Y 챌린지 생성하기 </span>
                        <FontAwesomeIcon icon={faPlus} onClick={() => handleChange(null)} />
                    </Unofficial>
                    <Unoimage onClick={() => handleChange(null)}>
                        <img src={Diy} alt="" />
                        <Filter />
                        <span>새로운 D.I.Y 챌린지를 생성해주세요.</span>
                    </Unoimage>
                </UnofficialChallenge>
            </Challenge>
        </Wrapper>
    );
}

export default ChallengeMain;

const Wrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 555.5px;
    height: 100%;
`;

const Challenge = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 385px; 
    padding: 28px 0;
    overflow-y: scroll;

    ::-webkit-scrollbar {
        width: 0px;
    }
`;

// 예약된 챌린지
const BookChallenge = styled.div`
    position: relative;
    align-items: center;
    justify-content: center;
    width: 465.5px;
    height: 130px;
    margin-bottom: 15px;

    & > span {
        font-size: 16px;
        font-weight: bold;
        border-bottom: 3px solid #DCA600;
    }

    & > svg {
        position: absolute;
        top : 60px;
        color: #cdcdcd;
        cursor: pointer;
    }

    & > .left {
        left: -20px;
    }

    & > .right {
        right: -20px;
    }
`;

// 예약된 챌린지 리스트
const BookList = styled.div`
    display: flex;
    width: 465.5px;
    height: 105px;
    margin-right: 88px;
    padding-top: 15px;
    overflow: hidden;
`;

// 예약된 챌린지
const Book = styled.div`
    position: relative;
    right: ${(props) => (props.x*162.75)}px;
    width: 140px;
    height: 90px;
    margin-right: 22.75px;
    transition: 0.5s;
`;

// 예약된 챌린지 이미지
const Bimage = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    width: 140px;
    height: 67px;
    border: 1px solid #B1B1B1;
    border-radius: 10px;
    overflow: hidden;

    & > img {
        width: 100%;
        height: 100%;
    }
`;

// 예약된 챌린지 기간
const Period = styled.div`
    position: absolute;
    right: 5px;
    font-size: 10px;
    text-shadow: 0px 0px 3px white;
`;

// 예약된 챌린지 제목과 그룹 이름 전체틀
const BookDetail = styled.div`
    display:flex;
    justify-content: space-between;
    margin-top: 5px;
`;

// 예약된 챌린지 제목
const ChallengeTItle = styled.div`
    font-size: 10px;
    width: 80px;
    overflow: hidden;
    white-space: nowrap; // 줄바꿈 방지
    text-overflow: ellipsis; // 오버플로우가 발생하면 ...처리
`;

// 예약된 챌린지 그룹 이름 
const GroupName = styled.div`
    position: relative;
    overflow: hidden;
    text-align: center;
    white-space: nowrap; // 줄바꿈 방지
    text-overflow: ellipsis; // 오버플로우가 발생하면 ...처리
    width: 60px;
    height: 20px;
    font-size: 10px;
    padding: 0 5px;
    border: 1px solid #ffffff;
    border-radius: 5px;
    background-color: #FFCB65;
`;

// 화살표 대신 여백
const Blank = styled.div`
    width: 15px;
`;

// 예약된 챌린지가 없을 때
const None = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 100%;
    height: 100%;
    font-size: 15px;
    color: #A4A4A4;
`;

// 갓생 챌린지
const OfficialChallenge = styled.div`
    position: relative;
    align-items: center;
    justify-content: center;
    width: 465.5px;
    height: 190px;
    border-top: 1px solid #B1B1B1;
    margin-bottom: 15px;
    padding-top: 15px;

    & > span {
        font-size: 16px;
        font-weight: bold;
        border-bottom: 3px solid #DCA600;
    }
`;

// 갓생 챌린지 리스트 (건강 -> 만보기)
const OfficialList = styled.div`
    display: flex;
    width: 465.5px;
    height: 147px;
    margin-right: 88px;
    padding-top: 15px;
`;

// 갓생 챌린지 전체틀
const Oneofficial = styled.div`
    width: 200px;
    height: 147px;
    cursor: pointer;
`;

// 갓생 챌린지 (이미지, 카테고리, 설명) 틀
const Oimage = styled.div`
    position: relative;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 110px;
    border: 1px solid #B1B1B1;
    border-radius: 10px;
    overflow: hidden;

    & > img {
        position: absolute;
        width: 100%;
        height: 100%;
    }
`;

const Filter = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: white;
    opacity: 0.7;
`;

// 갓생 챌린지 카테고리
const Category = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 71px;
    height: 24px;
    font-size: 10px;
    border-radius: 0 10px 0 0;
    background-color: #FFCB65;
    margin-left: auto;
`;

// 갓생 챌린지 설명 틀
const Explain = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    font-size: 12px;
    font-weight: bold;
    opacity: 0.7;
    margin-top: 13px;
`;

// 갓생 챌린지 설명 1
const Explain_One = styled.div`
`;

// 갓생 챌린지 설명 2
const Explain_Two = styled.div`
`;

// 갓생 챌린지 제목
const OfficialTitle = styled.div`
    display: flex;
    justify-content: center;
    font-size: 12px;
    font-weight: bold;
    margin-top: 5px;
`;

// D.I.Y 챌린지 생성하기 전체틀
const UnofficialChallenge = styled.div`
    position: relative;
    align-items: center;
    justify-content: center;
    width: 465.5px;
    height: 150px;
    border-top: 1px solid #B1B1B1;
    padding-top: 15px;
`;

const Unofficial = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;

    & > span {
        font-size: 16px;
        font-weight: bold;
        border-bottom: 3px solid #DCA600;
    }

    & > svg {
        cursor: pointer;
    }
`;

// D.I.Y 챌린지 생성하기 이미지
const Unoimage = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 465.5px;
    height: 110px;
    border: 1px solid #B1B1B1;
    border-radius: 5px;
    margin-top: 15px;
    cursor: pointer;

    & > img {
        position: absolute;
        width: 100%;
        height: 100%;
    }

    & > span {
        width: 110px;
        position: relative;
        text-align: center;
        font-size: 12px;
        font-weight: bold;
    }
`;