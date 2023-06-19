import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import MainPage from 'pages/main/MainPage'

function Main(props) {
    const navigate = useNavigate();
    const [myRankX, setMyRankX] = useState(0);
    const [inviteX, setInviteX] = useState(0);
    const [rankList, setRankList] = useState([]);
    const [inviteList, setInviteList] = useState([]);

    useEffect(() => {
        axios.get('/api/group-api/main-invite')
        .then(function (response) {
            setInviteList(response.data);
        }).catch(
            (error) => console.log(error)
        );
        axios.get('/api/challenge-api/my-ranking')
        .then(function (response) {
            setRankList(response.data);
        }).catch(
            (error) => console.log(error)
        );
    },[]);
    
    return(
        <MainPage>
            <Paging>
                {(myRankX === 0) ?
                    <Blank /> :
                    <FontAwesomeIcon icon={faChevronLeft} size="xl" onClick={() => setMyRankX(myRankX - 1)} />
                }
                <MyRankWrapper>
                    <span>나의 랭킹</span>
                    <MyRankList>
                        {rankList.length > 0 ? rankList.map((value, index) => {
                            return(
                                <MyRank x={myRankX} key={index}>
                                    <MyRankImage rank={value[4]}>
                                        <img src={value[2]} alt="" />
                                        <div>{value[4]}</div>
                                        <span>D - {value[3]}</span>
                                    </MyRankImage>
                                    <MyRankInfo>
                                        <span>{value[1]}</span>
                                        <div>{value[0]}</div>
                                    </MyRankInfo>
                                </MyRank>
                            );
                        }) : <None>진행중인 챌린지가 없습니다.</None>}
                    </MyRankList>
                </MyRankWrapper>
                {(myRankX + 3 >= rankList.length) ?
                    <Blank /> :
                    <FontAwesomeIcon icon={faChevronRight} size="xl" onClick={() => setMyRankX(myRankX + 1)} />
                }
            </Paging>
            <Paging>
                {(inviteX === 0) ?
                    <Blank /> : 
                    <FontAwesomeIcon icon={faChevronLeft} size="xl" onClick={() => setInviteX(inviteX - 1)} />
                }
                <InviteWrapper>
                    <span>그룹 초대</span>
                    <InviteList>
                        {inviteList.length > 0 ? inviteList.map((value, index) => {
                            return(
                                <Invite x={inviteX} key={index} onClick={() => (
                                    navigate("/groupInvite", {
                                        state: {
                                            groupNumber: value["groupNumber"]
                                        }
                                    })
                                )}>
                                    <InviteImage>
                                        <img src={value["groupImage"]} alt="" />
                                        <div><span>{value["groupName"]}</span></div>
                                    </InviteImage>
                                    <InviteSubject>{value["groupSubject"]}</InviteSubject>
                                </Invite>
                            );
                        }) : <None>받은 그룹초대가 없습니다.</None>}
                    </InviteList>
                </InviteWrapper>
                {(inviteX + 3 >= inviteList.length) ?
                    <Blank /> : 
                    <FontAwesomeIcon icon={faChevronRight} size="xl" onClick={() => setInviteX(inviteX + 1)} />
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

const None = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 122px;
    font-size: 15px;
    color: #A4A4A4;
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
    right: ${(props) => (props.x*259)}px;
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

    & > img {
        width: 100%;
        height: 100%;
    }

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
        border-radius: 10px;
        background-color: #FFF066;
        font-size: 10px;
        font-weight: bold;
        color: ${(props) => ((props.rank <= 3 && props.rank !== 0) ? "red" : "black" )};
    }

    // 남은 기간
    & > span {
        position: absolute;
        font-size: 25px;
        font-weight: 500;
        text-shadow: 0px 0px 2px white;
        opacity: 0.7;
    }
`;

// 그룹 주제, 그룹명
const MyRankInfo = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    & > span {
        width: 110px;
        overflow: hidden;
        white-space: nowrap; // 줄바꿈 방지
        text-overflow: ellipsis; // 오버플로우가 발생하면 ...처리
        font-size: 12px;
        font-weight: 500;
    }

    & > div {
        width: max-content;
        max-width: 75px;
        overflow: hidden;
        white-space: nowrap; // 줄바꿈 방지
        text-overflow: ellipsis; // 오버플로우가 발생하면 ...처리
        height: 25px;
        padding: 5px 12px;
        background-color: #FFCB65;
        border-radius: 5px;
        text-align: center;
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
    right: ${(props) => (props.x*259)}px;
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

    & > img {
        width: 100%;
        height: 100%;
    }

    // 이미지 우측 상단 그룹명
    & > div {
        position: absolute;
        right: 0px;
        top: 0px;
        width: max-content;
        height: 25px;
        padding: 0 12px;
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