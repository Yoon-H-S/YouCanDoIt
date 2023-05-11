import React from 'react';
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import * as S from 'styles/login/LoginStyled';
import TextInput from 'components/login/TextInput';
import TextBtnInput from 'components/login/TextBtnInput';
import PhoneInput from 'components/login/PhoneInput';
import FileInput from 'components/login/FileInput';

function SignUp(props) {
    const navigate = useNavigate();

    return(
        <ScrollDiv>
            <S.Wrapper>
                <S.Title>
                    <S.Back onClick={() => navigate(-1)}>
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </S.Back>
                    회원가입
                </S.Title>
                <S.InputArea>
                    <TextInput type="text" name="닉네임" required={1} />
                    <TextBtnInput name="아이디" btnName="중복 확인" required={1} />
                    <TextInput type="password" name="비밀번호" required={1} />
                    <TextInput type="password" name="비밀번호 확인" required={1} />
                    <PhoneInput required={1} />
                    <TextBtnInput name="인증번호" btnName="인증하기" required={1} />
                    <FileInput required={2} />
                </S.InputArea>
                <S.SubmitButton>가입하기</S.SubmitButton>
            </S.Wrapper>
        </ScrollDiv>
    );
}

export default SignUp;

const ScrollDiv = styled.div`
    height: 400.6px;
    overflow-y: scroll;

    /*스크롤바의 너비*/
    ::-webkit-scrollbar {
        width: 7px; 
    }

    /*스크롤바의 색상*/
    ::-webkit-scrollbar-thumb {
        background-color: var(--primary-color);
        border-radius: 7px;
    }

    /*스크롤바 트랙 색상*/
    ::-webkit-scrollbar-track {
        background-color: #E1E1E1; 
    }
`;