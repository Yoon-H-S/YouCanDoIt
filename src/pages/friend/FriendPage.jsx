import React, { useState } from 'react';
import Page from 'pages/Page';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeftLong } from '@fortawesome/free-solid-svg-icons';

import FriendList from './FriendList';
import GroupList from './GroupList';
import FriendProfile from './FriendProfile';
import GroupProfile from './GroupProfile';
import FriendSearch from './FriendSearch';

function FriendPage(props) {
    const loginId = sessionStorage.getItem("loginId");
    const [menuNum, setMenuNum] = useState(1);
    const [subMenuNum, setSubMenuNum] = useState(0);
    const [memId, setMemId] = useState();
    const [groupNumber, setGroupNumber] = useState();

    const GNChange = (e) => {
        setGroupNumber(e.currentTarget.id);
        setSubMenuNum(2);
    }

    const IDChange = (e) => {
        if(loginId !== e.currentTarget.id) {
            setMemId(e.currentTarget.id);
            setSubMenuNum(1);
        }
    }

    return(
        <Page>
            <LeftContent>
                <SubMenuBar>
                    <Title>친구</Title>
                    <SubMenu menuNum={menuNum}>
                        <li onClick={() => setMenuNum(1)}>친구목록</li>
                        <li onClick={() => setMenuNum(2)}>그룹목록</li>
                        <li onClick={() => setMenuNum(3)}>친구추가</li>
                    </SubMenu>
                </SubMenuBar>
                {{
                    1 : <FriendList handleChange={IDChange} />,
                    2 : <GroupList handleChange={GNChange} />,
                    3 : <FriendSearch />
                }[menuNum]}
            </LeftContent>
            <MiddleLine />
            <RightContent>
                {{
                    0 : <NoneClick>
                            <div>'<span>친구</span> 또는 <span>그룹</span>'을 선택하여<br />정보를 확인해주세요.</div>
                            <FontAwesomeIcon icon={faLeftLong} size="xl" />
                        </NoneClick>,
                    1 : <FriendProfile memId={memId} handleChange={GNChange} />,
                    2 : <GroupProfile groupNumber={groupNumber} handleChange={IDChange} />
                }[subMenuNum]}
            </RightContent>
        </Page>
    );
}

export default FriendPage;

// 좌측 페이지 영역
const LeftContent = styled.div`
    width: 824px;
    height: 422px;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

// 친구페이지의 상단 메뉴영역
const SubMenuBar = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    background-color: #DCA600;
`;

// 친구페이지의 타이틀
const Title = styled.div`
    font-size: 20px;
    font-weight: bold;
    color: white;
    margin-left: 33px;
`;

// 친구페이지의 메뉴
const SubMenu = styled.ul`
    display: flex;
    list-style: none;
    font-size: 15px;
    color: white;
    margin-left: 36px;

    & > li {
        cursor: pointer;
        margin-right: 26px;

        :nth-child(${(props) => props.menuNum}) {
            font-weight: bold;
            color: #823E00;
        }
    }
`;

// 중간 라인
const MiddleLine = styled.div`
    width: 0px;
    height: 422px;
    border-left: 1px solid black;
    margin-left: 43px;
    margin-right: 43px;
`;

// 우측 페이지 영역
const RightContent = styled.div`
    width: 287px;
    height: 422px;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

// 우측 페이지 영역 아무것도 선택하지 않았을 때
const NoneClick = styled.div`
    width: 239px;
    height: 374px;
    border: 1px solid #B1B1B1;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    & > div {
        text-align: center;
        font-size: 15px;
        color: #A4A4A4;
        margin-bottom: 6px;

        & > span {
            font-weight: bold;
            color: #838383;
        }
    }
`;