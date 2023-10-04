import React, { useState, useEffect } from 'react';
import GuidePage from 'pages/guide/GuidePage';
import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

import GodRank from 'assets/godrank.png';
import Friendlist from 'assets/friendlist.png';
import Grouplist from 'assets/grouplist.png';

function GuideGodLife(props) {
    const navigate = useNavigate();
    const location = useLocation();
    const [path, setPath] = useState(0);

    useEffect(() => {
        if (location.pathname.startsWith('/god')) {
            setPath(1);
         } else if (location.pathname.startsWith('/diy')) {
            setPath(2);
         }
    }, []);
    return (
        <GuidePage>
            <Wrapper>
                <Current>
                    <Count> 1. 갓생 챌린지 </Count>
                    <BackArrow>
                        <FontAwesomeIcon icon={faChevronLeft} id={1} path={path} onClick={() => navigate('/guide')} />
                    </BackArrow>
                    <CurrentPage> 2 / 5 </CurrentPage>
                    <NextArrow>
                        <FontAwesomeIcon icon={faChevronRight} id={2} path={path} onClick={() => navigate('/diy')} />
                    </NextArrow>
                </Current>
                <GuideGodGreetings>
                    <LeftContent>
                        <img src={GodRank} />
                    </LeftContent>
                    <MiddleLine />
                    <RightContent>
                        <img src={Friendlist} />
                        <img src={Grouplist} />
                    </RightContent>
                </GuideGodGreetings>
                <DetailGreeting>
                    <div> 실제 지인 </div>
                    <span> 과 함께 </span>
                    <div> &nbsp; 챌린지 그룹 </div>
                    <span> 을 만들고 겨루어 보아요! </span>
                </DetailGreeting>
            </Wrapper>
        </GuidePage>
    );
}

export default GuideGodLife;

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
        width: 225px;
        height: 330.84px;
        margin: 0 15.5px 0 15.5px;
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