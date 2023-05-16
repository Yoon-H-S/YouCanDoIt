// 외부 import
import React, { useState } from 'react';
import axios from 'axios';
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
// 내부 import
import * as S from 'styles/login/LoginStyled';
import TextInput from 'components/login/TextInput';
import TextBtnInput from 'components/login/TextBtnInput';
import PhoneInput from 'components/login/PhoneInput';
import FileInput from 'components/login/FileInput';

function SignUp(props) {
    const navigate = useNavigate();
    const [isDuplicate, setIsDuplicate] = useState(true);
    const [profilePicture, setProfilePicture] = useState(null);
    const [values, setValues] = useState({
        memId: "",
        password: "",
        passwordCheck: "",
        nickname: "",
        phoneNumber: "",
        certify: false
    });
    // 비구조화 할당
    const {memId, password, passwordCheck, nickname, phoneNumber, certify} = values;

    // input값이 변경되면 state에 저장
    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
        // 아이디 값이 변경되면 중복 확인 초기화
        if(e.target.name === "memId"){
            setIsDuplicate(true);
        }
    };

    // input이 3개인 전화번호를 위해 setState를 따로 만들었다.
    const phoneChange = (number) => {
        setValues({
            ...values,
            ["phoneNumber"]: number,
        });
    };

    // 파일 업로드 관련 setState
    const fileChange = (file) => {
        setProfilePicture(file);
    }

    // 아이디 중복 확인
    const duplicate = () => {
        if(memId === "") {
            alert("아이디를 입력해주세요!")
        } else {
            axios.get('/api/member-api/duplicate-id/' + memId)
            .then(function (response) {
                if(response.data){
                    alert("존재하는 아이디입니다.");
                } else {
                    alert("사용 가능한 아이디입니다.");
                    setIsDuplicate(false);
                }
            }).catch(
                (error) => console.log(error)
            );
        }
    };

    // 가입하기(스프링부트에 post값 전달)
    const Send = () => {
        if(memId && password && nickname && phoneNumber) {
            if(isDuplicate) {
                alert("아이디 중복 확인을 해주세요!");
            } else {
                axios.post('/api/member-api/signup', {
                    "memId":memId,
                    "password":password, 
                    "nickname":nickname, 
                    "phoneNumber":phoneNumber,
                }).then(function (response) {
                    if(profilePicture) {
                        const formData = new FormData();
                        formData.append("memId", memId);
                        formData.append("file", profilePicture);
                        axios.post('/api/member-api/insert-profile',
                            formData
                        ).catch(
                            (error) => console.log(error)
                        );
                    }
                    alert("회원가입이 완료되었습니다.");
                    // navigate("/");
                }).catch(
                    (error) => console.log(error)
                );
            }
        } else {
            alert("필수 항목을 입력 해주세요!");
        }
    };

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
                    <TextInput type="text" name="닉네임" stateName="nickname" handleChange={handleChange} required={1} /> 
                    <TextBtnInput name="아이디" btnName="중복 확인" stateName="memId" click={duplicate} handleChange={handleChange} required={1} />
                    <TextInput type="password" name="비밀번호" stateName="password" handleChange={handleChange} required={1} />
                    <TextInput type="password" name="비밀번호 확인" stateName="passwordCheck" handleChange={handleChange} required={1} />
                    <PhoneInput phoneChange={phoneChange} required={1} />
                    <TextBtnInput name="인증번호" btnName="인증하기" stateName="certify" handleChange={handleChange} required={1} />
                    <FileInput fileChange={fileChange} required={2} />
                </S.InputArea>
                <S.SubmitButton onClick={Send}>가입하기</S.SubmitButton>
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