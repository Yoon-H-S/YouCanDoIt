import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import * as S from 'styled/login/LoginStyled';
import Inputs from './input/Inputs';

function FindPw(props) {
    const navigate = useNavigate();

    return(
        <S.Wrapper>
            <S.Title>
                <S.Back onClick={() => navigate('/')}>
                <FontAwesomeIcon icon={faChevronLeft}/>
                </S.Back>
                비밀번호 찾기
            </S.Title>
            <S.InputArea>
                <S.FindMenu>
                    <S.NotSelectedMenu onClick={() => navigate('/findId')}>아이디 찾기</S.NotSelectedMenu>
                    <S.SelectedMenu>비밀번호 찾기</S.SelectedMenu>
                </S.FindMenu>
                <Inputs type="text" name="아이디"/>
                <Inputs type="phone"/>
                <Inputs type="cert"/>
            </S.InputArea>
            <S.SubmitButton>비밀번호 찾기</S.SubmitButton>
        </S.Wrapper>
    );
}

export default FindPw;