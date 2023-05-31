import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function GroupList(props) {
    const [list, setList] = useState([]);
    const [imgList, setImgList] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        var data = [];
        axios.get('/api/group-api/group-list' + search)
        .then(function (response) {
            data = response.data;
            if(response.data.length > 0) {
                var imgNumber = [];
                response.data.map((value) => {
                    imgNumber = [...imgNumber, value["groupNumber"]];
                });
                axios.get('/api/group-api/group-profile-picture', {
                    params : {
                        groupNumber:imgNumber
                    },
                    paramsSerializer: (paramObj) => {
                        const params = new URLSearchParams()
                        for (const key in paramObj) {
                            params.append(key, paramObj[key])
                        }
                        return params.toString()
                    }
                }).then(function (response) {
                    setImgList(response.data);
                }).catch(
                    (error) => console.log(error)
                ).then(function() {
                    setList(data);
                });
            } else {
                setList(data);
            }
        }).catch(
            (error) => console.log(error)
        );
    },[search]);

    const handleChange = (e) => {
        setSearch((e.target.value.length > 0) ? ("/" + e.target.value) : e.target.value);
    }

    return(
        <Wrapper>
            <Search>
                <input type="text" placeholder="검색하기" onChange={handleChange} />
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </Search>
            <GroupCount>모든 그룹 - {list.length}</GroupCount>
            <List>
                {list.length > 0 && list.map((value, index) => {
                    return(
                        <Group key={index} id={value["groupNumber"]} onClick={props.handleChange}>
                            <ProfilePicture headCount={value["groupHeadcount"]}>
                                {imgList.length > 0 && imgList[index].map((src, index) => {
                                    return <img src={src} alt="" key={index} />
                                })}
                            </ProfilePicture>
                            <span>{value["groupName"]}</span>
                        </Group>
                    );
                })}
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
    cursor: pointer;

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
        border: 1px solid #B1B1B1;
        border-radius: 20px;

        ${(props) => (
            props.headCount === 1 ? `
                width: 35px;
                height: 35px;
            ` : props.headCount === 2 ? `
                width: 25px;
                height: 25px;

                :nth-child(1) {
                    left: 0px;
                }

                :nth-child(2) {
                    bottom: 0px;
                    right: 0px;
                }
            ` : `
                width: 20px;
                height: 20px;

                :nth-child(1) {
                    left: 8px;
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
