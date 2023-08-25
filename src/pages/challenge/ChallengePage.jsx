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
    const [rankingType, setRankingType] = useState(1); // 랭킹종류. 1: 갓생일일, 2: 갓생누적, 3: DIY, 4: 종료
	const [isDetails, setIsDetails] = useState(false); // 상세랭킹을 띄우기 위한 정보

	const [isGodChallenge, setIsGodChallenge] = useState(false); // 갓생챌린지 상세보기를 띄우기 위한 정보
	const [challengeType, setChallengeType] = useState(); // 0이라면 DIY챌린지 생성, 문자열이라면 갓생챌린지 상세보기의 주제
	const [isCreateGroup, setIsCreateGroup] = useState(false); // 그룹생성을 띄우기 위한 정보

	/** 랭킹종류 변경 */
	const typeChange = (type) => {
		setRankingType(type);
	}

	/** 상세랭킹 그룹 변경 */
    const GNChange = (groupNumber) => {
        setGroupNumber(groupNumber);
		setIsDetails(true);
    }

	/** 상세랭킹 닫기 */
	const detailClose = () => {
		setGroupNumber(0);
		setIsDetails(false);
	}

	/** 갓생챌린지 열기 or diy챌린지 생성 열기 */
	const ChallengeTypeChange = (type) => {
		setChallengeType(type);
		if(type === null) {
			setIsCreateGroup(true);
		} else {
			setIsGodChallenge(true);
		}
	}

	/** 갓생챌린지 닫기 */
	const godChallengeClose = () => {
		setChallengeType(null);
		setIsGodChallenge(false);
	}

	/** 갓생챌린지 생성 열기 */
	const CGChange = () => {
		setIsCreateGroup(true);
	}

	/** 챌린지 생성 닫기 */
	const createGroupClose = () => {
		setIsCreateGroup(false);
	}

	return (
		<Page>
			<LeftContent>
				<RankingMain handleChange={GNChange} rankingType={rankingType} typeChange={typeChange} />
				{isDetails && <RankingDetails groupNumber={groupNumber} rankingType={rankingType} close={detailClose} />}
			</LeftContent>
			<MiddleLine />
			<RightContent>
				<ChallengeMain handleChange={ChallengeTypeChange} />
				{isGodChallenge && <GodChallengeDetail handleChange={CGChange} challengeType={challengeType} close={godChallengeClose} />}
				{isCreateGroup && <CreateGroup challengeType={challengeType} close={createGroupClose} />}
			</RightContent>
		</Page>
	);
}

export default ChallengePage;

/** 좌측 페이지 영역 */
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
