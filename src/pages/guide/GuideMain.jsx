import React, { useState, useEffect } from 'react';
import GuidePage from 'pages/guide/GuidePage';
import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

function GuideMain(props) {
    const navigate = useNavigate();
    const location = useLocation();
    const [path, setPath] = useState(0);

    useEffect(() => {
        if (location.pathname.startsWith('/guide')) {
            setPath(1);
         } else if (location.pathname.startsWith('/god')) {
            setPath(2);
         }
    }, []);
    return (
        <GuidePage>
            <Wrapper>
                <Current>
                    <BackArrow>
                        <FontAwesomeIcon icon={faChevronLeft} id={1} path={path} onClick={() => navigate('/guide')} />
                    </BackArrow>
                    <CurrentPage> 1 / 5 </CurrentPage>
                    <NextArrow>
                        <FontAwesomeIcon icon={faChevronRight} id={2} path={path} onClick={() => navigate('/god')} />
                    </NextArrow>
                </Current>
                <GuideGreetings>
                    <div> 유캔두잇에 오신 것을 환영합니다! </div>
                    <span> 당신이 완벽하고 성취감 있는 하루를 만들어 갈 수 있도록 도와줄게요. </span>
                </GuideGreetings>
            </Wrapper>
        </GuidePage>
    );
}
 
export default GuideMain;

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

const BackArrow = styled.div`
    position: absolute;
    color: #CDCDCD;

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

const GuideGreetings = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 432px;
    padding-top: 124px;

    div {
        color: #DCA600;
        font-weight: bold;
        font-size: 30px;
        margin-bottom: 36px;
    }

    span {
        font-size: 30px;
    }
`;