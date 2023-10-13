import styled from 'styled-components';
import CustomCalendar from './CustomCalendar';
import '../../../node_modules/react-calendar/dist/Calendar.css';

function CalendarMain(props) {
	return (
		<Wrapper>
			<InfoArea>
				<CustomCalendar changeDate={props.changeDate} isAdd={props.isAdd} />
			</InfoArea>
		</Wrapper>
	);
}

export default CalendarMain;

// 챌린지 랭킹 페이지 틀
const Wrapper = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	height: 100%;
`;

// // 상단 챌린지 주제 영역
// const Title = styled.div`
// 	position: relative;
// 	display: flex;
// 	align-items: center;
// 	justify-content: center;
// 	width: 100%;
// 	height: 50px;
// 	background-color: #dca600;
// 	z-index: 2;

// 	& > span {
// 		font-size: 16px;
// 		font-weight: 500;
// 		color: white;
// 		cursor: default;

// 		& > span {
// 			font-size: 10px;
// 			font-weight: 300;
// 		}
// 	}

// 	& > .back {
// 		position: absolute;
// 		left: 45px;
// 		color: white;
// 		cursor: pointer;
// 	}

// 	& > .gallery {
// 		position: absolute;
// 		right: 45px;
// 		color: white;
// 		cursor: pointer;
// 	}
// `;

// 본문 영역. 스크롤되는 영역
const InfoArea = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	height: 422px;
	background-color: white;
	overflow-y: scroll;

	::-webkit-scrollbar {
		width: 0px;
	}
`;
