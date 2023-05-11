import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import * as S from 'styles/login/LoginStyled';
import TextBtnInput from 'components/login/TextBtnInput';
import PhoneInput from 'components/login/PhoneInput';

function FindId(props) {
    const navigate = useNavigate();

    return(
        <S.Wrapper>
            <S.Title>
                <S.Back onClick={() => navigate("../")}>
                    <FontAwesomeIcon icon={faChevronLeft}/>
                </S.Back>
                아이디 찾기
            </S.Title>
            <S.InputArea>
                <S.FindMenu>
                    <S.SelectedMenu>아이디 찾기</S.SelectedMenu>
                    <S.NotSelectedMenu  onClick={() => navigate('/findPw')}>비밀번호 찾기</S.NotSelectedMenu>
                </S.FindMenu>
                <PhoneInput />
                <TextBtnInput name="인증번호" btnName="인증하기" />
            </S.InputArea>
            <S.SubmitButton onClick={() => navigate("./result")}>아이디 찾기</S.SubmitButton>
        </S.Wrapper>
    );
}

export default FindId;