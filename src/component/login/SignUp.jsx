import React from "react";
import {useNavigate} from "react-router-dom";
import * as S from "styled/login/LoginStyled";
import Inputs from "./input/Inputs";

function SignUp(props) {
    const navi = useNavigate();

    return(
        <S.Wrapper>
            <S.Title>
                <S.Back onClick={() => navi("/")}>
                    <img src="/login/GoBack.png"/>
                </S.Back>
                회원가입
            </S.Title>
            <S.InputArea>
                <Inputs type="text" height={43} name="아이디"/>
                <Inputs type="text" height={43} name="닉네임"/>
                <Inputs type="password" height={43} name="비밀번호"/>
                <Inputs type="password" height={43} name="비밀번호 확인"/>
                <Inputs type="phone" height={43}/>
                <Inputs type="cert" height={43}/>
            </S.InputArea>
            <S.SubmitButton>회원가입</S.SubmitButton>
        </S.Wrapper>
    );
}

export default SignUp;