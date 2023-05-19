// 외부 import
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
// 내부 import
import Page from 'pages/login/LoginPage';
import * as S from 'styles/login/LoginStyled';
import TextInput from 'components/login/TextInput';
import TextBtnInput from 'components/login/TextBtnInput';
import PhoneInput from 'components/login/PhoneInput';

function FindPw(props) {
    const navigate = useNavigate();
    const [memId, setMemId] = useState();
    const [phoneNumber, setPhoneNumber] = useState(); // 전화번호 state
    const [certifyNum, setCertifyNum] = useState(); // 인증번호 state
    const [isSmsSend, setIsSmsSend] = useState(true); // 인증번호 발송 여부 state(인증하기 버튼 활성화, 비활성화를 위함)
    const [isCertify, setIsCertify] = useState(false) // 인증 여부 state

    const handleChange = (e) => {
        setMemId(e.target.value);
    };

    const phoneChange = (number) => {
        setPhoneNumber(number);
    };

    const certifyChange = (e) => {
        setCertifyNum(e.target.value);
    }

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

    // 비밀번호 재설정
    const Find = () => {
        if(isCertify) {
            axios.post('/api/member-api/find-pw', {
                "memId":memId,
                "phoneNumber":phoneNumber
            }).then(function (response) {
                if(response.data === "") {
                    alert("회원아이디와 전화번호가 일치하지 않습니다!");
                } else {
                    navigate("./reset", {
                        state: {
                            memId: response.data["memId"]
                        }
                    });
                }
            }).catch(
                (error) => console.log(error)
            );
        } else {
            alert("전화번호 인증을 해주세요!");
        }
    };

    return(
        <Page>
            <S.Title>
                <S.Back onClick={() => navigate("./../")}>
                    <FontAwesomeIcon icon={faChevronLeft}/>
                </S.Back>
                비밀번호 찾기
            </S.Title>
            <S.InputArea>
                <S.FindMenu>
                    <S.NotSelectedMenu onClick={() => navigate('/login/findId')}>아이디 찾기</S.NotSelectedMenu>
                    <S.SelectedMenu>비밀번호 찾기</S.SelectedMenu>
                </S.FindMenu>
                <TextInput type="text" name="아이디" stateName="memId" handleChange={handleChange} />
                <PhoneInput phoneChange={phoneChange} readOnly={isCertify} click={SmsSend} />
                <TextBtnInput name="인증번호" btnName="인증하기" click={certify} disabled={isSmsSend} handleChange={certifyChange} />
            </S.InputArea>
            <S.SubmitButton onClick={Find}>비밀번호 찾기</S.SubmitButton>
        </Page>
    );
}

export default FindPw;