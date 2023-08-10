import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

import thumbsDown from 'assets/thumbs-down.png';
import im from 'assets/testImg/calender.png';

function DiyGallery(props) {

    var test = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];

    return(
        <Wrapper>
            <Title>
                <FontAwesomeIcon className='back' icon={faChevronLeft}/>
                <span>갤러리 <span>(최신순)</span></span>
            </Title>
            <ImageArea>
                <GroupBar>
                    <GroupName>그룹이름</GroupName>
                </GroupBar>
                <ImageList>
                    {test.map(() => {
                        return(
                            <Image opposite={true}>
                                <img src={im} />
                                <div><img src={thumbsDown} /></div>
                            </Image>
                        );
                    })}
                </ImageList>
            </ImageArea>
        </Wrapper>
    );
}

export default DiyGallery;

const Wrapper = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

const Title = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 50px;
    background-color: #DCA600;
    z-index: 2;

    & > span {
        font-size: 16px;
        font-weight: 500;
        color: white;
        cursor: default;

        & > span {
            font-size: 10px;
            font-weight: 300;
        }
    }

    & > .back {
        position: absolute;
        left: 45px;
        color: white;
        cursor: pointer;
    }
`;

// 갤러리 영역. 스크롤되는 영역
const ImageArea = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 28px 0;
    width: 100%;
    height: 372px; 
    background-color: #FFF9BF;
    overflow-y: scroll;

    ::-webkit-scrollbar {
        width: 0px;
    }
`;

// 그룹 이름이 들어가는 영역
const GroupBar = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 465px;
    height: 24px;
    margin-bottom: 13px;
`;

// 그룹 이름
const GroupName = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: max-content;
    height: 100%;
    padding: 0 12px;
    border-radius: 5px;
    background-color: #FFCB65;
    font-size: 10px;
`;

// 이미지 리스트
const ImageList = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 465px;
`;

const Image = styled.div`
    position: relative;
    width: 95px;
    height: 95px;
    margin-bottom: 25px;

    :not(:nth-child(4n)) {
        margin-right: 28px;
    }

    & > img {
        width: 100%;
        height: 100%;
    }

    & > div {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 11px;
        height: 11px;
        border: 0.5px solid #B1B1B1;
        background-color: ${(props) => (props.opposite ? 'black' : 'white')};
        border-radius: 11px;
        position: absolute;
        left: 5px;
        top: 5px;

        & > img {
            width: 50%;
            height: 50%;
        }
    }
`;

