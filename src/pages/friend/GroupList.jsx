import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import Profile1 from 'assets/testImg/profile1.png';
import Profile2 from 'assets/testImg/profile2.png';
import Profile3 from 'assets/testImg/profile3.png';

function GroupList(props) {
    return(
        <Wrapper>
            <Search>
                <input type="text" placeholder="검색하기" />
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </Search>
            <GroupCount>모든 그룹 - 10</GroupCount>
            <List>
                <Group>
                    <ProfilePicture>
                        <img src={Profile1} alt="" />
                        <img src={Profile2} alt="" />
                        <img src={Profile3} alt="" />
                    </ProfilePicture>
                    <span>갓생살조</span>
                </Group>
                <Group>
                    <ProfilePicture>
                        <img src={Profile1} alt="" />
                        <img src={Profile2} alt="" />
                        <img src={Profile3} alt="" />
                    </ProfilePicture>
                    <span>아침형 그룹</span>
                </Group>
                <Group>
                    <ProfilePicture>
                        <img src={Profile1} alt="" />
                        <img src={Profile2} alt="" />
                        <img src={Profile3} alt="" />
                    </ProfilePicture>
                    <span>G_T_F</span>
                </Group>
                <Group>
                    <ProfilePicture>
                        <img src={Profile1} alt="" />
                        <img src={Profile2} alt="" />
                        <img src={Profile3} alt="" />
                    </ProfilePicture>
                    <span>건강 챙기자</span>
                </Group>
                <Group>
                    <ProfilePicture>
                        <img src={Profile1} alt="" />
                        <img src={Profile2} alt="" />
                        <img src={Profile3} alt="" />
                    </ProfilePicture>
                    <span>Y.C.D.I</span>
                </Group>
                <Group>
                    <ProfilePicture>
                        <img src={Profile1} alt="" />
                        <img src={Profile2} alt="" />
                        <img src={Profile3} alt="" />
                    </ProfilePicture>
                    <span>너.뭐.못</span>
                </Group>
                <Group>
                    <ProfilePicture>
                        <img src={Profile1} alt="" />
                        <img src={Profile2} alt="" />
                        <img src={Profile3} alt="" />
                    </ProfilePicture>
                    <span>Best_W</span>
                </Group>
                <Group>
                    <ProfilePicture>
                        <img src={Profile1} alt="" />
                        <img src={Profile2} alt="" />
                        <img src={Profile3} alt="" />
                    </ProfilePicture>
                    <span>WWW</span>
                </Group>
                <Group>
                    <ProfilePicture>
                        <img src={Profile1} alt="" />
                        <img src={Profile2} alt="" />
                        <img src={Profile3} alt="" />
                    </ProfilePicture>
                    <span>Happy_W</span>
                </Group>
                <Group>
                    <ProfilePicture>
                        <img src={Profile1} alt="" />
                        <img src={Profile2} alt="" />
                        <img src={Profile3} alt="" />
                    </ProfilePicture>
                    <span>구구콘</span>
                </Group>
                <Group>
                    <ProfilePicture>
                        <img src={Profile1} alt="" />
                        <img src={Profile2} alt="" />
                        <img src={Profile3} alt="" />
                    </ProfilePicture>
                    <span>그룹 10</span>
                </Group>
            </List>
        </Wrapper>
    );
}

export default GroupList;

// 그룹목록의 틀
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 372px;
`;

// 검색 영역
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

// 모든 그룹 - 그룹수가 나오는 영역
const GroupCount = styled.div`
    display: flex;
    align-items: center;
    width: 750px;
    height: 35px;
    border-bottom: 1px solid #B1B1B1;
    font-size: 13px;
    margin-top: 6px;
    padding-left: 8px;
`;

// 그룹 목록
const List = styled.div`
    width: 750px;
    height: 261px;
    overflow-y: scroll;

    /*스크롤바의 너비*/
    ::-webkit-scrollbar {
        width: 0px;
    }
`;

// 각 그룹 프로필
const Group = styled.div`
    display: flex;
    align-items: center;
    width: 750px;
    height: 55px;
    border-bottom: 1px dashed #B1B1B1;

    & > span {
        font-size: 15px;
        font-weight: 500;
        margin-left: 22px;
    }
`;

// 그룹의 프로필사진
const ProfilePicture = styled.div`
    position: relative;
    width: 35px;
    height: 35px;
    margin-left: 8px;

    & > img {
        position: absolute;
        width: 20px;
        height: 20px;
        border: 1px solid #B1B1B1;
        border-radius: 20px;

        :nth-child(1) {
            left: 7.5px;
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
