import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import Profile1 from 'assets/testImg/profile1.png';

function FriendList(props) {
    return (
        <Wrapper>
            <Search>
                <input type="text" placeholder="검색하기" />
                <FontAwesomeIcon icon = {faMagnifyingGlass} />
            </Search>
            <My> 내 프로필 </My>
            <MyProfile>
                <FriendProfilePicture>
                    <img src={Profile1} alt="" />
                </FriendProfilePicture>
                <span> 강지연 </span>
            </MyProfile>
            <FriendCount> 모든 친구 - 15명 </FriendCount>
            <List>
                <Friend>
                    <FriendProfilePicture>
                        <img src={Profile1} alt="" />
                    </FriendProfilePicture>
                    <span> 김시은 </span>
                </Friend>
                <Friend>
                    <FriendProfilePicture>
                        <img src={Profile1} alt="" />
                    </FriendProfilePicture>
                    <span> 김우석 </span>
                </Friend>
                <Friend>
                    <FriendProfilePicture>
                        <img src={Profile1} alt="" />
                    </FriendProfilePicture>
                    <span> 김혜나 </span>
                </Friend>
                <Friend>
                    <FriendProfilePicture>
                        <img src={Profile1} alt="" />
                    </FriendProfilePicture>
                    <span> 린 </span>
                </Friend>
                <Friend>
                    <FriendProfilePicture>
                        <img src={Profile1} alt="" />
                    </FriendProfilePicture>
                    <span> 박보검 </span>
                </Friend>
                <Friend>
                    <FriendProfilePicture>
                        <img src={Profile1} alt="" />
                    </FriendProfilePicture>
                    <span> 손나은 </span>
                </Friend>
                <Friend>
                    <FriendProfilePicture>
                        <img src={Profile1} alt="" />
                    </FriendProfilePicture>
                    <span> 이동혁 </span>
                </Friend>
                <Friend>
                    <FriendProfilePicture>
                        <img src={Profile1} alt="" />
                    </FriendProfilePicture>
                    <span> 이지은 </span>
                </Friend>
                <Friend>
                    <FriendProfilePicture>
                        <img src={Profile1} alt="" />
                    </FriendProfilePicture>
                    <span> 이혜리 </span>
                </Friend>
                <Friend>
                    <FriendProfilePicture>
                        <img src={Profile1} alt="" />
                    </FriendProfilePicture>
                    <span> JJ </span>
                </Friend>
                <Friend>
                    <FriendProfilePicture>
                        <img src={Profile1} alt="" />
                    </FriendProfilePicture>
                    <span> 친구1 </span>
                </Friend>
                <Friend>
                    <FriendProfilePicture>
                        <img src={Profile1} alt="" />
                    </FriendProfilePicture>
                    <span> 친구2 </span>
                </Friend>
                <Friend>
                    <FriendProfilePicture>
                        <img src={Profile1} alt="" />
                    </FriendProfilePicture>
                    <span> 친구3 </span>
                </Friend>
                <Friend>
                    <FriendProfilePicture>
                        <img src={Profile1} alt="" />
                    </FriendProfilePicture>
                    <span> 친구4 </span>
                </Friend>
                <Friend>
                    <FriendProfilePicture>
                        <img src={Profile1} alt="" />
                    </FriendProfilePicture>
                    <span> 친구5 </span>
                </Friend>
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

    & > span {
        font-size: 14px;
        margin-left: 22px;
    }
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