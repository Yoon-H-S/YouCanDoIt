// 외부 import
import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
// 내부 import
import Page from 'pages/login/LoginPage';
import * as S from 'styles/login/LoginStyled';
import TextInput from 'components/login/TextInput';

function PwReset(props) {
    const navigate = useNavigate();
    const location = useLocation();
    const [values, setValues] = useState({
        password: "",
        passwordCheck: "",
    });
    // 비구조화 할당
    const {password, passwordCheck} = values;

    // input값이 변경되면 state에 저장
    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
    };

    const memId = location.state.memId;

    const Reset = () => {
        if(password && passwordCheck) {
            if(password === passwordCheck) {
                axios.post('/api/member-api/pw-reset', {
                    "memId":memId,
                    "password":password
                }).then(function (response) {
                    alert("비밀번호가 재설정되었습니다.");
                    navigate("/login");
                }).catch(
                    (error) => console.log(error)
                );
            } else {
                alert("비밀번호가 일치하지 않습니다!");
            }
        } else {
            alert("모든 항목을 입력해주세요!");
        }
    };

    return(
        <Page>
            <S.Title>
                <S.Back onClick={() => navigate(-1)}>
                    <FontAwesomeIcon icon={faChevronLeft}/>
                </S.Back>
                비밀번호 찾기
            </S.Title>
            <S.InputArea>
                <TextInput type="text" name="아이디" value={memId} isReset={true} readOnly={true} />
                <TextInput type="password" name="새 비밀번호" stateName="password" handleChange={handleChange} isReset={true} />
                <TextInput type="password" name="새 비밀번호 확인" stateName="passwordCheck" handleChange={handleChange} isReset={true} />
            </S.InputArea>
            <SubMessage>‣ 영문, 숫자, 특수문자를 함께 사용하여 8자 이상 16자 이하로 설정해주세요.</SubMessage>
            <S.SubmitButton onClick={Reset}>비밀번호 재설정</S.SubmitButton>
        </Page>
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