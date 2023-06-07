
import React, { useState } from 'react';
import Page from 'pages/Page';
import styled from 'styled-components';
import FriendSearch from './FriendSearch';

function FriendPage(props) {
    const [menuNum, setMenuNum] = useState(1);
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
                <FriendSearch />
            </LeftContent>
            <MiddleLine />
            <RightContent>

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