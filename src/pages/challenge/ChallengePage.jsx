import React, { useState } from 'react';
import Page from 'pages/Page';
import styled from 'styled-components';

function ChallengePage(props) {
    return(
        <Page>
            <LeftContent>

            </LeftContent>
            <MiddleLine />
            <RightContent>

            </RightContent>
        </Page>
    );
}

export default ChallengePage;

// 좌측 페이지 영역
const LeftContent = styled.div`
    width: 555.5px;
    height: 422px;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

// 중간 라인
const MiddleLine = styled.div`
    width: 0px;
    height: 422px;
    border-left: 1px solid black;
    margin-left: 43px;
    margin-right: 43px;
`;

// 우측 페이지 영역
const RightContent = styled.div`
    width: 555.5px;
    height: 422px;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;