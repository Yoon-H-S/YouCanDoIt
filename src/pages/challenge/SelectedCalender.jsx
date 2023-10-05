import React from 'react';
import { ko } from 'date-fns/esm/locale';

import * as S from 'styles/DatePickerStyle';

function SelectedCalender(props) {
	const today = new Date();
	const { startDate, endDate, selectDate, dateChange, type } = props; // type : 1 = 날짜선택, 2 = 기간선택(시작), 3 = 기간선택(종료)

	let calendarProps = {
		showIcon: true,
		showPopperArrow: false,
		fixedHeight: true,
		dateFormat: 'yyyy - MM - dd',
		minDate: startDate,
		locale: ko,
		closeOnScroll: true,
		selected: selectDate,
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
		case 1:
			calendarProps['maxDate'] = today;
			break;
		case 2:
			calendarProps['minDate'] = new Date(today.setDate(today.getDate() + 1));
			calendarProps['selectsStart'] = true;
			calendarProps['startDate'] = startDate;
			calendarProps['endDate'] = endDate;
			break;
		case 3:
			calendarProps['selectsEnd'] = true;
			calendarProps['startDate'] = startDate;
			calendarProps['endDate'] = endDate;
			break;
	}

	return (
		<S.Calender>
			<S.CustomDatePicker {...calendarProps} />
		</S.Calender>
	);
}

export default SelectedCalender;
