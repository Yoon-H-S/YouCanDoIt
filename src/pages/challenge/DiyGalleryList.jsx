import React from 'react';
import styled from 'styled-components';

import thumbsDown from 'assets/thumbs-down.png';

function DiyGalleryList(props) {
    const {galleryInfo, imageSelect} = props;

    return(
        <>
            <ImageList>
                {galleryInfo.length > 0 && galleryInfo.map((value, index) => {
                    return(
                        <Image key={index} opposite={value[1]} onClick={() => imageSelect(index)}>
                            <img src={value[0]["certifyImage"]} />
                            <div><img src={thumbsDown} /></div>
                        </Image>
                    );
                })}
            </ImageList>
        </>
    );
}

export default DiyGalleryList;

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