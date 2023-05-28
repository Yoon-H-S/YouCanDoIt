import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faUser } from '@fortawesome/free-solid-svg-icons';

import MainPage from 'pages/main/MainPage';
import GroupImg from 'assets/testImg/groupbig.png';
import PersonImg from 'assets/id.png';
import FootImg from 'assets/foot.png';

function GroupInvite(props) {
    const [isOpen, setIsOpen] = useState(false);

    return(
        <MainPage>
            <Header>
                <Title>
                    <span>그룹 초대</span>
                    <Inviter><span>김시은</span> 님이 초대하셨습니다.</Inviter>
                </Title>
                <Participant onClick={() => setIsOpen(!isOpen)}>
                    <span>{isOpen ? "접기" : "펼치기"}</span>
                    <FontAwesomeIcon icon={faChevronUp} rotation={isOpen ? 0 : 180} size="2xs" style={{color: "black",}} />
                </Participant>
                <ParticipantList isOpen={isOpen}>
                    <ListInner isOpen={isOpen}>
                        <Person>
                            <div>
                                <img src={PersonImg} alt="" />
                                <span>김시은</span>
                            </div>
                        </Person>
                        <Person>
                            <div>
                                <img src={PersonImg} alt="" />
                                <span>김혜나</span>
                            </div>
                        </Person>
                        <Person>
                            <div>
                                <img src={PersonImg} alt="" />
                                <span>JJ</span>
                            </div>
                        </Person>
                        <Person>
                            <div>
                                <img src={PersonImg} alt="" />
                                <span>린</span>
                            </div>
                        </Person>
                        <Person>
                            <div>
                                <img src={PersonImg} alt="" />
                                <span>한아</span>
                            </div>
                        </Person>
                        <Person>
                            <div>
                                <img src={PersonImg} alt="" />
                                <span>이지은</span>
                            </div>
                        </Person>
                        <Person wait={true}>
                            <div>
                                <img src={FootImg} alt="" />
                                <span>김시은</span>
                            </div>
                            <span>대기중</span>
                        </Person>
                        <Person wait={true}>
                            <div>
                                <img src={FootImg} alt="" />
                                <span>박보검</span>
                            </div>
                            <span>대기중</span>
                        </Person>
                    </ListInner>
                </ParticipantList>
            </Header>
            <GroupImage>
                <img src={GroupImg} alt=""/>
            </GroupImage>
            <GroupInfo>
                <div>
                    <Subject>(한 달) 매일 만보 이상 걷기</Subject>
                    <Name>갓생살조</Name>
                    <FontAwesomeIcon icon={faUser} style={{color: "#adadad",}} />
                    <HeadCount>18명</HeadCount>
                </div>
                <div>
                    <Day>매일</Day>
                    <Period>4월 7일 ~ 5월 7일</Period>
                </div>
            </GroupInfo>
            <Contents>
                <span>건강 챙기기 프로젝트!<br />하루에 10,000보씩 한 달 동안 매일매일 걸어보자 꾸준히 하면 건강 챙길 수 있다!</span>
                <div>
                    <RejectBtn>거절</RejectBtn>
                    <AcceptBtn>수락</AcceptBtn>
                </div>
            </Contents>
        </MainPage>
    );
}

export default GroupInvite;

// 상단 페이지명, 초대자, 참가자가 포함되는 영역
const Header = styled.div`
    position: relative;
    width: 778px;
    display: flex;
    align-items: end;
    justify-content: space-between;
    margin-bottom: 15px;
`;

// 페이지명
const Title = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    & > span {
        font-size: 16px;
        font-weight: bold;
        border-bottom: 3px solid #DCA600;
    }
`;

// 초대자
const Inviter = styled.div`
    margin-left: 22px;
    font-size: 14px;
    color: #666666;

    & > span {
        font-weight: bold;
        color: #9C9AFF;
    }
