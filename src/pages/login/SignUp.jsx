// 외부 import
import React, { useState } from 'react';
import axios from 'axios';
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
// 내부 import
import Page from 'pages/login/LoginPage';
import * as S from 'styles/login/LoginStyled';
import TextInput from 'components/login/TextInput';
import TextBtnInput from 'components/login/TextBtnInput';
import PhoneInput from 'components/login/PhoneInput';
import FileInput from 'components/login/FileInput';

function SignUp(props) {
    const navigate = useNavigate();
    const [isDuplicate, setIsDuplicate] = useState(true); // 아이디 중복확인 여부 state
    const [phoneNumber, setPhoneNumber] = useState(); // 전화번호 state
    const [isSmsSend, setIsSmsSend] = useState(true); // 인증번호 발송 여부 state(인증하기 버튼 활성화, 비활성화를 위함)
    const [isCertify, setIsCertify] = useState(false) // 인증 여부 state
    const [profilePicture, setProfilePicture] = useState(null); // 프로필사진 state
    const [values, setValues] = useState({ // 입력값을 바로 target으로 저장할 수 있는 state를 묶었다.
        memId: "", // 아이디 state
        password: "", // 비밀번호 state
        passwordCheck: "", // 비밀번호 확인 state
        nickname: "", // 닉네임 state
        certifyNum: "" // 인증번호 state
    });
    // 비구조화 할당
    const {memId, password, passwordCheck, nickname, certifyNum} = values;

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
        setPhoneNumber(number);
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

    // 인증번호 발송
    const SmsSend = () => {
        if(phoneNumber.length === 13) {
            axios.post('/api/member-api/sms-send', {
                "phoneNumber":phoneNumber
            }).then(function (response) {
                if(response.data) {
                    alert("인증번호가 발송되었습니다.");
                    setIsSmsSend(false);
                } else {
                    alert("인증번호 발송에 실패하였습니다.\n다시 시도해주세요.")
                }
            }).catch(
                (error) => console.log(error)
            );
        } else {
            alert("전화번호를 정확히 입력해주세요!");
        }
    }

    // 인증하기
    const certify = () => {
        const formData = new FormData();
        formData.append("phoneNumber", phoneNumber);
        formData.append("certifyNum", certifyNum);
        axios.post('/api/member-api/certify',
            formData
        ).then(function (response) {
            if(response.data) {
                alert("인증이 완료되었습니다.");
                setIsCertify(true);
            } else {
                alert("전화번호와 인증번호가 일치하지 않습니다!")
            }
        }).catch(
            (error) => console.log(error)
        );
    }

    // 가입하기(스프링부트에 post값 전달)
    const Send = () => {
        if(memId && password && passwordCheck && nickname && phoneNumber && isCertify) {
            if(isDuplicate) {
                alert("아이디 중복 확인을 해주세요!");
            } else if(!isCertify) {
                alert("전화번호 인증을 해주세요!");
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
                    alert("회원가입이 완료되었습니다.\n로그인 페이지로 이동합니다.");
                    navigate("/login");
                }).catch(
                    (error) => console.log(error)
                );
            }
        } else {
            alert("필수 항목을 모두 입력 해주세요!");
        }
    };

    return(
        <Page>
            <ScrollDiv>
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
                    <PhoneInput phoneChange={phoneChange} readOnly={isCertify} click={SmsSend} required={1} />
                    <TextBtnInput name="인증번호" btnName="인증하기" stateName="certifyNum" click={certify} disabled={isSmsSend} handleChange={handleChange} required={1} />
                    <FileInput fileChange={fileChange} required={2} />
                </S.InputArea>
                <S.SubmitButton onClick={Send}>가입하기</S.SubmitButton>
            </ScrollDiv>
        </Page>
    );
}

export default SignUp;

const ScrollDiv = styled.div`
    height: 401px;
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