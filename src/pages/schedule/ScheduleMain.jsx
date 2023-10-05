import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { de } from 'date-fns/locale';

function ScheduleMain(props) {
	const { handleChange } = props;
	const [isChecked, setIsChecked] = useState(false);

	const onClickCheck = () => {
		setIsChecked(!isChecked);
		console.log(!isChecked);
	};

	//타임테이블의 시간을 반복문을 통하여 출력
	//a,b는 오늘의 일정에서 첫 시간(a)과 끝 시간을 받아옴.
	function repeatTime(a, b) {
		let arr = [];
		for (let i = a; i < b + 1; i++) {
			arr.push(
				<Time>
					<span>{a}</span>
				</Time>
			);
			a++;
		}
		return arr;
	}

	//타임테이블에 표시되는 일정시간을 반복문을 통하여 출력
	//a,b는 오늘의 일정에서 첫 시간(a)과 끝 시간을 받아옴.

	function repeatScheduleTime(a, b, c) {
		let arr = [];
		for (let i = a; i < b + 1; i++) {
			arr.push(
				<Range>
					{/* <Time_range time={c} /> */}
					{/* <Time_range time={c}> */}
					<Time_unit></Time_unit>
					<Time_unit></Time_unit>
					<Time_unit></Time_unit>
					<Time_unit></Time_unit>
					<Time_unit></Time_unit>
					<Time_unit></Time_unit>
					{/* </Time_range> */}
				</Range>
			);
			a++;
		}
		return arr;
	}

	//타임테이블에 일정시간을 표시해줄 컴포넌트
	//minute: 타임테이블에 표시해야 하는 일정 시간 길이(ex 30분 = 30)
	//start_time: 타임테이블에서 표시할 시작시간(ex 8:20분부터 = 20)
	function MarkTime(props) {
		console.log(props.start_time);
		let x_position; // start_time에 따라 css에서 left값을 지정함(좌표같은 개념)
		switch (props.start_time) {
			case 0:
				x_position = -158;
				break;
			case 10:
				x_position = -132;
				break;
			case 20:
				x_position = -106;
				break;
			case 30:
				x_position = -80;
				break;
			case 40:
				x_position = -53;
				break;
			case 50:
				x_position = -27;
				break;
			default:
				x_position = -158;
		}
		console.log(x_position);
		return (
			<div>
				<Time_range
					minute={props.minute}
					x_position={x_position}></Time_range>
			</div>
		);
	}

	return (
		<Schedule>
			<TimeTable>
				<TimeTable_Title>
					<span> 타임 테이블 </span>
				</TimeTable_Title>
				<TTable>
					<TTable_Times>{repeatTime(7, 19)}</TTable_Times>
					<TTable_range>{repeatScheduleTime(7, 19, 3)}</TTable_range>
					<MarkTime
						minute={30}
						start_time={20}
					/>
				</TTable>
			</TimeTable>
			<MiddleLine />
			<ToSoon_Schedule>
				<TodayTitle>
					<span> 오늘의 일정 </span>
					<FontAwesomeIcon
						icon={faPlus}
						onClick={() => handleChange(null)}
					/>
				</TodayTitle>
				<ToTable>
					<ToDetail>
						<ToTime>
							<StartTime> 08:30 </StartTime>
							<LastTime> 10:30 </LastTime>
						</ToTime>
						<ToDivisionLine />
						<ToTitle>
							<ToTitle_Detail>
								<Schedule_Title> 개발 스터디 </Schedule_Title>
								<input
									type="checkbox"
									id="toinput"
								/>
							</ToTitle_Detail>
							<ToTitleLine />
						</ToTitle>
					</ToDetail>
					<ToDetail>
						<ToTime>
							<StartTime> - </StartTime>
							<LastTime />
						</ToTime>
						<ToDivisionLine />
						<ToTitle>
							<ToTitle_Detail>
								<Schedule_Title> 친구 약속 </Schedule_Title>
								<input
									type="checkbox"
									id="toinput"
								/>
							</ToTitle_Detail>
							<ToTitleLine />
						</ToTitle>
					</ToDetail>
					<ToDetail>
						<ToTime>
							<StartTime> 16:00 </StartTime>
							<LastTime> 17:30 </LastTime>
						</ToTime>
						<ToDivisionLine />
						<ToTitle>
							<ToTitle_Detail>
								<Schedule_Title> 영어 1단원 풀기 </Schedule_Title>
								<input
									type="checkbox"
									id="toinput"
								/>
							</ToTitle_Detail>
							<ToTitleLine />
						</ToTitle>
					</ToDetail>
					<ToDetail>
						<ToTime>
							<StartTime> 18:00 </StartTime>
							<LastTime> 19:30 </LastTime>
						</ToTime>
						<ToDivisionLine />
						<ToTitle>
							<ToTitle_Detail>
								<Schedule_Title> 가족 일정 </Schedule_Title>
								<input
									type="checkbox"
									id="toinput"
								/>
							</ToTitle_Detail>
							<ToTitleLine />
						</ToTitle>
					</ToDetail>
					{/* <ToMiddleLine /> */}
				</ToTable>

				<ScheMiddleLine />
				<SoonTitle>
					<span> 다가오는 일정 </span>
				</SoonTitle>

				<SoonTable>
					<Soon_Detail>
						<span> 4/5 </span>
						<Soon>
							<Detail>
								<SoonTime>
									<StartTime> 08:30 </StartTime>
									<LastTime> 10:30 </LastTime>
								</SoonTime>
								<DivisionLine />
								<Schedule_Title> 개발 스터디 </Schedule_Title>
							</Detail>
							<DetailLine />
							<Detail>
								<SoonTime>
									<StartTime> 13:00 </StartTime>
									<LastTime> 15:30 </LastTime>
								</SoonTime>
								<DivisionLine />
								<Schedule_Title> 면허 필기 공부 </Schedule_Title>
							</Detail>
						</Soon>
					</Soon_Detail>
					<SoonMiddleLine />
					<Soon_Detail>
						<span> 4/9 </span>
						<Soon>
							<Detail>
								<SoonTime>
									<StartTime> 08:00 </StartTime>
									<LastTime> 11:30 </LastTime>
								</SoonTime>
								<DivisionLine />
								<Schedule_Title> JSP 5단원 풀기 </Schedule_Title>
							</Detail>
							<DetailLine />
							<Detail>
								<SoonTime>
									<StartTime> 13:00 </StartTime>
									<LastTime> 16:00 </LastTime>
								</SoonTime>
								<DivisionLine />
								<Schedule_Title> 개발 스터디 </Schedule_Title>
							</Detail>
						</Soon>
					</Soon_Detail>
				</SoonTable>
			</ToSoon_Schedule>
		</Schedule>
	);
}

