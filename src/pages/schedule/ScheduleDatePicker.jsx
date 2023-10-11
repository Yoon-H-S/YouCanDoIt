import React, { forwardRef } from 'react';
import { ko } from 'date-fns/esm/locale';
import styled from 'styled-components';

import * as S from 'styles/DatePickerStyle';

function ScheduleDatePicker(props) {
	const { startDate, endDate, selectDate, dateChange, type } = props; // type : 2 = 기간선택(시작), 3 = 기간선택(종료)

	const CustomInput = forwardRef(({ value, onClick }, ref) => (
		<CustomInputDiv onClick={onClick} ref={ref}>
		  	{value}
		</CustomInputDiv>
	));

	let calendarProps = {
		showPopperArrow: false,
		fixedHeight: true,
		dateFormat: "M월 d일 (eee)",
		locale: ko,
		closeOnScroll: true,
		startDate: startDate,
		endDate: endDate,
		selected: selectDate,
		customInput: <CustomInput />,
		onChange: (date) => dateChange(date),
		renderCustomHeader: ({ date, decreaseMonth, increaseMonth, prevMonthButtonDisabled, nextMonthButtonDisabled }) => (
			<S.CustomHeader>
				<button
					onClick={decreaseMonth}
					disabled={prevMonthButtonDisabled}>
					{'<'}
				</button>
				<div>
					{date.getFullYear()}년 {date.getMonth() + 1}월
				</div>
				<button
					onClick={increaseMonth}
					disabled={nextMonthButtonDisabled}>
					{'>'}
				</button>
			</S.CustomHeader>
		),
	};

	switch (type) {
		case 2:
			calendarProps['selectsStart'] = true;
			break;
		case 3:
			calendarProps['selectsEnd'] = true;
			break;
	}

	return (
		<S.Calender>
			<S.CustomDatePicker {...calendarProps} />
		</S.Calender>
	);
}

export default ScheduleDatePicker;

const CustomInputDiv = styled.div`
	display: flex;
	align-items: center;
	height: 100%;
	font-size: 12px;
	cursor: pointer;
`;
