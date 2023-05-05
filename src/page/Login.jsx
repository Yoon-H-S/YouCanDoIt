import React from "react";
import * as S from "../styled/LoginStyled";

function Login(props) {
    return(
        <S.Wrapper>
                <form action="">
                    <S.LoginTitle>로그인</S.LoginTitle>
                    <S.StyledInput>
                        <img src="login/id.png"/>
                        <input type="text" name="id" placeholder="아이디를 입력해주세요."/>
                    </S.StyledInput>
                    <S.StyledInput>
                        <img src="login/pw.png"/>
                        <input type="password" name="pw" placeholder="비밀번호를 입력해주세요."/>
                    </S.StyledInput>
                    <S.Linklist>
                        <li><a href="">회원가입</a></li>
                        <li><a href="">아이디찾기</a></li>
                        <li><a href="">비밀번호찾기</a></li>
                    </S.Linklist>
                    <S.LoginButton type="submit">로그인</S.LoginButton>
                </form>
                <S.Line>SNS 계정으로 간편하게 로그인하세요.</S.Line>
                <S.SNSWrap>
                    <S.SNSLogin src="login/naver.png" />
                    <S.SNSLogin src="login/google.png" />
                    <S.SNSLogin src="login/kakao.png" />
                </S.SNSWrap>
        </S.Wrapper>
    );
}

export default Login;