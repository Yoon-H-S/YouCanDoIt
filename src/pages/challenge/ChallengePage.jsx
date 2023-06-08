import React, { useState } from 'react';
import Page from 'pages/Page';
import styled from 'styled-components';

import RankingMain from './RankingMain';
import RankingDetails from './RankingDetails';
import CreateGroup from './CreateGroup';
import ChallengeMain from './ChallengeMain';
import GodChallengeDetail from './GodChallengeDetail';

function ChallengePage(props) {
	const [groupNumber, setGroupNumber] = useState(0); // 상세랭킹의 그룹넘버
    const [isDaily, setIsDaily] = useState(true); // 일일랭킹 or 누적랭킹
	const [isDetails, setIsDetails] = useState(false); // 상세랭킹을 띄우기 위한 정보
	const [isGodChallenge, setIsGodChallenge] = useState(false); // 갓생챌린지 상세보기를 띄우기 위한 정보
	const [godChallengeSubject, setGodChallengeSubject] = useState(); // 갓생챌린지 상세보기의 주제
	const [isCreateGroup, setIsCreateGroup] = useState(false); // 그룹생성을 띄우기 위한 정보

	const dailyChange = (daily) => {
		setIsDaily(daily);
	}

    const GNChange = (e) => {
        setGroupNumber(e.currentTarget.id);
		setIsDetails(true);
    }

	const detailClose = () => {
		setGroupNumber(0);
		setIsDetails(false);
	}

	const GCSChange = (e) => {
		setGodChallengeSubject(e.currentTarget.id);
		setIsGodChallenge(true);
	}

	const godChallengeClose = () => {
		setGodChallengeSubject(null);
		setIsGodChallenge(false);
	}

	const CGChange = () => {
		setIsCreateGroup(true);
	}

	const createGroupClose = () => {
		setIsCreateGroup(false);
	}

	return (
		<Page>
			<LeftContent>
				<RankingMain handleChange={GNChange} isDaily={isDaily} dailyChange={dailyChange} />
				{isDetails && <RankingDetails groupNumber={groupNumber} isDaily={isDaily} close={detailClose} />}
			</LeftContent>
			<MiddleLine />
			<RightContent>
				<ChallengeMain handleChange={GCSChange} />
				{isGodChallenge && <GodChallengeDetail handleChange={CGChange} subject={godChallengeSubject} close={godChallengeClose} />}
				{isCreateGroup && <CreateGroup subject={godChallengeSubject} close={createGroupClose} />}
			</RightContent>
		</Page>
	);
}

export default ChallengePage;

// 좌측 페이지 영역
const LeftContent = styled.div`
	position: relative;
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
	position: relative;
	width: 555.5px;
	height: 422px;
	background-color: white;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;
