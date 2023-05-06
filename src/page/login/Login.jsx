import React from "react";
import {useNavigate} from "react-router-dom";
import * as S from "../../styled/login/LoginStyled";

function Login(props) {
    const navi = useNavigate();

    return(
        <S.Wrapper>
                <S.Title>로그인</S.Title>
                <S.StyledInput>
                    <img src="/login/id.png"/>
                    <input type="text" name="id" placeholder="아이디를 입력해주세요."/>
                </S.StyledInput>
                <S.StyledInput>
                    <img src="/login/pw.png"/>
                    <input type="password" name="pw" placeholder="비밀번호를 입력해주세요."/>
                </S.StyledInput>
                <S.Linklist>
                    <li onClick={() => navi("./")}>회원가입</li>
                    <li onClick={() => navi("./findId")}>아이디찾기</li>
                    <li onClick={() => navi("./findPw")}>비밀번호찾기</li>
                </S.Linklist>
                <S.LoginButton>로그인</S.LoginButton>
                <S.Line>SNS 계정으로 간편하게 로그인하세요.</S.Line>
                <S.SNSWrap>
                    <S.SNSLogin src="/login/naver.png" />
                    <S.SNSLogin src="/login/google.png" />
                    <S.SNSLogin src="/login/kakao.png" />
                </S.SNSWrap>
        </S.Wrapper>
    );
}

export default Login;