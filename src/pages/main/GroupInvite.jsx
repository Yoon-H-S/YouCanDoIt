import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faUser } from '@fortawesome/free-solid-svg-icons';

import MainPage from 'pages/main/MainPage';
import PersonImg from 'assets/id.png';
import FootImg from 'assets/foot.png';

function GroupInvite(props) {
    const [isOpen, setIsOpen] = useState(false);
    const [groupProfile, setGroupProfile] = useState([]);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        axios.get('/api/group-api/group-invite', {
            params : {
                groupNumber: location.state.groupNumber
            }
        }).then(function (response) {
            setGroupProfile(response.data);
        }).catch(
            (error) => console.log(error)
        );
    }, []);

    const inviteResponse = (e) => {
        axios.get('/api/group-api/invite-response', {
            params : {
                groupNumber: location.state.groupNumber,
                response: e.target.id
            }
        }).then(function (response) {
            if(e.target.id === "true") {
                alert("그룹초대를 수락하였습니다.");
            } else {
                alert("그룹초대를 거절하였습니다.");
            }
            navigate("/");
        }).catch(
            (error) => console.log(error)
        );
    }
    
    if(groupProfile.length > 0) {
        return(
            <MainPage>
                <Header>
                    <Title>
                        <span>그룹 초대</span>
                        <Inviter><span>{groupProfile[1][0][0]}</span> 님이 초대하셨습니다.</Inviter>
                    </Title>
                    <Participant onClick={() => setIsOpen(!isOpen)}>
                        <span>{isOpen ? "접기" : "펼치기"}</span>
                        <FontAwesomeIcon icon={faChevronUp} rotation={isOpen ? 0 : 180} size="2xs" />
                    </Participant>
                    <ParticipantList isOpen={isOpen}>
                        <ListInner isOpen={isOpen}>
                            {groupProfile[1].map((value, index) => {
                                return(
                                    <Person key={index}>
                                        <div>
                                            <img src={value[1] === "1" || value[1] === "2" ? PersonImg : FootImg} alt="" />
                                            <span>{value[0]}</span>
                                        </div>
                                    </Person>
                                );
                            })}
                        </ListInner>
                    </ParticipantList>
                </Header>
                <GroupImage>
                    <img src={groupProfile[0]["groupImage"]} alt=""/>
                </GroupImage>
                <GroupInfo>
                    <div>
                        <Subject>{groupProfile[0]["groupSubject"]}</Subject>
                        <Name>{groupProfile[0]["groupName"]}</Name>
                        <FontAwesomeIcon icon={faUser} style={{color: "#adadad"}} />
                        <HeadCount>{groupProfile[1].length}명</HeadCount>
                    </div>
                    <div>
                        <Day>매일</Day>
                        <Period>
                            {groupProfile[0]["groupStartdate"].slice(5,7)}월 {groupProfile[0]["groupStartdate"].slice(8,10)}일 ~&nbsp;
                            {groupProfile[0]["groupEnddate"].slice(5,7)}월 {groupProfile[0]["groupEnddate"].slice(8,10)}일
                        </Period>
                    </div>
                </GroupInfo>
                <Contents>
                    <span>{groupProfile[0]["groupContents"]}</span>
                    <div>
                        <RejectBtn id="false" onClick={inviteResponse}>거절</RejectBtn>
                        <AcceptBtn id="true" onClick={inviteResponse}>수락</AcceptBtn>
                    </div>
                </Contents>
            </MainPage>
        );
    }
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
        width: 0px; 
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

    & > img {
        width: 100%;
        height: 100%;
    }
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
    width: max-content;
    height: 30px;
    padding: 0 12px;
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
    width: max-content;
    height: 30px;
    padding: 0 12px;
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
        width: 80%;
        height: 48px;
        font-size: 16px;
        font-weight: 300;
        color: #575757;
        white-space: pre-line;
        overflow-y: scroll;

        /*스크롤바의 너비*/
        ::-webkit-scrollbar {
            width: 0px; 
        }
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