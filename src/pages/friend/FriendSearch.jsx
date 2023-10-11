import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

function FriendSearch(props) {
    const [myId, setMyId] = useState();
    const [searchId, setSearchId] = useState("");
    const [searchResult, setSearchResult] = useState([]);
    const [isSearch, setIsSearch] = useState(false);

    useEffect(() => {
        axios.get('/api/friend-api/my-id')
        .then(function (response) {
            setMyId(response.data);
        }).catch(
            (error) => console.log(error)
        );
    },[]);

    const search = () => {
        axios.post('/api/friend-api/search-id', {
            friendId: searchId
        }).then(function (response) {
            setIsSearch(true);
            setSearchResult(response.data);
        }).catch(
            (error) => console.log(error)
        );
    }

    const addFriends = () => {
        axios.post('/api/friend-api/add-friend', {
            friendId: searchResult[1]["memId"]
        }).then(function (response) {
            alert("친구추가가 완료되었습니다.");
            setIsSearch(false);
            setSearchId('');
        }).catch(
            (error) => console.log(error)
        );
    }

    const xChange = () => {
        setSearchId("");
        setIsSearch(false);
    }

    const handleOnKeyPress = e => {
        if (e.key === 'Enter')
            search();
    };

    return (
        <Wrapper>
            <ID_CHECK>ID로 추가</ID_CHECK>
            <InputWrapper>
                <Input placeholder="친구 ID" value={searchId} onChange={(e) => setSearchId(e.target.value)} onKeyPress={handleOnKeyPress} />
                <FontAwesomeIcon icon={faXmark} onClick={xChange} />
                <Button onClick={search}>검색</Button>
            </InputWrapper>
            <Divider />
            {isSearch ?
                ( searchResult.length > 0 ?
                    <ResultBox>
                        <Profile>
                            <img src={searchResult[1]["profilePicture"]} alt="" />
                            <span>{searchResult[1]["nickname"]}</span>
                        </Profile>
                        {{
                            1 : <AddButton onClick={addFriends}>친구 추가</AddButton>,
                            2 : <ResultSpan>이미 등록된 친구입니다.</ResultSpan>,
                            3 : <ResultSpan>내 아이디 입니다.</ResultSpan>
                        }[searchResult[0]]}
                    </ResultBox>
                : 
                    <NullBox>존재하지 않는 아이디입니다.</NullBox>
                )
            : 
                <GrayBox>
                    <MyIDLabel>내 ID</MyIDLabel>
                    <MyIDLabel>{myId}</MyIDLabel> 
                </GrayBox>
            }
            
        </Wrapper>
    );
}

export default FriendSearch;

const Wrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: left;
    width: 736px;
    margin: 10px auto;
`;

const ID_CHECK = styled.div`
    font-weight: bold;
    margin-bottom: 10px;
    font-size: 16px;
`;

const InputWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 650px;
    height: 40px;
    border-bottom: 1px solid #B1B1B1;

    & > svg {
        position: absolute;
        right: 10px;
    }
`;

const Input = styled.input`
    width: 660px;
    height: 90%;
    font-size:13px;
    background-color: none;
    border: none;
    padding: 10px 0px 3px 8px;
`;

const Button = styled.button`
    width: 80px;
    height: 34px;
    border-radius: 5px;
    color: #FFFFFF;
    border: none;
    font-size: 13px;
    background-color: #0077E4;
    cursor: pointer;
`;

const Divider = styled.div`
    width: 740px;
    height: 1px;
    border-bottom: 1px dashed #B1B1B1;
    margin-top: 20px;
`;

const GrayBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 5px;
    background-color: #F4F4F4;
    border: 1px solid #B1B1B1;
    width: 740px;
    height: 35px;
    padding: 0 10px;
    margin-top: 20px;
    padding: 10px 11px 3px 8px;
`;

const MyIDLabel = styled.div`
    font-size: 13px;
    font-weight: 500;
    margin-bottom: 10px;
    color: #BABABA; 
`;

const ResultBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 5px;
    background-color: #F4F4F4;
    border: 1px solid #B1B1B1;
    width: 736px;
    height: 60px;
    padding: 0 35px;
    margin-top: 20px;
`;

const Profile = styled.div`
    display: flex;
    align-items: center;

    & > img {
        width: 30px;
        height: 30px;
        border: 1px solid #999999;
        border-radius: 30px;
    }

    & > span {
        font-size: 12px;
        margin-left: 20px;
    }
`;

const ResultSpan = styled.div`
    font-size: 10px;
    font-weight: bold;
    color: #BABABA;
`;

const AddButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 25.5px;
    background-color: #F8BA00;
    border-radius: 5px;
    border: none;
    font-size: 10px;
    font-weight: bold;
    cursor: pointer;
`;

const NullBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    background-color: #F4F4F4;
    border: 1px solid #B1B1B1;
    width: 736px;
    height: 60px;
    padding: 0 35px;
    margin-top: 20px;
    font-size: 16px;
    color: #BABABA;
`;