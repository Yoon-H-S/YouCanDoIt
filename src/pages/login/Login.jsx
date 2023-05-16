// 외부 import
import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
// 내부 import
import { Wrapper, Title } from 'styles/login/LoginStyled';
import idIcon from 'assets/id.png';
import pwIcon from 'assets/pw.png';
import naverIcon from 'assets/naver.png';
import googleIcon from 'assets/google.png';
import kakaoIcon from 'assets/kakao.png';

function Login(props) {
    const navigate = useNavigate();

    return(
        <Wrapper>
            <Title>로그인</Title>
            <StyledInput>
                <img src={idIcon} alt="id"/>
                <input type="text" placeholder="아이디를 입력해주세요." />
            </StyledInput>
            <StyledInput>
                <img src={pwIcon} alt="pw"/>
                <input type="password" placeholder="비밀번호를 입력해주세요." />
            </StyledInput>
            <RememberId>
                <input type="checkbox" id="rememberId" />
                <label htmlFor="rememberId">아이디 저장</label>
            </RememberId>
            <LoginButton>로그인</LoginButton>
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
                <SNSLogin src={naverIcon} />
                <SNSLogin src={googleIcon} />
                <SNSLogin src={kakaoIcon} />
            </SNSWrap>
        </Wrapper>
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