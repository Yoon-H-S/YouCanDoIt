import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import 'react-datepicker/dist/react-datepicker.css';

import Button from 'components/ui/Button';

function GodChallengeDetail(props) {
	return (
		<Wrapper>
			<Title>
				<FontAwesomeIcon icon={faChevronLeft} />
				<span>갓생 챌린지</span>
			</Title>
			<GodDetail>
				<Picture />
				<GodTitle> (N주) N보 걷기 </GodTitle>
				<GodContent> 습관 기르기 프로젝트! <br /> N주 동안 걷고 습관 기르자. <br /> 습과 기르면서 N보 이상 걸으면서 운동하면 건강도 관리하고 일석이조 <br /> 지인과 함께 챌린지 그룹을 만들고 랭킹에 참여하세요! </GodContent>
				<Keword>
					<OneKey> 매일 </OneKey>
					<TwoKey> N주 동안 </TwoKey>
					<ThreeKey> 꾸준히 </ThreeKey>
				</Keword>
				<Button
					width = "63px"
					height = "23px"
					title = "생성하기"
					color = "#0077E4"
				/>
			</GodDetail>
		</Wrapper>
	);
}

export default GodChallengeDetail;

// 갓생 챌린지 - 그룹 생성하기 틀
const Wrapper = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	height: 100%;
`;

// 그룹 생성하기 타이틀 영역
const Title = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 65px;
	z-index: 2;

	& > span {
		font-size: 16px;
		font-weight: 700;
		color: black;
		cursor: default;
		border-bottom: 3px solid #dca600;
	}

	& > svg {
		position: absolute;
		left: 45px;
		color: black;
	}
`;

const GodDetail = styled.div`
	position: relative;
	flex-direction: column;
	align-items: center;
	width: 465.5px;
	height: 332px;
	border-radius: 10px;

	& > Button {
		margin-top: 11px;
		margin-left: auto;
	}
`;

const Picture = styled.div`
	width: 465.5px;
	height: 120px;
	border: 1px solid #B1B1B1;
	border-radius: 10px;
	margin-bottom: 15px;
`;

const GodTitle = styled.div`
	font-size: 14px;
	font-weight: bold;
	padding-bottom: 15px;
	border-bottom: 1px solid #B1B1B1;
`;

const GodContent = styled.div`
	font-size: 12px;
	padding: 10px 10px;
	border-bottom: 1px solid #B1B1B1;
`;

const Keword = styled.div`
	display: flex;
	font-size: 11px;
	margin-top: 10px;
`;

const OneKey = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 37px;
	height: 24px;
	border-radius: 5px;
	background-color: #D9D9D9;
	margin-right: 8px;
`;

const TwoKey = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 58px;
	height: 24px;
	border-radius: 5px;
	background-color: #D9D9D9;
	margin-right: 8px;
`;

const ThreeKey = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 47px;
	height: 24px;
	border-radius: 5px;
	background-color: #D9D9D9;
`;
