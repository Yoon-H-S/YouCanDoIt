import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

import Profile1 from 'assets/testImg/profile1.png';
import Profile2 from 'assets/testImg/profile2.png';
import Profile3 from 'assets/testImg/profile3.png';
import groupImg from 'assets/testImg/groupbig.png';

function GroupProfile(props) {
    const [isInfo, setIsInfo] = useState(false);

    return(
        <Wrapper>
            <Background />
            <ProfilePicture>
                <img src={Profile1} alt="" />
                <img src={Profile2} alt="" />
                <img src={Profile3} alt="" />
            </ProfilePicture>
            <Name>갓생살조</Name>
            <MemberContainer height={50+(26*7)} isInfo={isInfo}>
                <ToggleBar onClick={() => setIsInfo(!isInfo)}>
                    <span>그룹 멤버</span>
                    <FontAwesomeIcon icon={faChevronUp} rotation={isInfo ? 180 : 0} size="2xs" style={{color: "black",}} />
                </ToggleBar>
                <MemberList>
                    <Member>
                        <img src={Profile1} alt="" />
                        <span>김시은</span>
                    </Member>
                    <Member>
                        <img src={Profile2} alt="" />
                        <span>강지연</span>
                    </Member>
                    <Member>
                        <img src={Profile3} alt="" />
                        <span>김혜나</span>
                    </Member>
                    <Member>
                        <img src={Profile1} alt="" />
                        <span>이혜리</span>
                    </Member>
                    <Member>
                        <img src={Profile2} alt="" />
                        <span>박보검</span>
                    </Member>
                    <Member>
                        <img src={Profile3} alt="" />
                        <span>이지은</span>
                    </Member>
                    <Member>
                        <img src={Profile1} alt="" />
                        <span>이동혁</span>
                    </Member>
                </MemberList>
            </MemberContainer>
            <InfoContainer isInfo={isInfo}>
                <ToggleBar onClick={() => setIsInfo(!isInfo)}>
                    <span>상세 내용</span>
                    <FontAwesomeIcon icon={faChevronUp} rotation={isInfo ? 0 : 180} size="2xs" style={{color: "black",}} />
                </ToggleBar>
                <Info>
                    <Image>
                        <img src={groupImg} alt="" />
                    </Image>
                    <Subject>
                        <span>(한 달) 매일 만보 이상 걷기</span>
                        <div>매일</div>
                    </Subject>
                    <Period>4월 7일 ~ 5월 7일</Period>
                    <Content>건강 챙기기 프로젝트!<br />하루에 10,000보씩 한 달 동안 매일매일 걸어보자 꾸준히 하면 건강 챙길 수 있다!</Content>
                </Info>
            </InfoContainer>
        </Wrapper>
    );
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
    overflow-y: scroll;

    /*스크롤바의 너비*/
    ::-webkit-scrollbar {
        width: 0px;
    }
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
        width: 26px;
        height: 26px;
        border: 1px solid #B1B1B1;
        border-radius: 20px;

        :nth-child(1) {
            left: 9.5px;
        }

        :nth-child(2) {
            bottom: 0px;
        }

        :nth-child(3) {
            bottom: 0px;
            right: 0px;
        }
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
    height: ${(props) => props.height}px;
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
    margin: 12px 19px;
`;

// 각 멤버
const Member = styled.div`
    display: flex;
    align-items: center;

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
    max-height: 250px;
    border: 1px solid #B1B1B1;
    border-radius: 10px;
    margin-bottom: 10px;
    overflow-y: hidden;
    transition: 0.5s;

    ${(props) => (
        !props.isInfo && `
            max-height: 34px;
        `
    )}
`;

// 그룹 정보가 표시되는 영역
const Info = styled.div`
    margin: 10px 15px;
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

const Period = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 87px;
    height: 18px;
    background-color: #FFCB65;
    border-radius: 5px;
    margin: 7px 0;
    font-size: 10px;
`;

const Content = styled.div`
    width: 209px;
    font-size: 10px;
    font-weight: 300;
    color: #575757;
`;