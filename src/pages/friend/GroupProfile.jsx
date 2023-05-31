import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

function GroupProfile(props) {
    const groupNumber = props.groupNumber;
    const [groupProfile, setGroupProfile] = useState([]);
    const [isInfo, setIsInfo] = useState(false);

    useEffect(() => {
        axios.get('/api/group-api/group-profile', {
            params : {
                groupNumber:groupNumber
            }
        }).then(function (response) {
            setGroupProfile(response.data);
            setIsInfo(false);
        }).catch(
            (error) => console.log(error)
        );
    },[groupNumber]);

    if(groupProfile.length > 0) {
        return(
            <Wrapper>
                <Background />
                <ProfilePicture headCount={groupProfile[0]["groupHeadcount"]}>
                    {groupProfile[2].map((src, index) => {
                        return <img src={src} alt="" key={index} />
                    })}
                </ProfilePicture>
                <Name>{groupProfile[0]["groupName"]}</Name>
                <MemberContainer isInfo={isInfo}>
                    <ToggleBar onClick={() => setIsInfo(!isInfo)}>
                        <span>그룹 멤버</span>
                        <FontAwesomeIcon icon={faChevronUp} rotation={isInfo ? 180 : 0} size="2xs" style={{color: "black",}} />
                    </ToggleBar>
                    <MemberList>
                        {groupProfile[1].map((value, index) => {
                            return(
                                <Member key={index} id={value["memId"]} onClick={props.handleChange}>
                                    <img src={value["profilePicture"]} alt="" />
                                    <span>{value["nickname"]}</span>
                                </Member>
                            );
                        })}
                    </MemberList>
                </MemberContainer>
                <InfoContainer isInfo={isInfo}>
                    <ToggleBar onClick={() => setIsInfo(!isInfo)}>
                        <span>상세 내용</span>
                        <FontAwesomeIcon icon={faChevronUp} rotation={isInfo ? 0 : 180} size="2xs" style={{color: "black",}} />
                    </ToggleBar>
                    <Info>
                        <Image>
                            <img src={groupProfile[0]["groupImage"]} alt="" />
                        </Image>
                        <Subject>
                            <span>{groupProfile[0]["groupSubject"]}</span>
                            <div>매일</div>
                        </Subject>
                        <Period>
                            {groupProfile[0]["groupStartdate"].slice(5,7)}월 {groupProfile[0]["groupStartdate"].slice(8,10)}일 ~&nbsp;
                            {groupProfile[0]["groupEnddate"].slice(5,7)}월 {groupProfile[0]["groupEnddate"].slice(8,10)}일
                        </Period>
                        <Content>{groupProfile[0]["groupContents"]}</Content>
                    </Info>
                </InfoContainer>
            </Wrapper>
        );
    }
    
}

export default GroupProfile;

// 그룹프로필의 틀
const Wrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 422px;
`;

// 파란 배경 영역
const Background = styled.div`
    width: 287px;
    height: 122px;
    background-color: #A1CCFF;
    border-bottom: 1px solid #B1B1B1;
`;

// 그룹의 프로필사진
const ProfilePicture = styled.div`
    position: absolute;
    left: 36px;
    top: 100px;
    width: 45px;
    height: 45px;

    & > img {
        position: absolute;
        border: 1px solid #B1B1B1;
        border-radius: 20px;

        ${(props) => (
            props.headCount === 1 ? `
                width: 40px;
                height: 40px;
            ` : props.headCount === 2 ? `
                width: 32px;
                height: 32px;

                :nth-child(1) {
                    left: 0px;
                }

                :nth-child(2) {
                    bottom: 0px;
                    right: 0px;
                }
            ` : `
                width: 26px;
                height: 26px;

                :nth-child(1) {
                    left: 10px;
                }

                :nth-child(2) {
                    bottom: 0px;
                }

                :nth-child(3) {
                    bottom: 0px;
                    right: 0px;
                }
            `
        )}
    }
`;

// 그룹명
const Name = styled.div`
    width: 239px;
    padding-left: 7px;
    margin: 29px 0 13px;
    font-size: 15px;
    font-weight: bold;
`;

// 그룹 멤버
const MemberContainer = styled.div`
    width: 239px;
    height: 168px;
    border: 1px solid #B1B1B1;
    border-radius: 10px;
    margin-bottom: 10px;
    overflow-y: hidden;
    transition: 0.5s;

    ${(props) => (
        props.isInfo && `
            height: 34px;
        `
    )}
`;

// 클릭하여 열고 닫을 수 있는 영역
const ToggleBar = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 34px;
    padding: 0 18px;
    border-bottom: 1px solid #B1B1B1;

    cursor: pointer;

    & > span {
        font-size: 11px;
        margin-right: 7px;
    }
`;

// 멤버 리스트
const MemberList = styled.div`
    width: 100%;
    height: 134px;
    padding: 12px 19px;
    overflow-y: scroll;

    /*스크롤바의 너비*/
    ::-webkit-scrollbar {
        width: 0px;
    }
`;

// 각 멤버
const Member = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;

    & > img {
        width: 18px;
        height: 18px;
        border: 1px solid #999999;
        border-radius: 18px;
        margin-right: 8px;
    }

    & > span {
        position : relative;
        top: -1px;
        font-size: 10px;
    }

    :not(:last-child) {
        margin-bottom: 8px;
    }
`;

// 그룹 상세 내용
const InfoContainer = styled.div`
    width: 239px;
    height: 168px;
    border: 1px solid #B1B1B1;
    border-radius: 10px;
    margin-bottom: 10px;
    overflow-y: hidden;
    transition: 0.5s;

    ${(props) => (
        !props.isInfo && `
            height: 34px;
        `
    )}
`;

// 그룹 정보가 표시되는 영역
const Info = styled.div`
    width: 100%;
    height: 134px;
    padding: 10px 14px;
    overflow-y: scroll;

    /*스크롤바의 너비*/
    ::-webkit-scrollbar {
        width: 0px;
    }
`;

// 그룹의 챌린지 이미지
const Image = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 209px;
    height: 50px;
    border-radius: 10px;
    overflow: hidden;
    
    & > img {
        width: 100%;
        height: 100%;
    }
`;

// 주제
const Subject = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 209px;
    height: 28px;
    border-bottom: 1px solid #E7E7E7;

    & > span {
        font-size: 10px;
        font-weight: bold;
    }

    & > div {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 27px;
        height: 18px;
        border-radius: 5px;
        background-color: #FFCB65;
        font-size: 10px;
    }
`;

// 기간
const Period = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: max-content;
    height: 18px;
    background-color: #FFCB65;
    border-radius: 5px;
    margin: 7px 0;
    padding: 0 6px;
    font-size: 10px;
`;

// 내용
const Content = styled.div`
    width: 209px;
    font-size: 10px;
    font-weight: 300;
    color: #575757;
    white-space: pre-line;
`;