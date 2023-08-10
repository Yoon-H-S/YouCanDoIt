import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

import thumbsDown from 'assets/thumbs-down.png';
import im from 'assets/testImg/calender.png';

function DiyGalleryDetails(props) {

    return(
        <Wrapper>
            <Title>
                <FontAwesomeIcon className='back' icon={faChevronLeft}/>
                <span>손나은</span>
            </Title>
            <Image opposite={true}>
                <img src={im} />
                <div className='thumbsDown'>
                    <div><img src={thumbsDown} /></div>
                    <span>반대합니다. (0)</span>
                </div>
                <span className='date'>2023 - 03 - 27</span>
            </Image>
        </Wrapper>
    );
}

export default DiyGalleryDetails;

const Wrapper = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: #FFF9BF;
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
    }

    & > .back {
        position: absolute;
        left: 45px;
        color: white;
        cursor: pointer;
    }
`;

const Image = styled.div`
    position: relative;
    width: 465.5px;
    height: 299px;
    margin-top: 40px;

    & > img {
        width: 100%;
        height: 100%;
    }

    & > .thumbsDown {
        position: absolute;
        left: 10px;
        top: 10px;
        display: flex;
        align-items: center;
        justify-content: center;

        & > div {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 20px;
            height: 20px;
            border: 1px solid #B1B1B1;
            background-color: ${(props) => (props.opposite ? 'black' : 'white')};
            border-radius: 20px;

            & > img {
                width: 50%;
                height: 50%;
            }
        }

        & > span {
            margin-left: 7px;
            font-size: 10px;
        }
    }

    & > .date {
        position: absolute;
        right: 12px;
        top: 13px;
        font-size: 10px;
    }
`;

