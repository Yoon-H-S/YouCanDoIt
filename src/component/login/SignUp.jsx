import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import * as S from 'styled/login/LoginStyled';
import Inputs from './input/Inputs';

function SignUp(props) {
    const navigate = useNavigate();

    return(
        <S.Wrapper>
            <S.Title>
                <S.Back onClick={() => navigate('/')}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                </S.Back>
                회원가입
            </S.Title>
            <S.InputArea>
                <Inputs type="text" height={43} name="닉네임" isRequired={true} />
                <Inputs type="text" height={43} name="아이디" isRequired={true} />
                <Inputs type="password" height={43} name="비밀번호" isRequired={true} />
                <Inputs type="password" height={43} name="비밀번호 확인" isRequired={true} />
                <Inputs type="phone" height={43} isRequired={true} />
                <Inputs type="cert" height={43} isRequired={true} />
                <Inputs type="file" height={43} />
            </S.InputArea>
            <S.SubmitButton>가입하기</S.SubmitButton>
        </S.Wrapper>
    );
}

export default SignUp;