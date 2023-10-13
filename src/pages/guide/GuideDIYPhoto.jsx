import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

import DIYGallery from 'assets/guide/diygallery.png';
import DIYVote from 'assets/guide/diyvote.png';

function GuideDIYPhoto(props) {
    return (
        <Wrapper>
            <Current>
                <Count> 2. D.I.Y 챌린지 </Count>
                <BackArrow>
                    <FontAwesomeIcon icon={faChevronLeft} onClick={() => props.setNumber(3)} />
                </BackArrow>
                <CurrentPage> 4 / 5 </CurrentPage>
                <NextArrow>
                    <FontAwesomeIcon icon={faChevronRight} onClick={() => props.setNumber(5)} />
                </NextArrow>
            </Current>
            <GuideGodGreetings>
                <LeftContent>
                    <img src={DIYGallery} />
                </LeftContent>
                <MiddleLine />
                <RightContent>
                    <img src={DIYVote} />
                </RightContent>
            </GuideGodGreetings>
            <DetailGreeting>
                <span> 이 챌린지는 &nbsp; </span>
                <div> 인증 사진 </div>
                <span> 을 올려야 하고, 그룹원 &nbsp; </span>
                <div> 과반수가 반대 </div>
                <span> 하면 인증 사진으로 채택될 수 없어요! </span>
            </DetailGreeting>
        </Wrapper>
    );
}

export default GuideDIYPhoto;

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
    right: 188px;
`;

const CurrentPage = styled.div`
    position: absolute;
    font-size: 20px;
    right: 127px;
`;

const NextArrow = styled.div`
    position: absolute;
    cursor: pointer;
    right: 95px;
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