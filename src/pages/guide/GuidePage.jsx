import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import GuideMain from './GuideMain';
import GuideGodLife from './GuideGodLife';
import GuideDIY from './GuideDIY';
import GuideDIYPhoto from './GuideDIYPhoto';
import GuideScheduler from './GuideScheduler';

function GuidePage(props) {
    const navigate = useNavigate();
    const [guideNumber, setGuideNumber] = useState(1);

    // 페이지가 마운트 되었을 때
    useEffect(() => {
        axios.get('/api/member-api/is-login')
        .then(function (response) {
            if(!(response.data === "")) {
                sessionStorage.setItem("loginName", response.data["nickname"]);
                sessionStorage.setItem("loginId", response.data["memId"]);
                navigate("/", {replace: true});
            }  
        })
        .catch((error) => console.log(error));
    }, []);

    const skip = () => {
        localStorage.setItem('guide', 'complete');
        navigate("/login");
    }

   return (
        <Wrapper>
            <Logo>유캔두잇</Logo>
            <MainContainer>
                <Outside>
                    <UserService>
                        <div>
                            <span onClick={skip}>로그인 / 회원가입</span>
                        </div>
                    </UserService>
                    <Inside>
                        {{
                            1 : <GuideMain setNumber={setGuideNumber} />,
                            2 : <GuideGodLife setNumber={setGuideNumber} />,
                            3 : <GuideDIY setNumber={setGuideNumber} />,
                            4 : <GuideDIYPhoto setNumber={setGuideNumber} />,
                            5 : <GuideScheduler setNumber={setGuideNumber} />
                        }[guideNumber]}
                    </Inside>
                </Outside>
            </MainContainer>
        </Wrapper>
   );
}

export default GuidePage;

// 기본 틀
export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

// 상단 서비스명
const Logo = styled.div`
    height: 55px;
    width: 194px;
    position: relative;
    left: 1110px;
    font-size: 22px;
    font-weight: bold;
    text-align: center;
    line-height: 55px;
    background-color: #f8ba00;
    border-radius: 10px 10px 0 0;
    cursor: default;
`;

// 다이어리와 주메뉴 영역
const MainContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

// 다이어리
const Outside = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 1363px;
    height: 603px;
    background-color: #efefef;
`;

// 실제 콘텐츠가 삽입되는 영역
export const Inside = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1283px;
    height: 508px;
    background-color: #FFFFFF;
`;

// 닉네임, 로그아웃, 리마인더가 표시되는 영역
const UserService = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 1283px;
    height: 24px;
    top: 11px;
    font-size: 16px;
    font-weight: bold;

    div {
        display: flex;
        align-items: center;

        span {
            font-size: 13px;
            cursor: pointer;
        }
    }
`;