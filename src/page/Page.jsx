import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"; 
import styled from "styled-components";
import Login from "./login/Login";
import FindId from "./login/FindId";
import FindPw from "./login/FindPw";

function Page(props) {
    return(
        <BrowserRouter>
            <Wrapper>
                <Logo>유캔두잇</Logo>
                <MainContainer>
                    <Outside>
                        <Inside>
                            <Routes>
                                <Route index element={<Login />}/>
                                <Route path="findId" element={<FindId />}/>
                                <Route path="findPw" element={<FindPw />}/>
                            </Routes>
                        </Inside>
                    </Outside>
                    <MenuList>
                        <Menu/>
                        <Menu/>
                        <Menu/>
                    </MenuList>
                </MainContainer>
            </Wrapper>
        </BrowserRouter>
    );
}

export default Page;

// 콘텐츠 영역 틀
const Wrapper = styled.div`
    width: 1450px;
    height: 650px;
    display: flex;
    flex-direction: column;
    position: relative;
    left: 25px;
    bottom: 10px;
`;

const Logo = styled.div`
    height: 47px;
    width: 194px;
    position: relative;
    left: 1110px;
    font-size: 22px;
    font-weight: bold;
    text-align: center;
    line-height: 47px;
    background-color: #fff066;
    border-radius: 10px 10px 0 0;
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
    background-color: #fff066;
    border-radius: 0 10px 10px 0;
    margin: 10px 0;
`; 