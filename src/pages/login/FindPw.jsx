import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import * as S from 'styles/login/LoginStyled';
import TextInput from 'components/login/TextInput';
import TextBtnInput from 'components/login/TextBtnInput';
import PhoneInput from 'components/login/PhoneInput';

function FindPw(props) {
    const navigate = useNavigate();

    return(
        <S.Wrapper>
            <S.Title>
                <S.Back onClick={() => navigate("../")}>
                    <FontAwesomeIcon icon={faChevronLeft}/>
                </S.Back>
                비밀번호 찾기
            </S.Title>
            <S.InputArea>
                <S.FindMenu>
                    <S.NotSelectedMenu onClick={() => navigate('/findId')}>아이디 찾기</S.NotSelectedMenu>
                    <S.SelectedMenu>비밀번호 찾기</S.SelectedMenu>
                </S.FindMenu>
                <TextInput type="text" name="아이디" />
                <PhoneInput />
                <TextBtnInput name="인증번호" btnName="인증하기" />
            </S.InputArea>
            <S.SubmitButton onClick={() => navigate("./reset")}>비밀번호 찾기</S.SubmitButton>
        </S.Wrapper>
    );
}

export default FindPw;