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
	overflow: hidden;
`;

// 그룹 생성하기 타이틀 영역
const Title = styled.div`
	position: relative;
	top: 5px;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 50px;
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
