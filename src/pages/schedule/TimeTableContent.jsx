import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

function TimeTableContent(props) {
    const [content, setContent] = useState([]);
	const [ttStartTime,setTtStartTime] = useState(9); //타임테이블 시작 시각.
	const [ttEndTime, setTtEndTime] = useState(24); // 타임테이블 마지막 시간

    useEffect(() => {
        axios.get('/api/schedule-api/time-table')
		.then(function (response) {
			if(response.data.length > 0) {
				setContent(response.data);
				setTtStartTime(response.data[0]?.hour);
				if(response.data[0]?.hour + 12 > response.data[response.data.length - 1]?.hour) {
					setTtEndTime(response.data[0]?.hour + 12);
				} else {
					setTtEndTime(response.data[response.data.length - 1]?.hour);
				}
				
			}
			
		}).catch(
			(error) => console.log(error)
		);
    },[props.isAdd]);


    /* 
		<타임 테이블>
		1. 타임 테이블의 시작 시간 , 끝시간 설정 하는 법 ex)5시 부터 24시까지 보여주기 
			- repeateTime(), repeateScheduleTime() 함수 인자 둘다 수정!
		2. 일정 시간 타임테이블에 표시하는 법
			- <MarkTime> 컴포넌트 속성에 hour, minute, start_time 설정
			* minute: 타임테이블에 표시해야 하는 일정 시간 길이(ex 30분 = 30)
			* start_time: 타임테이블에서 표시할 시작시간(ex 8:20분부터 = 20)
	
	*/

	//타임테이블의 시간을 반복문을 통하여 출력
	//a,b는 오늘의 일정에서 첫 시간(a)과 끝 시간을 받아옴.
	function repeatTime() {
		let arr = [];
		for (let i = ttStartTime; i <= ttEndTime; i++) {
			arr.push(
				<Time>
					<span>{i}</span>
				</Time>
			);
		}
		return arr;
	}

	//타임테이블에 표시되는 일정시간을 반복문을 통하여 출력
	//a,b는 오늘의 일정에서 첫 시간(a)과 끝 시간을 받아옴.

	function repeatScheduleTime() {
		let arr = [];
		for (let i = ttStartTime; i <= ttEndTime; i++) {
			arr.push(
				<Range>
					<Time_unit></Time_unit>
					<Time_unit></Time_unit>
					<Time_unit></Time_unit>
					<Time_unit></Time_unit>
					<Time_unit></Time_unit>
					<Time_unit></Time_unit>
				</Range>
			);
		}
		return arr;
	}

	//타임테이블에 일정시간을 표시해줄 컴포넌트
	//minute: 타임테이블에 표시해야 하는 일정 시간 길이(ex 30분 = 30)
	//start_time: 타임테이블에서 표시할 시작시간(ex 8:20분부터 = 20)
	function MarkTime(props) {
		console.log(props.start_time);
		let x_position, y_position;

		// 타임테이블의 몇번 째 줄인지 구하는 규칙 : hour - tt_start_time +1
		// y좌표 구하는 규칙 : 7 + 28 * (몇번째 - 1 )

		y_position = 7 + 28 * (props.hour - ttStartTime);
		console.log('y_position:' + y_position);

		// start_time에 따라 css에서 left값을 지정함(좌표같은 개념)
		switch (props.start_time) {
			case 0:
				x_position = 28;
				break;
			case 10:
				x_position = 54.2;
				break;
			case 20:
				x_position = 80.6;
				break;
			case 30:
				x_position = 106.3;
				break;
			case 40:
				x_position = 132.6;
				break;
			case 50:
				x_position = 158.6;
				break;
			default:
				x_position = 28;
		}
		console.log('x_position: ' + x_position);
		return (
			<div>
				<Time_range
					hour={props.hour}
					minute={props.minute}
					x_position={x_position}
					y_position={y_position}></Time_range>
			</div>
		);
	}

    return(
        <>
            <TTable_Times>{repeatTime()}</TTable_Times>
			<TTable_range>{repeatScheduleTime()}</TTable_range>
            {content.length > 0 && content?.map((value, index) => {
                return(
                    <MarkTime
                        key={index}
                        hour={value.hour}
                        minute={value.minute}
                        start_time={value.startTime}
                    />
                );
            })}
        </>
    );
}

export default TimeTableContent;

const TTable_Times = styled.div`
	width: 28px;
	padding-bottom: 1px;
`;

const Time = styled.div`
	width: 28px;
	height: 28px;
	border-top: 1px dotted #cacaca;
	border-right: 1.6px solid #b1b1b1;
	background-color: white;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 12px;
	:first-child {
		border-top: none;
	}
`;

const TTable_range = styled.div`
	width: 158px;
	height: auto;
`;

const Range = styled.div`
	width: 158px;
	height: 28px;
	border-top: 1px dotted #cacaca;
	display: flex;
	justify-content: center;
	align-items: center;
	:first-child {
		border-top: none;
	}
`;

const Time_range = styled.div`
	/* width: 100px; */
	width: ${(props) => `${158 * (props.minute / 60)}px`};
	height: 13px;
	background-color: #ffb1b1b2;
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	/* left: 106.3px; */
	left: ${(props) => `${props.x_position}px`};
	/* top: 35px; */
	top: ${(props) => `${props.y_position}px`};
`;

const Time_unit = styled.div`
	width: calc(158px / 6);
	height: 28px;
	border-right: 1px dotted #cacaca;
	:last-child {
		border-top: none;
	}
`;