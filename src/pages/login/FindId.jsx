// 외부 import
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
// 내부 import
import * as S from 'styles/login/LoginStyled';
import TextBtnInput from 'components/login/TextBtnInput';
import PhoneInput from 'components/login/PhoneInput';

function FindId(props) {
    const navigate = useNavigate();
    const [phoneNumber, setPhoneNumber] = useState();
    const [certify, setCertify] = useState(true); // 테스트가 끝나면 false로 바꿀것!!

    const phoneChange = (number) => {
        setPhoneNumber(number);
    };

    const Find = () => {
        if(certify) {
            axios.post('/api/member-api/find-id', {
                "phoneNumber":phoneNumber
            }).then(function (response) {
                if(response.data === "") {
                    alert("등록되지않은 전화번호입니다!");
                } else {
                    navigate("./result", {
                        state: {
                            memId: response.data["memId"],
                            joinDate: response.data["joinDate"]
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
                아이디 찾기
            </S.Title>
            <S.InputArea>
                <S.FindMenu>
                    <S.SelectedMenu>아이디 찾기</S.SelectedMenu>
                    <S.NotSelectedMenu  onClick={() => navigate('/findPw')}>비밀번호 찾기</S.NotSelectedMenu>
                </S.FindMenu>
                <PhoneInput phoneChange={phoneChange} />
                <TextBtnInput name="인증번호" btnName="인증하기" />
            </S.InputArea>
            <S.SubmitButton onClick={Find}>아이디 찾기</S.SubmitButton>
        </S.Wrapper>
    );
}

export default FindId;