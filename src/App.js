import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import styled from 'styled-components';

import GlobalStyle from 'styles/GlobalStyle';
import Login from 'pages/login/Login';
import SignUp from 'pages/login/SignUp';
import FindId from 'pages/login/FindId';
import FindPw from 'pages/login/FindPw';
import FindIdResult from 'pages/login/FindIdResult';
import PwReset from 'pages/login/PwReset';
import Redirection from 'pages/login/Redirection';
import SnsSignUp from 'pages/login/SnsSignUp';
import Main from 'pages/main/Main';
import GroupInvite from 'pages/main/GroupInvite';
// import ChallengePage from 'pages/challenge/ChallengePage';
import FriendPage from 'pages/friend/FriendPage';

function App(props) {
    return(
        <BrowserRouter>
            <GlobalStyle />
            <Wrapper>
                <Routes>
                    <Route index element={<Main />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/login/signUp" element={<SignUp />} />
                    <Route path="/login/findId" element={<FindId />} />
                    <Route path="/login/findId/result" element={<FindIdResult />} />
                    <Route path="/login/findPw" element={<FindPw />} />
                    <Route path="/login/findPw/reset" element={<PwReset />} />
                    <Route path='/callback/:registrationId' element={<Redirection />} />
                    <Route path="/login/snsSignUp" element={<SnsSignUp />} />
                    <Route path="/groupInvite" element={<GroupInvite />} />
                    {/* <Route path="/challenge" element={<ChallengePage />} /> */}
                    <Route path="/friend" element={<FriendPage />} />
                </Routes>
            </Wrapper>
        </BrowserRouter>
    );
}

export default App;

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
