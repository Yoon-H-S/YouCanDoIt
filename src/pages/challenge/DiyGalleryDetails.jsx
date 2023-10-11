import React from 'react';
import styled from 'styled-components';

import thumbsDown from 'assets/challenge/thumbs-down.png';

function DiyGalleryDetails(props) {
    const {imageInfo, opposite} = props;

    return(
        <>
            <SelectImage opposite={imageInfo[1]}>
                <img src={imageInfo[0]["certifyImage"]} />
                <div className='thumbsDown'>
                    <div onClick={opposite}><img src={thumbsDown} /></div>
                    <span>{imageInfo[1] ? "반대하였습니다." : "반대합니다."} (<span>{imageInfo[0]["oppositeCount"]}</span>)</span>
                </div>
                <span className='date'>{imageInfo[0]["certifyDate"]}</span>
            </SelectImage>
        </>
    );
}

export default DiyGalleryDetails;

const SelectImage = styled.div`
    position: relative;
    width: 465.5px;
    height: 299px;
    margin-top: 12px;

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
            background-color: ${(props) => (props.opposite ? 'black' : 'white')};
            border-radius: 20px;
            cursor: ${(props) => (props.opposite ? 'default' : 'pointer')};

            & > img {
                width: 50%;
                height: 50%;
            }
        }

        & > span {
            margin-left: 7px;
            font-size: 10px;

            & > span {
                color: ${(props) => (props.opposite ? 'red' : 'black')};
            }
        }
    }

    & > .date {
        position: absolute;
        right: 12px;
        top: 13px;
        font-size: 10px;
    }
`;

