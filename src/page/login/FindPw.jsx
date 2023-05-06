import React from "react";
import {useNavigate} from "react-router-dom";
import * as S from "../../styled/login/FindStyled";
import IdInput from "./IdInput";
import PhoneInput from "./PhoneInput";
import CertInput from "./CertInput";

function FindId(props) {
    const navi = useNavigate();

    return(
        <S.Wrapper>
            <S.Title>
                <S.Back onClick={() => navi("/")}>
                    <img src="/login/GoBack.png"/>
                </S.Back>
                비밀번호 찾기
            </S.Title>
            <S.InputArea>
                <S.FindMenu>
                    <S.NotSelectedMenu onClick={() => navi("/findId")}>아이디 찾기</S.NotSelectedMenu>
                    <S.SelectedMenu>비밀번호 찾기</S.SelectedMenu>
                </S.FindMenu>
                <IdInput/>
                <PhoneInput/>
                <CertInput/>
            </S.InputArea>
            <S.FindButton>비밀번호 찾기</S.FindButton>
        </S.Wrapper>
    );
}

export default FindId;