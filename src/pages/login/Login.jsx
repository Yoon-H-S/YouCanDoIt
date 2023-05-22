// 외부 import
import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
// 내부 import
import Page from 'pages/login/LoginPage';
import { Title } from 'styles/login/LoginStyled';
import idIcon from 'assets/id.png';
import pwIcon from 'assets/pw.png';
import naverIcon from 'assets/naver.png';
import googleIcon from 'assets/google.png';
import kakaoIcon from 'assets/kakao.png';

function Login(props) {
    const navigate = useNavigate();
    const [memId, setMemId] = useState(localStorage.getItem("memId") ? localStorage.getItem("memId") : "");
    const [password, setPassword] = useState();
    const [isRememberId, setIsRememberId] = useState(localStorage.getItem("memId") ? true : false);

    const idChange = (e) => {
        setMemId(e.target.value);
    };

    const pwChange = (e) => {
        setPassword(e.target.value);
    }

    const checkChange = () => {
        setIsRememberId(!isRememberId);
    }

    const handleOnKeyPress = e => {
        if (e.key === 'Enter')
            SignIn();
    };

    const SignIn = () => {
        if(memId && password) {
            axios.post('/api/member-api/login', {
                "memId":memId,
                "password":password,
                "memClass":"1"
            }).then(function (response) {
                if(response.data === "") {
                    alert("아이디 혹은 비밀번호가 잘못 되었습니다.");
                } else {
                    isRememberId ? localStorage.setItem("memId", memId) : localStorage.clear();
                    sessionStorage.setItem("loginName", response.data);
                    navigate("/");
                }
                
            }).catch(
                (error) => console.log(error)
            );
        } else {
            alert("아이디와 비밀번호를 입력해주세요!");
        }
    };

    const NaverLogin = () => {
        window.location.href = "https://nid.naver.com/oauth2.0/authorize?" +
            "client_id=9njVYwPF18upeN3u0uRv&response_type=code&state=ycdi&" +
            "redirect_uri=http://ycdi.cafe24.com/callback/naver";
    }

    const GoogleLogin = () => {
        window.location.href = "https://accounts.google.com/o/oauth2/auth?" +
            "client_id=582510091131-4ghgiaddn1jegvujtt02tho76rnhteji.apps.googleusercontent.com&" +
            "redirect_uri=http://ycdi.cafe24.com/callback/google&response_type=code&" +
            "scope=https://www.googleapis.com/auth/userinfo.email";
    }

    const KakaoLogin = () => {
        window.location.href = "https://kauth.kakao.com/oauth/authorize?" +
            "client_id=4187ebbd43c8a7f193e998b3b79f3b8d&" +
            "redirect_uri=http://ycdi.cafe24.com/callback/kakao&response_type=code";
    }

    return(
        <Page>
            <Title>로그인</Title>
            <StyledInput>
                <img src={idIcon} alt="idImg"/>
                <input type="text" placeholder="아이디를 입력해주세요." value={memId} onChange={idChange} onKeyPress={handleOnKeyPress} />
            </StyledInput>
            <StyledInput>
                <img src={pwIcon} alt="pwImg"/>
                <input type="password" placeholder="비밀번호를 입력해주세요." onChange={pwChange} onKeyPress={handleOnKeyPress} />
            </StyledInput>
            <RememberId>
                <input type="checkbox" id="rememberId" onChange={checkChange} checked={isRememberId} />
                <label htmlFor="rememberId">아이디 저장</label>
            </RememberId>
            <LoginButton onClick={SignIn}>로그인</LoginButton>
            <Linklist>
                <li>
                    <span onClick={() => navigate('./signUp')}>회원가입</span>
                </li>
                <li>
                    <span onClick={() => navigate('./findId')}>아이디찾기</span>
                </li>
                <li>
                    <span onClick={() => navigate('./findPw')}>비밀번호찾기</span>
                </li>
            </Linklist>
            <Line>
                <span>SNS 계정으로 간편하게 로그인하세요.</span>
            </Line>
            <SNSWrap>
                <SNSLogin src={naverIcon}  onClick={NaverLogin}/>
                <SNSLogin src={googleIcon} onClick={GoogleLogin}/>
                <SNSLogin src={kakaoIcon} onClick={KakaoLogin}/>
            </SNSWrap>
        </Page>
    );
}

export default Login;

// 정보 입력 영역
const StyledInput = styled.div`
    width: 434px;
    height: 48px;
    margin-bottom: 15px;
    padding: 0 17px;
    border: 1px solid #B1B1B1;
    border-radius: 5px;
    display: flex;
    align-items: center;

    img {
        width: 15px;
        height: 15px;
        margin-right: 10px;
    }

    input {
        border: none;
        font-size: 14px;
        width: 94%;
        height: 100%;
    }
`;

// 아이디 저장
const RememberId = styled.div`
    width: 434px;
    margin-bottom: 15px;
    
    input[type=checkbox]{
        display: none;

        :checked + label::before{
            content:"✔";
            background-color: #B8E5FF;
        }
    }

    label {
        display: flex;
        font-size: 14px;
        width: 100px;
        height: 22px;
        position: relative;
        top: -5px;

        ::before{
            content: "";
            width: 22px;
            height: 22px;
            border:1px solid #B1B1B1;
            border-radius: 22px;
            margin-right: 10px;
            font-size: 12px;
            text-align: center;
        }
    }
`;

// 로그인 버튼
const LoginButton = styled.button`
    width: 434px;
    height: 42px;
    font-size: 16px;
    font-weight: 500; // medium
    background-color: var(--primary-color);
    border:1px solid #B1B1B1;
    border-radius: 10px;
    margin-bottom: 15px;
    cursor: pointer;
`;

// 회원가입, 아이디찾기, 비밀번호찾기
const Linklist = styled.ul`
    list-style-type: none;
    width: 381px;
    display: flex;
    justify-content: center;
    font-size: 15px;
    margin-bottom: 15px;

    li {
        width: 33%;
        text-align: center;
        color: #5C5C5C;

        :not(:last-child) {
            border-right: 1px solid #5C5C5C;
        }

        span {
            cursor: pointer;
        }
    }
`;

//sns 로그인 라인
const Line = styled.div`
    width: 434px;
    display: flex;
    align-items: center;
    color: #AEAEAE;
    font-size: 14px;
    font-weight: 300;
    margin-bottom: 18px;
    cursor: default;

    span {
        margin: 0 12px;
    }

    ::before,
    ::after {
        content: "";
        flex-grow: 1;
        border-top: 1px dashed #B1B1B1;
        height: 0;
    }
`;

//SNS 로그인 영역
const SNSWrap = styled.div`
    width: 220px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

// 각 SNS로그인 개체
const SNSLogin = styled.img`
    width: 40px;
    height: 40px;
    border: 1px solid #B1B1B1;
    border-radius: 10px;
    cursor: pointer;
`;