import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import MainPage from 'pages/main/MainPage'
import MyRanking from 'assets/testImg/myrank.png';
import Group1 from 'assets/testImg/group1.png';
import Group2 from 'assets/testImg/group2.png';
import Group3 from 'assets/testImg/group3.png';

function Main(props) {
    const navigate = useNavigate();
    const [myRankX, setMyRankX] = useState(0);
    const [inviteX, setInviteX] = useState(0);
    
    return(
        <MainPage>
            <Paging>
                {(myRankX <= 0) ?
                    <Blank /> :
                    <FontAwesomeIcon icon={faChevronLeft} size="xl" onClick={() => setMyRankX(myRankX - 259)} />
                }
                <MyRankWrapper>
                    <span>나의 랭킹</span>
                    <MyRankList>
                        <MyRank x={myRankX}>
                            <MyRankImage>
                                <img src={MyRanking} alt="" />
                                <div>15</div>
                                <span>D - 3</span>
                            </MyRankImage>
                            <MyRankInfo>
                                <span>챌린지 제목</span>
                                <div>너.뭐.못</div>
                            </MyRankInfo>
                        </MyRank>
                        <MyRank x={myRankX}>
                            <MyRankImage>
                                <img src={MyRanking} alt="" />
                                <div>8</div>
                                <span>D - 5</span>
                            </MyRankImage>
                            <MyRankInfo>
                                <span>7,000보 걷기</span>
                                <div>Y.C.D.I</div>
                            </MyRankInfo>
                        </MyRank>
                        <MyRank x={myRankX}>
                            <MyRankImage>
                                <img src={MyRanking} alt="" />
                                <div>12</div>
                                <span>D - 6</span>
                            </MyRankImage>
                            <MyRankInfo>
                                <span>20,000보 걷기</span>
                                <div>아침형 그룹</div>
                            </MyRankInfo>
                        </MyRank>
                        <MyRank x={myRankX}>
                            <MyRankImage>
                                <img src={MyRanking} alt="" />
                                <div>1</div>
                                <span>D - 12</span>
                            </MyRankImage>
                            <MyRankInfo>
                                <span>만보걷기</span>
                                <div>테스트 그룹</div>
                            </MyRankInfo>
                        </MyRank>
                    </MyRankList>
                </MyRankWrapper>
                {(myRankX/259 >= 1) ?
                    <Blank /> :
                    <FontAwesomeIcon icon={faChevronRight} size="xl" onClick={() => setMyRankX(myRankX + 259)} />
                }
            </Paging>
            <Paging>
                {(inviteX <= 0) ?
                    <Blank /> : 
                    <FontAwesomeIcon icon={faChevronLeft} size="xl" onClick={() => setInviteX(inviteX - 259)} />
                }
                <InviteWrapper>
                    <span>그룹 초대</span>
                    <InviteList>
                        <Invite x={inviteX} onClick={() => navigate("/groupInvite")}>
                            <InviteImage>
                                <img src={Group1} alt="" />
                                <div><span>갓생살조</span></div>
                            </InviteImage>
                            <InviteSubject>(한달) 매일 만보 이상 걷기</InviteSubject>
                        </Invite>
                        <Invite x={inviteX}>
                            <InviteImage>
                                <img src={Group2} alt="" />
                                <div><span>Best_W</span></div>
                            </InviteImage>
                            <InviteSubject>(1주) 짧고 굵게! 5,000보 걷기</InviteSubject>
                        </Invite>
                        <Invite x={inviteX}>
                            <InviteImage>
                                <img src={Group3} alt="" />
                                <div><span>WWW</span></div>
                            </InviteImage>
                            <InviteSubject>건강 관리 (걷기 운동)</InviteSubject>
                        </Invite>
                        <Invite x={inviteX}>
                            <InviteImage>
                                <img src={Group1} alt="" />
                                <div><span>테스트</span></div>
                            </InviteImage>
                            <InviteSubject>N보걷기</InviteSubject>
                        </Invite>
                    </InviteList>
                </InviteWrapper>
                {(inviteX/259 >= 1) ?
                    <Blank /> : 
                    <FontAwesomeIcon icon={faChevronRight} size="xl" onClick={() => setInviteX(inviteX + 259)} />
                }
            </Paging>
        </MainPage>
    );
}

export default Main;

// 리스트 이동을 위한 영역
const Paging = styled.div`
    width: 783px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    & > svg {
        color: #cdcdcd;
        cursor: pointer
    }
`;

// 화살표 대신 여백
const Blank = styled.div`
    width: 15px;
`;

// 나의 랭킹 영역
const MyRankWrapper = styled.div`
    width: 703px;
    height: 211px;
    border-bottom: 1px solid #B1B1B1;
    display: flex;
    flex-direction: column;
    justify-content: center;

    // 제목
    & > span {
        display: block;
        width: 63px;
        font-size: 16px;
        font-weight: bold;
        border-bottom: 3px solid #DCA600;
        margin-bottom: 15px;
        cursor: default;
    }
`;

// 나의 랭킹 리스트
const MyRankList = styled.div`
    width: 100%;
    display: flex;
    overflow: hidden;
`;

// 각 그룹의 나의 랭킹 컨테이너
const MyRank = styled.div`
    position: relative;
    right: ${(props) => props.x}px;
    width: 185px;
    margin-right:74px;
    transition: 0.5s;
`;

// 그룹 이미지
const MyRankImage = styled.div`
    position: relative;
    width: 100%;
    height: 95px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    border-radius: 10px;
    margin-bottom: 10px;

    // 이미지 좌측 상단 자신의 랭킹
    & > div {
        position: absolute;
        left: 0px;
        top: 0px;
        width: 28px;
        height: 28px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius:10px;
        background-color: #FFF066;
        font-size: 10px;
        font-weight: bold;
    }

    // 남은 기간
    & > span {
        position: absolute;
        font-size: 25px;
        font-weight: 500;
        opacity: 0.5;
    }
`;

// 그룹 주제, 그룹명
const MyRankInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    & > span {
        font-size: 12px;
        font-weight: 500;
    }

    & > div {
        width: 60px;
        height: 25px;
        background-color: #FFCB65;
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 10px;
    }
`;

// 그룹 초대 영역
const InviteWrapper = styled.div`
    width: 703px;
    height: 211px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    // 제목
    & > span {
        display: block;
        width: 63px;
        font-size: 16px;
        font-weight: bold;
        border-bottom: 3px solid #DCA600;
        margin-bottom: 15px;
        cursor: default;
    }
`;

// 그룹 초대 리스트
const InviteList = styled.div`
    width: 100%;
    display: flex;
    overflow: hidden;
`;

// 각 그룹 초대 컨테이너
const Invite = styled.div`
    position: relative;
    right: ${(props) => props.x}px;
    width: 185px;
    margin-right:74px;
    cursor: pointer;
    transition: 0.5s;
`;

// 그룹 이미지
const InviteImage = styled.div`
    position: relative;
    width: 100%;
    height: 95px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    border-radius: 10px;
    margin-bottom: 10px;

    // 이미지 우측 상단 그룹명
    & > div {
        position: absolute;
        left: 125px;
        top: 0px;
        width: 60px;
        height: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius:0 10px 0 0;
        background-color: rgba(255,203,101,0.7); // 자식에게 투명도를 상속하는것을 방지하기 위해 rgba사용
        
        & > span {
            font-size: 10px;
            font-weight: 300;
        }
    }
`;

// 그룹 주제
const InviteSubject = styled.div`
    font-size: 12px;
    font-weight: 500;
    text-align: center;
`;