export default ScheduleMain;

// 스케줄러 좌측 페이지 영역
const Schedule = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 555.5px;
	height: 100%;
`;

// 타임 테이블 (제목 + 타임 테이블) 틀
const TimeTable = styled.div`
	display: flex;
	flex-direction: column;
`;

// 타임 테이블 제목
const TimeTable_Title = styled.div`
	display: flex;
	align-items: center;
	height: 25px;
	padding-bottom: 12px;

	& > span {
		font-size: 16px;
		font-weight: bold;
		border-bottom: 3.5px solid #dca600;
	}
`;

const TTable = styled.div`
	display: flex;
	width: 185px;
	height: 329px;
	border: 1.6px solid #b1b1b1;
	background-color: #fffbda;
	overflow: auto;
	//스크롤바 숨기기
	::-webkit-scrollbar {
		display: none; /* Chrome, Safari, Opera*/
	}
	overflow-x: hidden;
`;

const TTable_Times = styled.div`
	width: 28px;
	height: auto;
	border-right: 1.6px solid #b1b1b1;
	background-color: white;
	padding-bottom: 1px;
`;

const Time = styled.div`
	width: 28px;
	height: 28px;
	border-top: 1px dotted #cacaca;
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
	position: relative;
	left: ${(props) => `${props.x_position}px`};
	top: 200px;
`;

const Time_unit = styled.div`
	width: calc(158px / 6);
	height: 28px;
	border-right: 1px dotted #cacaca;
	:last-child {
		border-top: none;
	}
`;

// 중간 라인
const MiddleLine = styled.div`
	display: flex;
	width: 0px;
	height: 330px;
	border-left: 1px dashed #b1b1b1;
	margin: 23px 15px 0 15px;
