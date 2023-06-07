import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

function ChallengeMain(props) {
    return (
        <Wrapper>
            <Challenge>
                <BookChallenge> 
                    <span> 예약된 챌린지 </span>
                    <BookList>
                        <OneBook>
                            <Bimage>
                                <Period> 04/10 ~ 05/10 </Period>
                            </Bimage>
                            <BookDetail>
                                <ChallengeTItle> 만보 걷기 </ChallengeTItle>
                                <GroupName> 너.뭐.못 </GroupName>
                            </BookDetail>
                        </OneBook>
                        <TwoBook>
                            <Bimage>
                                <Period> 04/19 ~ 07/19 </Period>
                            </Bimage>
                            <BookDetail>
                                <ChallengeTItle> 15,000보 걷기 </ChallengeTItle>
                                <GroupName> Best_W </GroupName>
                            </BookDetail>
                        </TwoBook>
                        <ThreeBook>
                            <Bimage>
                                <Period> 날짜 </Period>
                            </Bimage>
                            <BookDetail>
                                <ChallengeTItle> 챌린지 제목 </ChallengeTItle>
                                <GroupName> 그룹 이름 </GroupName>
                            </BookDetail>
                        </ThreeBook>
                    </BookList>
                </BookChallenge>
                <OfficialChallenge> 
                    <span> 갓생 챌린지 </span>
                    <OfficialList>
                        <Oneofficial>
                            <Oimage>
                                <Category> 건강 → 만보기 </Category>
                                <Explain>
                                    <Explain_One> 지인과 함께 </Explain_One>
                                    <Explain_Two> 챌린지 그룹을 생성하세요. </Explain_Two>
                                </Explain>
                            </Oimage>
                            <OfficialTitle> (N주) N보 걷기 </OfficialTitle>
                        </Oneofficial>
                    </OfficialList>
                </OfficialChallenge>
                <UnofficialChallenge>
                    <Unofficial>
                        <span> D.I.Y 챌린지 생성하기 </span>
                        <FontAwesomeIcon icon={faPlus} />
                    </Unofficial>
                    <Unoimage />
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
`;

// 예약된 챌린지 리스트
const BookList = styled.div`
    display: flex;
    width: 465.5px;
    height: 105px;
    margin-right: 88px;
    padding-top: 15px;
`;

// 예약된 챌린지 1
const OneBook = styled.div`
    width: 140px;
    height: 90px;
    margin-right: 24px;
`;

// 예약된 챌린지 2
const TwoBook = styled.div`
    width: 140px;
    height: 90px;
    margin-right: 23px;
`;

// 예약된 챌린지 3
const ThreeBook = styled.div`
    width: 140px;
    height: 90px;
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
    padding-right: 5px;
`;

// 예약된 챌린지 기간
const Period = styled.div`
    font-size: 10px;
    margin-left: auto;
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
`;

// 예약된 챌린지 그룹 이름 
const GroupName = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 60px;
    height: 20px;
    font-size: 10px;
    border: 1px solid #ffffff;
    border-radius: 5px;
    background-color: #FFCB65;
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
`;

// 갓생 챌린지 카테고리
const Category = styled.div`
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
`;

// D.I.Y 챌린지 생성하기 이미지
const Unoimage = styled.div`
    position: relative;
    width: 465.5px;
    height: 110px;
    border: 1px solid #B1B1B1;
    border-radius: 5px;
    margin-top: 15px;
`;