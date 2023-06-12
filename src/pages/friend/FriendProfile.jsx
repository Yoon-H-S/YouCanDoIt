import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

function GroupProfile(props) {
    const memId = props.memId;
    const [friendProfile, setFriendProfile] = useState([]);

    useEffect(() => {
        axios.post('/api/friend-api/friend-profile', {
            "friendId": memId
        }).then(function (response) {
            setFriendProfile(response.data);
            console.log(response.data);
        }).catch(
            (error) => console.log(error)
        );
    },[memId]);

    if(friendProfile.length > 0) {
        return(
            <Wrapper>
                <Background />
                <FriendProfilePicture>
                    <img src={friendProfile[0]["profilePicture"]} alt="" />
                </FriendProfilePicture>
                <Name> {friendProfile[0]["nickname"]} </Name>
                <Groupparticipate>
                    <AllGroupList>
                        <span> 같이 있는 그룹 </span>
                    </AllGroupList>
                    <GroupList>
                        {friendProfile[1].length > 0 ? friendProfile[1].map((value, index) => {
                            return(
                                <Group key={index} id={value[0]} onClick={props.handleChange}>
                                    <span> • {value[1]} </span>
                                </Group>
                            );
                        }) : 
                            <None>친구와 같이 있는 그룹이 없습니다.<br />그룹을 생성해 친구를 초대하세요!</None>
                        }
                    </GroupList>
                </Groupparticipate>
            </Wrapper>
        );
    }
    
}

export default GroupProfile;

const Wrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 422px;
`;

// 노란 배경 영역
const Background = styled.div`
    width: 287px;
    height: 122px;
    background-color: #FFF066;
    border-bottom: 1px solid #B1B1B1;
`;

// 친구 프로필 사진
const FriendProfilePicture = styled.div`
    position: absolute;
    left: 38px;
    top: 103px;

    & > img {
        position: absolute;
        width: 38px;
        height: 38px;
        border: 1px solid #B1B1B1;
        border-radius: 20px;
    }
`;

// 친구 이름
const Name = styled.div`
    width: 239px;
    padding-left: 13px;
    margin: 29px 0 13px;
    font-size: 15px;
    font-weight: bold;
`;

const Groupparticipate = styled.div`
    width: 239px;
    height: 212px;
    border: 1px solid #B1B1B1;
    border-radius: 10px;
`;

// 같이 있는 그룹 상단틀
const AllGroupList = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 34px;
    padding: 0 18px;
    border-bottom: 1px solid #B1B1B1;
    font-size: 11px;
`;

// 참여 그룹 리스트
const GroupList = styled.div`
    width: 100%;
    height: 176px;
    padding: 13px 26px;
    overflow-y: scroll;

    ::-webkit-scrollbar {
        width: 0px;
    }
`;

// 각 그룹명
const Group = styled.div`
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

// 친구가 같이 속한 그룹이 없을 때
const None = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 100%;
    height: 100%;
    font-size: 13px;
    color: #A4A4A4;
`;