import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import * as S from 'styled/login/LoginStyled';
import Inputs from './input/Inputs';

function FindId(props) {
    const navigate = useNavigate();

    return(
        <S.Wrapper>
            <S.Title>
                <S.Back onClick={() => navigate('/')}>
                    <FontAwesomeIcon icon={faChevronLeft}/>
                </S.Back>
                아이디 찾기
            </S.Title>
            <S.InputArea>
                <S.FindMenu>
                    <S.SelectedMenu>아이디 찾기</S.SelectedMenu>
                    <S.NotSelectedMenu  onClick={() => navigate('/findPw')}>비밀번호 찾기</S.NotSelectedMenu>
                </S.FindMenu>
                <Inputs type="phone"/>
                <Inputs type="cert"/>
            </S.InputArea>
            <S.SubmitButton>아이디 찾기</S.SubmitButton>
        </S.Wrapper>
    );
}

export default FindId;