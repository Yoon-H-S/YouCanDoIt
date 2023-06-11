import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';

import Reminder from 'assets/reminder.png';


function Page(props) {
    const navigate = useNavigate();
    const location = useLocation();
    const [path, setPath] = useState(0);
    // 페이지가 마운트 되었을 때
    useEffect(() => {
        axios.get('/api/member-api/is-login')
        .then(function (response) {
            if(response.data === "") {
                sessionStorage.clear();
                navigate("/login");
            } else if(sessionStorage.getItem("loginName") === "") {
                sessionStorage.setItem("loginName", response.data["nickname"]);
                sessionStorage.setItem("loginId", response.data["memId"]);
            }
        }).catch(
            (error) => console.log(error)
        );
        
        if(location.pathname.startsWith("/challenge")) {
            setPath(1);
        } else if(location.pathname.startsWith("/friend")) {
            setPath(3);
        }
    }, []);

    const Logout = () => {
        axios.get('/api/member-api/logout')
        .then(function (response) {
            sessionStorage.clear();
            navigate("/login");
        }).catch(
            (error) => console.log(error)
        );
    }    

    return(
        <Wrapper>
            <Logo onClick={() => navigate("/")}>유캔두잇</Logo>
            <MainContainer>
                <Outside>
                    <UserService>
                        <div>
                            {sessionStorage.getItem("loginName")}
                            <span onClick={Logout}>로그아웃</span>
                        </div>
                        <img src={Reminder} alt="" />
                    </UserService>
                    <Inside>
                        {props.children}
                    </Inside>
                </Outside>
                <MenuList>
                    <Menu id={1} path={path} onClick={() => navigate("/challenge")}>챌린지</Menu>
                    <Menu id={2} path={path}>스케줄러</Menu>
                    <Menu id={3} path={path} onClick={() => navigate("/friend")}>친구</Menu>
                </MenuList>
            </MainContainer>
        </Wrapper>
    );
}

export default Page;

// 기본 틀
export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

// 상단 서비스명
const Logo = styled.div`
    height: 55px;
    width: 194px;
    position: relative;
    left: 1110px;
    font-size: 22px;
    font-weight: bold;
    text-align: center;
    line-height: 55px;
    background-color: #F8BA00;
    border-radius: 10px 10px 0 0;
    cursor: default;
`;

// 다이어리와 주메뉴 영역
const MainContainer = styled.div`
    display: flex;
    flex-direction: row;
`; 

// 다이어리
const Outside = styled.div`
    width: 1363px;
    height: 603px;
    background-color: #EFEFEF;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

// 실제 콘텐츠가 삽입되는 영역
export const Inside = styled.div`
    width: 1283px;
    height: 508px;
    background-color: #D9D9D9;
    display: flex;
    align-items: center;
    justify-content: center;
`; 

// 주메뉴
const MenuList = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    margin-top: 50px;
`; 

// 각 메뉴 개체
const Menu = styled.div`
    position: absolute;
    top: ${(props) => props.id*70-70}px;
    width: 87px;
    height: 50px;
    font-size: 18px;
    line-height: 50px;
    text-align: center;
    background-color: var(--primary-color);
    border-radius: 0 10px 10px 0;
    cursor: pointer;

    ${(props) => (
        props.id === props.path && `
            left: -20px;
            width: 107px;
            background-color: #DCA600;
            font-weight: bold;
            color: white;
        `
    )}
`;

// 닉네임, 로그아웃, 리마인더가 표시되는 영역
const UserService = styled.div`
    position:absolute;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 1283px;
    height: 24px;
    top: 11px;
    font-size: 16px;
    font-weight: bold;

    div {
        display: flex;
        align-items: center;

        span {
        margin-left: 25px;
        font-size: 13px;
        font-weight: 400;
        cursor: pointer;
        }
    }

    img {
        width: 16px;
        height: 16px;
        margin-right: 4px;
    }
`;