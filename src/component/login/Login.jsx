import React from "react";
import styled from "styled-components";
import {useNavigate} from "react-router-dom";
import {Wrapper, Title} from "styled/login/LoginStyled";

function Login(props) {
    const navi = useNavigate();

    return(
        <Wrapper>
                <Title>로그인</Title>
                <StyledInput>
                    <img src="/login/id.png"/>
                    <input type="text" name="id" placeholder="아이디를 입력해주세요."/>
                </StyledInput>
                <StyledInput>
                    <img src="/login/pw.png"/>
                    <input type="password" name="pw" placeholder="비밀번호를 입력해주세요."/>
                </StyledInput>
                <Linklist>
                    <li onClick={() => navi("./signUp")}>회원가입</li>
                    <li onClick={() => navi("./findId")}>아이디찾기</li>
                    <li onClick={() => navi("./findPw")}>비밀번호찾기</li>
                </Linklist>
                <LoginButton>로그인</LoginButton>
                <Line>SNS 계정으로 간편하게 로그인하세요.</Line>
                <SNSWrap>
                    <SNSLogin src="/login/naver.png" />
                    <SNSLogin src="/login/google.png" />
                    <SNSLogin src="/login/kakao.png" />
                </SNSWrap>
        </Wrapper>
    );
}

export default Login;

// 정보 입력 영역
const StyledInput = styled.div`
    width: 381px;
    height: 42px;
    margin-bottom: 16px;
    padding: 0 15px;
    border: 1px solid #B1B1B1;
    border-radius: 5px;
    display: flex;
    align-items: center;

    & > img {
        width: 15px;
        height: 15px;
        margin-right: 20px;
    }

    & > input {
        border: none;
        font-size: 12px;
        width: 100%;
        height: 100%;
    }
`;

// 회원가입, 아이디찾기, 비밀번호찾기
const Linklist = styled.ul`
    list-style-type: none;
    width: 381px;
    display: flex;
    font-size: 12px;
    margin-bottom: 16px;

    & > li {
        width: 100%;
        text-align: center;
        color: #5C5C5C;
        cursor: default;
        :not(:last-child) {
            border-right: 1px solid #5C5C5C;
        }
    }
`;

// 로그인 버튼
const LoginButton = styled.button`
    width: 381px;
    height: 42px;
    background-color: #FFF066;
    border:1px solid #B1B1B1;
    border-radius: 10px;
    margin-bottom: 8px;
    cursor: pointer;
`;

//sns 로그인 라인
const Line = styled.div`
    width: 407px;
    display: flex;
    align-items: center;
    color: #AEAEAE;
    font-size: 12px;
    margin: 8px 0;
    cursor: default;

    ::before, ::after {
        content: "";
        flex-grow: 1;
        border-top: 1px dashed #B1B1B1;
        height: 0;
        font-size: 0;
        line-height: 0;
        margin: 0 8px;
    }
`;

//SNS 로그인 영역
const SNSWrap = styled.div`
    margin-top: 10px;
    width: 200px;
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
`;