import styled from 'styled-components';
import DatePicker from 'react-datepicker';

// 캘린더
export const Calender = styled.div`
	width: 30px;
	height: 17px;

	// 시간 영역
	.react-datepicker-wrapper,
	.react-datepicker__input-container {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;

        input {
            cursor: pointer;
        }
	}

	// 캘린더 영역
	.react-datepicker-popper {
		padding-top: 3px !important;

		& > div {
			width: 100%;
			height: 100%;
		}
	}

	// 캘린더 틀
	.react-datepicker {
		width: 100%;
		height: 100%;
		font-family: 'Noto Sans KR', sans-serif;
		font-size: 12px;
		border: 1px solid #b1b1b1;
		border-radius: 5px;
		box-shadow: 3px 3px 10px 0 rgba(0, 0, 0, 0.25);
		overflow: hidden;
	}

	// 캘린더 헤더 영역
	.react-datepicker__header {
		display: none;
	}

	// 시간 리스트
	.react-datepicker__time-list {
		/*스크롤바의 너비*/
		::-webkit-scrollbar {
			width: 7px; 
		}

		/*스크롤바의 색상*/
		::-webkit-scrollbar-thumb {
			background-color: var(--primary-color);
			border-radius: 7px;
		}

		/*스크롤바 트랙 색상*/
		::-webkit-scrollbar-track {
			background-color: #E1E1E1; 
		}
	}

	// 선택된 시간
	.react-datepicker__time-list-item--selected {
		background-color: #ffcb65 !important;
		color: black !important;
	}

	
`;

export const CustomTimePicker = styled(DatePicker)`
	width: 100%;
	height: 100%;
	font-size: 12px;
	border: none;
`;

export const CustomHeader = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	padding-bottom: 8px;

	& > div {
		font-size: 12px;
		margin: 0 30px;
	}

	& > button {
		background-color: white;
		border: none;
		font-size: 16px;
		cursor: pointer;

		&:disabled {
			cursor: default;
		}
	}
`;
