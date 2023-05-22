// 외부 import
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
// 내부 import
import Page from 'pages/login/LoginPage';
import * as S from 'styles/login/LoginStyled';
import TextInput from 'components/login/TextInput';
import FileInput from 'components/login/FileInput';

function SnsSignUp(props) {
    const navigate = useNavigate();
    const location = useLocation();
    const [profilePicture, setProfilePicture] = useState(null); // 프로필사진 state
    const [nickname, setNickname] = useState(); // 닉네임 state

    const memId = location.state.email;
    const password = location.state.id;

    // input값이 변경되면 state에 저장
    const handleChange = (e) => {
        setNickname(e.target.value);
    };

    // 파일 업로드 관련 setState
    const fileChange = (file) => {
        setProfilePicture(file);
    }

    // 가입하기(스프링부트에 post값 전달)
    const Send = () => {
        if(nickname) {
            axios.post('/api/member-api/signup', {
                "memId":memId,
                "password":password, 
                "nickname":nickname,
                "memClass":"2"
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
                alert("SNS 회원가입이 완료되었습니다.\n로그인 페이지로 이동합니다.");
                navigate("/login");
            }).catch(
                (error) => console.log(error)
            );
        } else {
            alert("닉네임을 입력 해주세요!");
        }
    };

    return(
        <Page>
            <S.Title>
                <S.Back onClick={() => navigate("/login")}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                </S.Back>
                SNS 회원가입
            </S.Title>
            <S.InputArea>
                <TextInput type="text" name="아이디" stateName="memId" value={memId} readOnly="readOnly" required={2} />
                <TextInput type="text" name="닉네임" stateName="nickname" handleChange={handleChange} required={1} /> 
                <FileInput fileChange={fileChange} required={2} />
            </S.InputArea>
            <S.SubmitButton onClick={Send}>가입하기</S.SubmitButton>
        </Page>
    );
}

export default SnsSignUp;