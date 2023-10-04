import React, { useState, useEffect } from 'react';
import GuidePage from 'pages/guide/GuidePage';
import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

import Scheduler from 'assets/scheduler.png';
import Calender from 'assets/calender.png';

function GuideScheduler(props) {
    const navigate = useNavigate();
    const location = useLocation();
    const [path, setPath] = useState(0);

    useEffect(() => {
        if (location.pathname.startsWith('/diyphoto')) {
            setPath(1);
         } else if (location.pathname.startsWith('/login')) {
            setPath(2);
         }
    }, []);
    return (
        <GuidePage>
            <Wrapper>
                <Current>
                    <Count> 3. 스케줄러 </Count>
                    <BackArrow>
                        <FontAwesomeIcon icon={faChevronLeft} id={1} path={path} onClick={() => navigate('/diyphoto')} />
                    </BackArrow>
                    <CurrentPage> 5 / 5 </CurrentPage>
                    <NextArrow>
                        <FontAwesomeIcon icon={faChevronRight} id={2} path={path} onClick={() => navigate('/login')} />
                    </NextArrow>
                </Current>
                <GuideGodGreetings>
                    <LeftContent>
                        <img src={Scheduler} />
                    </LeftContent>
                    <MiddleLine />
                    <RightContent>
                        <img src={Calender} />
                    </RightContent>
                </GuideGodGreetings>
                <DetailGreeting>
                    <div> 스케줄러 </div>
                    <span> 를 통해 나의 일정들을 쉽게 관리할 수 있어요! </span>
                </DetailGreeting>
            </Wrapper>
        </GuidePage>
    );
}

export default GuideScheduler;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 508px;
`;

const Current = styled.div`
    display: flex;
    align-items: center;
    width: 1283px;
    height: 69px;
`;

const Count = styled.div`
    font-size: 20px;
    position: absolute;
    left: 95px;
`;

const BackArrow = styled.div`
    position: absolute;
    cursor: pointer;

    ${(props) =>
        props.id === props.path &&
        `
              right: 188px;
          `}
`;

const CurrentPage = styled.div`
    position: absolute;
    font-size: 20px;
    right: 127px;
`;

const NextArrow = styled.div`
    position: absolute;
    cursor: pointer;

    ${(props) =>
        props.id === props.path &&
        `
              right: 95px;
          `}
`;

const GuideGodGreetings = styled.div`
    display: flex;
    height: 342.55px;
`;


/** 좌측 페이지 영역 */
const LeftContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 598.5px;

   img {
        width: 450px;
        height: 341.55px;
        margin-right: 4px;
}
`;

// 중간 라인
const MiddleLine = styled.div`
    width: 0px;
    height: 342.55px;
    border-left: 1px solid black;
    margin-left: 43px;
    margin-right: 43px;
`;

// 우측 페이지 영역
const RightContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 598.5px;
    
    img {
        width: 450px;
        height: 341.55px;
        margin-right: 4px;
    }
`;

const DetailGreeting = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1283px;
    height: 89px;
    font-size: 28px;

    div {
        font-weight: bold;
        color: #DCA600;
    }
`;