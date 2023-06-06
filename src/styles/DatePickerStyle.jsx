import styled from 'styled-components';
import DatePicker from 'react-datepicker';

// 캘린더
export const Calender = styled.div`
	width: 106px;
	height: 24px;

	// 날짜의 클래스들
	// 캘린더 아이콘
	svg {
		height: 10px;
		padding: 0 !important;
		left: 4px;
	}

	// 날짜 영역
	.react-datepicker-wrapper,
	.react-datepicker__input-container {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	// 날짜 선택했을 때
	.react-datepicker-ignore-onclickoutside {
		background-color: #e3e3e3;
	}

	// 캘린더의 클래스들
	// 캘린더 영역
	.react-datepicker-popper {
		width: 277px;
		height: 241px;
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
		font-size: 10px;
		border: 1px solid #b1b1b1;
		border-radius: 5px;
		box-shadow: 3px 3px 10px 0 rgba(0, 0, 0, 0.25);
		overflow: hidden;
	}

	// 캘린더 틀 내부
	.react-datepicker__month-container {
		float: none;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	// 캘린더 헤더 영역
	.react-datepicker__header {
		width: 240px;
		height: 63px;
		background-color: white;
		border-bottom: none;
		padding: 11px 0 0 0;
	}

	// 캘린더 요일 영역
	.react-datepicker__day-names {
		display: flex;
		align-items: center;
		justify-content: space-around;
		margin-bottom: 0px;
	}

	// 각 요일들과 각 날짜들
	.react-datepicker__day-name,
	.react-datepicker__day {
		width: 23px;
		height: 23px;
		line-height: normal;

		:nth-child(1) {
			color: red;
		}

		:nth-child(7) {
			color: #0029ff;
		}
	}

	// 캘린더 달 영역
	.react-datepicker__month {
		width: 240px;
		margin: 0;
	}

	// 캘린더 각 주 영역
	.react-datepicker__week {
		border-top: 1px solid #eeeeee;
		display: flex;
		align-items: center;
		justify-content: space-around;
		margin-bottom: 1px;
	}

	// 선택된 날짜
	.react-datepicker__day--selected {
		background-color: #ffcb65;
		color: black !important;
	}

	// 선택된 범위
	.react-datepicker__day--in-selecting-range,
	.react-datepicker__day--in-range {
		background-color: #ffcb65 !important;
		border-radius: 7px !important;
	}

	// 선택된 날짜의 다른달
	.react-datepicker__day--keyboard-selected {
		background-color: rgba(255, 203, 101, 0.4);
	}

	// 보여지는 달 외의 날짜
	.react-datepicker__day--outside-month {
		opacity: 0.6;
		pointer-events: none;
	}

	// 비활성화된 날짜
	.react-datepicker__day--disabled {
		color: #cccccc !important;
	}
`;

export const CustomDatePicker = styled(DatePicker)`
	width: 100%;
	height: 100%;
	font-size: 10px;
	border: 1px solid #b1b1b1;
	border-radius: 5px;
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
