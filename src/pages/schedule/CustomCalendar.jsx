import React, { useState } from 'react';
import Calendar from 'react-calendar';
import styled from 'styled-components';
import 'react-calendar/dist/Calendar.css';
import '../../styles/CalendarStyle.css'; //캘린더 커스텀
import moment from 'moment/moment';

// https://velog.io/@pikadev1771/react-calendar-%EC%BB%A4%EC%8A%A4%ED%85%80%ED%95%98%EA%B8%B0-%EB%82%A0%EC%A7%9C-%EB%B3%80%ED%99%98-%ED%98%84%EC%9E%AC-%EB%8B%AC-%EA%B5%AC%ED%95%98%EA%B8%B0-%EC%BD%98%ED%85%90%EC%B8%A0-%EC%B6%94%EA%B0%80%ED%95%98%EA%B8%B0

const CustomCalendar = () => {
	//기본적으로 캘린더가 선택할 수 있게 넣어줄 value이다.
	//value 값만 표시하게 할 게 아니라면 나중에 수정해주거나 지워주자.
	const curDate = new Date(); // 현재 날짜
	const [value, onChange] = useState(curDate); // 클릭한 날짜 (초기값으로 현재 날짜 넣어줌)
	console.log('클릭한 날짜 (value):' + value);
	const activeDate = moment(value).format('YYYY-MM-DD'); // 클릭한 날짜 (년-월-일))
	const monthOfActiveDate = moment(value).format('YYYY-MM');
	const [activeMonth, setActiveMonth] = useState(monthOfActiveDate);

	//받아온 인자(activStartDate)에 따라 현재 보여지는 달(activeMonth)의 state를 변경하는 함수
	const getActiveMonth = (activeStartDate: moment.MomentInput) => {
		const newActiveMonth = moment(activeStartDate).format('YYYY-MM');
		setActiveMonth(newActiveMonth);
	};

	// 일기 작성 날짜 리스트
	const dayList = ['2023-09-10', '2023-09-21', '2023-10-02', '2023-09-14', '2023-10-27'];

	// 각 날짜 타일에 컨텐츠 추가
	const addContent = ({ value }) => {
		// 해당 날짜(하루)에 추가할 컨텐츠의 배열
		const contents = [];

		// date(각 날짜)가  리스트의 날짜와 일치하면 해당 컨텐츠(이모티콘) 추가
		if (dayList.find((day) => day === moment(value).format('YYYY-MM-DD'))) {
			contents.push(
				<>
					{/* <div className="dot"></div> */}
					<Todo />
				</>
			);
		}
		return <div>{contents}</div>; // 각 날짜마다 해당 요소가 들어감
	};

	return (
		<Wrap>
			<Calendar
				onChange={onChange}
				value={value}
				calendarType="US"
				next2Label={null}
				prev2Label={null}
				minDetail="year"
				showFixedNumberOfWeeks
				formatDay={(locale, date) => moment(date).format('DD')}
				onActiveStartDateChange={({ activeStartDate }) => getActiveMonth(activeStartDate)}
			/>
		</Wrap>
	);
};

export default CustomCalendar;

const Wrap = styled.div``;

const Todo = styled.div`
	width: 10px;
	height: 5px;
	background-color: #cb7300;
`;