`;

// 참가자 목록 버튼
const Participant = styled.div`
    cursor: pointer;

    & > span {
        font-size: 13px;
        margin-right: 10px;
    }
`;

// 참가자 목록
const ParticipantList = styled.div`
    position: absolute;
    top: 42px;
    left: 618px;
    width: 160px;
    height: 0px;
    border-radius: 5px;
    overflow: hidden;
    transition: 0.5s;
    display: flex;
    align-items: center;
    justify-content: center;

    // 참가자 목록이 열렸을 때
    ${(props) => (
        props.isOpen && `
            height: 240px !important;
            background-color: white;
            border: 0.5px solid #9e9e9e;
            box-shadow: 3px 3px 10px 0 rgba(0, 0, 0, 0.25);
        `
    )}
`;

// 목록 내부
const ListInner = styled.div`
    width: 128px;
    height: 207px;
    opacity: 0;
    transition: 0.1s;
    overflow-y: scroll;

    /*스크롤바의 너비*/
    ::-webkit-scrollbar {
        width: 4px; 
    }

    /*스크롤바의 색상*/
    ::-webkit-scrollbar-thumb {
        background-color: var(--primary-color);
        border-radius: 7px;
    }

    /*스크롤바 트랙 색상*/
    ::-webkit-scrollbar-track {
        background-color: #E1E1E1; 
    }

    // 참가자 목록이 열렸을 때
    ${(props) => (
        props.isOpen && `
            opacity: 1;
        `
    )}
`;

// 각 참가자, 대기자
const Person = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 5px;
    border-bottom: 1px dashed #D3D3D3;
    cursor: default;

    & > div {
        display: flex;
        align-items: center;
    }

    img {
        width: 10px;
        height: 10px;
        margin-right: 8px;
    }

    span {
        font-size: 10px;
        color: ${(props) => props.wait ? "#9A9A9A" : "black"};
    }
    
    :not(:last-child) {
        margin-bottom: 10px;
    }
`;

// 화면 중앙의 그룹 이미지
const GroupImage = styled.div`
    width: 778px;
    height: 190px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
`;

// 그룹 주제, 그룹명, 참가자수, 기간이 포함되는 영역
const GroupInfo = styled.div`
    width: 778px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 0;
    border-bottom: 1px solid #B1B1B1;
    margin-bottom: 25px;

    & > div {
        display: flex;
        align-items:center;
    }
`;

// 그룹 주제
const Subject = styled.div`
    font-size: 20px;
    font-weight: bold;
    margin-right: 25px;
`;

// 그룹명
const Name = styled.div`
    width: 70px;
    height: 30px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #FFCB65;
    font-size: 13px;
    margin-right: 13px;
`;

// 참가자수
const HeadCount = styled.div`
    font-size: 11px;
    margin-left: 8px;
`;

// 매일
const Day = styled.div`
    width: 45px;
    height: 30px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #FFCB65;
    font-size: 13px;
    margin-right: 15px;
`;

// 기간
const Period = styled.div`
    width: 125px;
    height: 30px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #FFCB65;
    font-size: 13px;
`;

// 그룹 챌린지 내용
const Contents = styled.div`
    width: 778px;
    display: flex;
    align-items: end;
    justify-content: space-between;
    
    & > span {
        font-size: 16px;
        font-weight: 300;
        color: #575757;
    }

    & > div {
        display: flex;
    }
`;

// 거절 버튼
const RejectBtn = styled.button`
    width: 45px;
    height: 28px;
    background-color: #D10000;
    margin-right: 15px;
    border: none;
    border-radius: 5px;
    font-size: 10px;
    font-weight: 500;
    color: white;
    cursor: pointer;
`;

// 수락 버튼
const AcceptBtn = styled.button`
    width: 45px;
    height: 28px;
    background-color: #0077E4;
    border: none;
    border-radius: 5px;
    font-size: 10px;
    font-weight: 500;
    color: white;
    cursor: pointer;
`;