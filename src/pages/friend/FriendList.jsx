import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function FriendList(props) {
    const [myProfile, setMyProfile] = useState();
    const [list, setList] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        axios.get('/api/friend-api/my-profile')
        .then(function (response) {
            setMyProfile(response.data)
        }).catch(
            (error) => console.log(error)
        );
    }, []);

    useEffect(() => {
        axios.get('/api/friend-api/friend-list' + search)
        .then(function (response) {
            setList(response.data)
        }).catch(
            (error) => console.log(error)
        );
    },[search]);

    const handleChange = (e) => {
        setSearch((e.target.value.length > 0) ? ("/" + e.target.value) : e.target.value);
    }

    return (
        <Wrapper>
            <Search>
                <input type="text" placeholder="검색하기" onChange={handleChange} />
                <FontAwesomeIcon icon = {faMagnifyingGlass} />
            </Search>
            <My> 내 프로필 </My>
            <MyProfile>
                <FriendProfilePicture>
                    <img src={myProfile && myProfile["profilePicture"]} alt="" />
                </FriendProfilePicture>
                <span> {myProfile && myProfile["nickname"]} </span>
            </MyProfile>
            <FriendCount> 모든 친구 - {list.length}명 </FriendCount>
            <List>
                {list.length > 0 ? list.map((value, index) => {
                    return(
                        <Friend key={index} id={value["memId"]} onClick={props.handleChange}>
                            <FriendProfilePicture>
                                <img src={value["profilePicture"]} alt="" />
                            </FriendProfilePicture>
                            <span> {value["nickname"]} </span>
                        </Friend>
                    );
                }) : 
                    <None>아직 친구가 없습니다. 친구를 추가해주세요.</None>
                }
            </List>
        </Wrapper>
    );
}

export default FriendList;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 372px;
`;

// 검색
const Search = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 750px;
    height: 40px;
    border: 1px solid #515151;
    border-radius: 5px;
    margin-top: 30px;

    & > input {
        width: 90%;
        height: 90%;
        text-align: center;
        font-size: 16px;
        background-color: none;
        border: none;
    }

    & > svg {
        position: absolute;
        left: 720px;
        color: #515151;
    }
`;

const My = styled.div`
    display: flex;
    align-items: center;
    width: 750px;
    height: 33px;
    border-bottom: 1px solid #B1B1B1;
    font-size: 15px;
    font-weight: bold;
    margin-top: 7px;
    padding-left: 7px;
`;

// 내 프로필
const MyProfile = styled.div`
    display: flex;
    align-items: center;
    width: 750px;
    height: 52px;

    & > span {
        font-size: 14px;
        margin-left: 22px;
    }
`;

// 모든 친구 - 친구수
const FriendCount = styled.div`
    display: flex;
    align-items: center;
    width: 750px;
    height: 29px;
    border-bottom: 1px solid #B1B1B1;
    font-size: 13px;
    margin-bottom: 5px;
    padding-left: 8px;
`;

// 친구 목록
const List = styled.div`
    width: 750px;
    height: 175px;
    overflow-y: scroll;

    ::-webkit-scrollbar {
        width: 0px;
    }
`;

// 각 친구 프로필
const Friend = styled.div`
    display: flex;
    align-items: center;
    width: 750px;
    height: 45px;
    border-bottom: 1px dashed #B1B1B1;
    cursor: pointer;

    & > span {
        font-size: 14px;
        margin-left: 22px;
    }
`;

// 친구가 없을 때
const None = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    font-size: 15px;
    color: #A4A4A4;
`;

// 내 프로필 사진 및 친구 프로필 사진
const FriendProfilePicture = styled.div`
    position: relative;
    width: 30px;
    height: 30px;
    margin-left: 8px;

    & > img {
        position: absolute;
        width: 30px;
        height: 30px;
        border: 1px solid #B1B1B1;
        border-radius: 20px;
        left: 7.5px;
    }
`;