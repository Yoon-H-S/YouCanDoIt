import React, { useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

function LoginPage(props) {
    const navigate = useNavigate();
    // 페이지가 마운트 되었을 때
    useEffect(() => {
        axios.get('/api/member-api/is-login')
        .then(function (response) {
            if(!(response.data === "")) {
                sessionStorage.setItem("loginName", response.data["nickname"]);
                sessionStorage.setItem("loginId", response.data["memId"]);
                navigate("/", {replace: true});
            }  
        }).catch(
            (error) => console.log(error)
        );
    }, []);

    return(
        <Wrapper>
            <Logo>유캔두잇</Logo>
            <MainContainer>
                <Outside>
                    <Inside>
                        {props.children}
                    </Inside>
                </Outside>
                <MenuList>
                    <Menu></Menu>
                    <Menu></Menu>
                    <Menu></Menu>
                </MenuList>
            </MainContainer>
        </Wrapper>
    );
}

export default LoginPage;

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
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`; 

// 주메뉴
const MenuList = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 40px;
`; 

// 각 메뉴 개체
const Menu = styled.div`
    width: 87px;
    height: 50px;
    font-size: 18px;
    line-height: 50px;
    text-align: center;
    background-color: var(--primary-color);
    border-radius: 0 10px 10px 0;
    margin: 10px 0;
`;