`;

// 일정 (오늘의 일정, 다가오는 일정) 영역
const ToSoon_Schedule = styled.div`
	display: flex;
	flex-direction: column;
`;

// 오늘의 일정 제목
const TodayTitle = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 25px;
	padding-bottom: 12px;

	& > span {
		font-size: 16px;
		font-weight: bold;
		border-bottom: 3.5px solid #dca600;
	}

	& > svg {
		cusor: pointer;
	}
`;

// 오늘의 일정 (시간, 일정 제목, 체크) 틀
const ToTable = styled.div`
	display: flex;
	flex-direction: column;
	height: 136px;
	border: 1.6px solid #b1b1b1;
	background-color: #fffbda;
	margin-bottom: 1px;
	overflow-y: scroll;

	::-webkit-scrollbar {
		width: 0px;
	}
`;

const ToDetail = styled.div`
	display: flex;
	align-items: center;
	width: 250px;
	height: 36px;
	margin: 3px 0 3px 0;
`;

const ToTime = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 52px;
`;

// 오늘의 일정 (시간, 일정 제목) 구분선
const ToDivisionLine = styled.div`
	display: flex;
	width: 0px;
	height: 25px;
	border-left: 2px solid #ff8282;
	padding-right: 6px;
`;

const ToTitle = styled.div`
	display: flex;
	flex-direction: column;
`;

const ToTitle_Detail = styled.div`
	display: flex;
	justify-content: space-between;

	& > input {
		display: flex;
		width: 18px;
		height: 18px;
	}
`;

const ToTitleLine = styled.div`
	width: 171px;
	border-bottom: 1px solid #b1b1b1;
	padding-bottom: 3px;
`;

// const ToMiddleLine = styled.div`
// `;

// 일정 중간 라인
const ScheMiddleLine = styled.div`
	width: 250px;
	height: 0px;
	border-top: 1px dashed #b1b1b1;
	margin-top: 15px;
	margin-bottom: 16px;
`;

// 다가오는 일정 제목
const SoonTitle = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	height: 25px;
	padding-bottom: 12px;

	& > span {
		font-size: 16px;
		font-weight: bold;
		border-bottom: 3.5px solid #dca600;
	}
`;

// 다가오는 일정 (날짜, 시간, 구분선, 일정 제목) 틀
const SoonTable = styled.div`
	display: flex;
	flex-direction: column;
	height: 136px;
	border: 1.6px solid #b1b1b1;
	background-color: #fffbda;
	margin-bottom: 1px;
	overflow-y: scroll;

	::-webkit-scrollbar {
		width: 0px;
	}
`;

const Soon_Detail = styled.div`
	display: flex;
	width: 250px;
	height: 92px;
	padding-top: 12px;

	& > span {
		font-size: 11px;
		margin-right: 6px;
		margin-left: 12px;
	}
`;

// 상세 내용, 구분선 틀
const Soon = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 180px;
	height: 70px;
	border: 0.5px solid #b1b1b1;
	background-color: #fffdf6;
`;

// 다가오는 일정 상세 내용
const Detail = styled.div`
	display: flex;
	align-items: center;
	width: 180px;
	height: 35px;
	padding-bottom: 3px;
`;

// 일정 시간 (시작 시간, 끝나는 시간) 영역
const SoonTime = styled.div`
	display: flex;
	flex-direction: column;
	padding: 0 10px 0 16px;
`;

// 일정 시작 시간
const StartTime = styled.div`
	font-size: 10px;
`;

// 일정 끝나는 시간
const LastTime = styled.div`
	font-size: 10px;
	color: #a5a5a5;
`;

// 다가오는 일정 (시간, 일정 제목) 구분선
const DivisionLine = styled.div`
	display: flex;
	width: 0px;
	height: 25px;
	border-left: 2px solid #ff8282;
	padding-right: 15px;
`;

// 일정 제목
const Schedule_Title = styled.div`
	font-size: 11px;
`;

// 하루의 여러 일정 구분 라인
const DetailLine = styled.div`
	width: 150px;
	height: 0px;
	border-top: 1px dashed #b1b1b1;
`;

// 다가오는 일정 중간 라인
const SoonMiddleLine = styled.div`
	display: flex;
	width: 220px;
	height: 0px;
	border-top: 1px dashed #b1b1b1;
	margin-left: 18px;
`;
