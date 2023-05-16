// 외부 import
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
// 내부 import
import * as S from 'styles/login/LoginStyled';
import TextInput from 'components/login/TextInput';
import TextBtnInput from 'components/login/TextBtnInput';
import PhoneInput from 'components/login/PhoneInput';

function FindPw(props) {
    const navigate = useNavigate();
    const [memId, setMemId] = useState();
    const [phoneNumber, setPhoneNumber] = useState();
    const [certify, setCertify] = useState(true); // 테스트가 끝나면 false로 바꿀것!!

    const handleChange = (e) => {
        setMemId(e.target.value);
    };

    const phoneChange = (number) => {
        setPhoneNumber(number);
    };

    const Find = () => {
        if(certify) {
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
        <S.Wrapper>
            <S.Title>
                <S.Back onClick={() => navigate("../")}>
                    <FontAwesomeIcon icon={faChevronLeft}/>
                </S.Back>
                비밀번호 찾기
            </S.Title>
            <S.InputArea>
                <S.FindMenu>
                    <S.NotSelectedMenu onClick={() => navigate('/findId')}>아이디 찾기</S.NotSelectedMenu>
                    <S.SelectedMenu>비밀번호 찾기</S.SelectedMenu>
                </S.FindMenu>
                <TextInput type="text" name="아이디" stateName="memId" handleChange={handleChange} />
                <PhoneInput phoneChange={phoneChange} />
                <TextBtnInput name="인증번호" btnName="인증하기" />
            </S.InputArea>
            <S.SubmitButton onClick={Find}>비밀번호 찾기</S.SubmitButton>
        </S.Wrapper>
    );
}

export default FindPw;