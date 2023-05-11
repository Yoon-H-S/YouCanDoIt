import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import * as S from 'styles/login/LoginStyled';
import TextInput from 'components/login/TextInput';

function PwReset(props) {
    const navigate = useNavigate();

    return(
        <S.Wrapper>
            <S.Title>
                <S.Back onClick={() => navigate(-1)}>
                    <FontAwesomeIcon icon={faChevronLeft}/>
                </S.Back>
                비밀번호 찾기
            </S.Title>
            <S.InputArea>
                <TextInput type="text" name="아이디" value="aaaa7" isReset={true} readOnly={true} />
                <TextInput type="password" name="새 비밀번호" isReset={true} />
                <TextInput type="password" name="새 비밀번호 확인" isReset={true} />
            </S.InputArea>
            <SubMessage>‣ 영문, 숫자, 특수문자를 함께 사용하여 8자 이상 16자 이하로 설정해주세요.</SubMessage>
            <S.SubmitButton onClick={() => navigate("/")}>비밀번호 재설정</S.SubmitButton>
        </S.Wrapper>
    );
}

export default PwReset;

const SubMessage = styled.div`
    width: 434px;
    font-size: 10px;
    color: #A4A4A4;
    margin-top: 10px;
    cursor: default;
`;