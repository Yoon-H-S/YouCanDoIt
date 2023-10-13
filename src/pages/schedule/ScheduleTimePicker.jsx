import React from 'react';
import { ko } from 'date-fns/esm/locale';

import * as S from 'styles/TimePickerStyle';

function ScheduleTimePicker(props) {
	const { startTime, endTime, selectTime, timeChange, type } = props; // type : 2 = 시간선택(시작), 3 = 시간선택(종료)

	let calendarProps = {
		selected: selectTime,
        startDate: startTime,
        endDate: endTime,
        showTimeSelect: true,
        showTimeSelectOnly: true,
        locale: ko,
        timeIntervals: 10,
        dateFormat: "HH:mm",
        timeFormat: "HH:mm",
        onChange: (date) => timeChange(date)
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
			<S.CustomTimePicker {...calendarProps} />
		</S.Calender>
	);
}

export default ScheduleTimePicker;