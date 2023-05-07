import React from "react";
import {useNavigate} from "react-router-dom";
import * as S from "styled/login/LoginStyled";
import Inputs from "./input/Inputs";

function FindId(props) {
    const navi = useNavigate();

    return(
        <S.Wrapper>
            <S.Title>
                <S.Back onClick={() => navi("/")}>
                    <img src="/login/GoBack.png"/>
                </S.Back>
                아이디 찾기
            </S.Title>
            <S.InputArea>
                <S.FindMenu>
                    <S.SelectedMenu>아이디 찾기</S.SelectedMenu>
                    <S.NotSelectedMenu  onClick={() => navi("/findPw")}>비밀번호 찾기</S.NotSelectedMenu>
                </S.FindMenu>
                <Inputs type="phone"/>
                <Inputs type="cert"/>
            </S.InputArea>
            <S.SubmitButton>아이디 찾기</S.SubmitButton>
        </S.Wrapper>
    );
}

export default FindId;