import React from "react";
import {useNavigate} from "react-router-dom";
import * as S from "../../styled/login/FindStyled";
import PhoneInput from "./PhoneInput";
import CertInput from "./CertInput";

function FindId(props) {
    const navi = useNavigate();

    return(
        <S.Wrapper>
            <S.Title>
                <S.Back onClick={() => navi("/login")}>
                    <img src="/login/GoBack.png"/>
                </S.Back>
                아이디 찾기
            </S.Title>
            <S.InputArea>
                <S.FindMenu>
                    <S.SelectedMenu>아이디 찾기</S.SelectedMenu>
                    <S.NotSelectedMenu  onClick={() => navi("/login/findPw")}>비밀번호 찾기</S.NotSelectedMenu>
                </S.FindMenu>
                <PhoneInput/>
                <CertInput/>
            </S.InputArea>
            <S.FindButton>아이디 찾기</S.FindButton>
        </S.Wrapper>
    );
}

export default FindId;