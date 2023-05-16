// 외부 import
import React from 'react';
import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
// 내부 import
import * as S from 'styles/login/LoginStyled';

function FindIdResult(props) {
    const navigate = useNavigate();
    const location = useLocation();

    const memId = location.state.memId;
    var joinDate = location.state.joinDate;

    const Reset = () => {
        navigate("/findpw/reset", {
            state: {
                memId: memId
            }
        });
    };

    return(
        <S.Wrapper>
            <S.Title>
                <S.Back onClick={() => navigate(-1)}>
                    <FontAwesomeIcon icon={faChevronLeft}/>
                </S.Back>
                아이디 찾기
            </S.Title>
            <MessageArea>
                <SystemMessage>입력하신 정보와 일치하는 회원입니다.</SystemMessage>
                <InfoArea>
                    <div>
                        <InfoContent width={125}>아이디</InfoContent>
                        <InfoContent width={189}>{memId}</InfoContent>
                    </div>
                    <div>
                        <InfoContent width={125}>가입일</InfoContent>
                        <InfoContent width={189}>{joinDate}</InfoContent>
                    </div>
                </InfoArea>
                <SubMessage>‣ SNS로 로그인 하신 경우, 각 SNS 간편 로그인을 이용해주세요.</SubMessage>
            </MessageArea>
            <ButtonArea>
                <SmallButton onClick={() => navigate("/")} color="var(--primary-color)">로그인</SmallButton>
                <SmallButton  onClick={Reset}>비밀번호 재설정</SmallButton>
            </ButtonArea>
        </S.Wrapper>
    );
}

export default FindIdResult;

// 아이디 찾기 결과 영역
const MessageArea = styled(S.InputArea)`
    height: 222px;
    justify-content: center;
`;

// 상단 안내메시지
const SystemMessage = styled.div`
    font-size: 13px;
    color: #A4A4A4;
    margin-bottom: 15px;
    cursor: default;
`;

// 실제 결과가 나타나는 영역
const InfoArea = styled.div`
    width: 384px;
    height: 89px;
    border: 1px solid #DADADA;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 10px;

    & > div {
        display: flex;

        :not(:last-child) {
            margin-bottom: 10px;
        }
    }
`;

const InfoContent = styled.div`
    width:${(props) => props.width}px;
    font-size: 12px;
    font-weight: 500;
    color: #565656;
    cursor: default;
`;

// 하단 안내메시지
const SubMessage = styled.div`
    width: 384px;
    font-size: 10px;
    font-weight: 300;
    color: #A4A4A4;
    cursor: default;
`;

// 버튼 영역
const ButtonArea = styled.div`
    width: 415px;
    display: flex;
    justify-content: space-between;
`;

const SmallButton = styled(S.SubmitButton)`
    width:200px;
    background-color: ${(props) => props.color ? props.color : "white"};
`;