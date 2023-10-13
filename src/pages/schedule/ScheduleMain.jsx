import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

import TodayScheduleItem from './TodayScheduleItem';
import SoonScheduleItem from './SoonScheduleItem';
import TimeTableContent from './TimeTableContent';

function ScheduleMain(props) {
	const [todaySchedule, setTodaySchedule] = useState([]); // 오늘의 일정
	const [onComingSchedule, setOnComingSchedule] = useState([]); // 다가오는 일정

	useEffect(() => {
		axios.get('/api/schedule-api/daily-schedule')
		.then(function (response) {
			setTodaySchedule(response.data);
		}).catch(
			(error) => console.log(error)
		);
		axios.get('/api/schedule-api/onComing-schedule')
		.then(function (response) {
			setOnComingSchedule(response.data);
		}).catch(
			(error) => console.log(error)
		);
	},[props.isAdd]);

	/** 오늘의 일정 체크 */
	const onClickCheck = (number) => {
		const index = todaySchedule.findIndex(value => value.number === number);

		const items = [...todaySchedule];
		items[index].success = (items[index].success ^ 1).toString();

		axios.get('/api/schedule-api/schedule-success', {
			params: {
				'number': number,
				'success': items[index].success
			}
		}).catch(
			(error) => console.log(error)
		);

		setTodaySchedule(items);
	};

	return (
		<Schedule>
			<TimeTable>
				<TimeTable_Title>
					<span> 타임 테이블 </span>
				</TimeTable_Title>
				<TTable>
					<TimeTableContent isAdd={props.isAdd} />
				</TTable>
			</TimeTable>
			<MiddleLine />
			<ToSoon_Schedule>
				<TodayTitle>
					<span> 오늘의 일정 </span>
					<FontAwesomeIcon
						icon={faPlus}
						onClick={() => props.showAdd()}
					/>
				</TodayTitle>
				<ToTable>
					{todaySchedule.length > 0 ? 
						todaySchedule?.map((value, index) => {
							return (
								<TodayScheduleItem
									value={value}
									index={index}
									onClickCheck={onClickCheck}
								/>
							);
						})
					:
						<None>일정을 추가해주세요.</None>
					}
				</ToTable>
				<ScheMiddleLine />
				<SoonTitle>
					<span> 다가오는 일정 </span>
				</SoonTitle>
				<SoonTable>
					{onComingSchedule.length > 0 ?
						onComingSchedule?.map((dayList, index) => {
							return(
								<SoonScheduleItem
									dayList={dayList}
									index={index}
									scheduleLength={onComingSchedule.length}
								/>
							);
						})
					:
						<None>다가오는 일정이 없습니다.</None>
					}
				</SoonTable>
			</ToSoon_Schedule>
		</Schedule>
	);
}

export default ScheduleMain;

/** 스케줄러 좌측 페이지 영역 */ 
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
	position: relative;
`;

/** 중간 라인 */ 
const MiddleLine = styled.div`
	display: flex;
	width: 0px;
	height: 330px;
	border-left: 1px dashed #b1b1b1;
	margin: 23px 15px 0 15px;
`;

/** 일정 (오늘의 일정, 다가오는 일정) 영역 */
const ToSoon_Schedule = styled.div`
	display: flex;
	flex-direction: column;
`;

/** 오늘의 일정 제목 */
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
        cursor: pointer;
    }
`;

/** 오늘의 일정 (시간, 일정 제목, 체크) 틀 */
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

/** 일정 중간 라인 */
const ScheMiddleLine = styled.div`
	width: 250px;
	height: 0px;
	border-top: 1px dashed #b1b1b1;
	margin-top: 15px;
	margin-bottom: 16px;
`;

/** 다가오는 일정 제목 */
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

/** 다가오는 일정 (날짜, 시간, 구분선, 일정 제목) 틀 */
const SoonTable = styled.div`
	display: flex;
	flex-direction: column;
	height: 136px;
	border: 1.6px solid #b1b1b1;
	background-color: #fffbda;
	margin-bottom: 1px;
	overflow-y: scroll;

    display: flex;
    flex-direction: column;
    height: 136px;
    border: 1.6px solid #B1B1B1;
    background-color: #FFFBDA;
    margin-bottom: 1px;
    overflow-y: scroll;

    ::-webkit-scrollbar {
        width: 0px;
    }
`;

// 일정이 없을 때
const None = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 100%;
    height: 100%;
    font-size: 12px;
    color: #A4A4A4;
`;