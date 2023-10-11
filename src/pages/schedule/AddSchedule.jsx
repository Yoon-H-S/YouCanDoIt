import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { setHours, setMinutes, getHours, getMinutes, setSeconds } from 'date-fns';
import moment from 'moment';
import axios from 'axios';

import ScheduleDatePicker from './ScheduleDatePicker';
import ScheduleTimePicker from './ScheduleTimePicker';
import RemindTime from './RemindTime';
import RepeatCycle from './RepeatCycle';
import Button from 'components/ui/Button';

import ClockImg from 'assets/schedule/clock.png';
import ReminderImg from 'assets/schedule/alarm.png';
import RepeatImg from 'assets/schedule/circular_arrows.png';

function AddSchedule(props) {
    const selectDate = props.selectDate; // 캘린더에서 선택한 날짜

    const [title, setTitle] = useState('');

    const today = new Date(); // 오늘 날짜
    const minCeil = Math.ceil((getMinutes(today)+1) / 10) * 10; // 현재 분에서 일의자리 반올림(ex. 25 -> 30)
    const currentTime = setHours(setMinutes(setSeconds(today, 0), minCeil), minCeil === 60 ? getHours(today) + 1 : getHours(today)); // 반올림한 분이 60이라면 +1시간
    const [startDate, setStartDate] = useState(currentTime); // 일정 시작날짜(기본값 : 현재시간에서 반올림한 시간)
	const [endDate, setEndDate] = useState(setHours(currentTime, getHours(currentTime) + 1)); // 일정 끝나는 날짜(기본값 : 시작날짜 + 1시간)
    const [scheduleType, setScheduleType] = useState('time'); // 일정 타입. time : 시간설정, allDay : 하루 종일

    const remindList = ['start', 'min10', 'hour1', 'day1', 'custom']; // 알림 종류
    const [reminderTime, setReminderTime] = useState(0); // 알림시간. 분단위
    const [reminderChecked, setReminderChecked] = useState(remindList[0]); // 알림시간 기본값.

    const repeatList = [0, 1, 2, 3]; // 반복 종류
    const [repeatType, setRepeatType] = useState(repeatList[0]); // 반복여부. 0 : 반복x, 1: 주, 2: 월, 3: 연

    useEffect(() => {
        if(selectDate !== null) {
            setStartDate(setHours(setMinutes(selectDate, 0), 8));
            setEndDate(setHours(setMinutes(selectDate, 0), 9));
        }
    },[selectDate]);

    const titleChange = (e) => {
        setTitle(e.target.value);
    }

    /** 시작날짜 설정 */
    const startDateChange = (date) => {
        setStartDate(date);

        // 선택한 날짜(시간)이 종료날짜보다 후라면 선택한 날짜로 변경
        if(date > endDate)
            setEndDate(date);
        console.log(date);
    }

    /** 종료날짜 설정 */
    const endDateChange = (date) => {
        // 선택한 날짜(시간)이 시작날짜보다 전이라면 시작날짜로 변경
        if(date < startDate) {
            setEndDate(startDate);
        } else {
            setEndDate(date);
        }
    }

    /** 일정 타입 설정 */
    const scheduleTypeChange = (type) => {
        setScheduleType(type);
        if(type === "time" && scheduleType !== "time") {
            setStartDate(setHours(setMinutes(startDate, 0), 8));
            setEndDate(setHours(setMinutes(startDate, 0), 9));
        } else if(type === "allDay") {
            setStartDate(setHours(setMinutes(startDate, 0), 0));
            setEndDate(setHours(setMinutes(startDate, 59), 23));
        }
    }

    /** 알림 시간 설정 */
    const reminderChange = (type, time) => {
        setReminderChecked(type);
        setReminderTime(time);
        console.log(type + ", " + time);
    };

    const createSchedule = () => {
        axios.post('api/schedule-api/schedule-create', {
            'scheduleNumber': 0,
            'scheduleTitle': title,
            'scheduleStartDate': moment(startDate).format('YYYY-MM-DD HH:mm:ss'),
            'scheduleEndDate': moment(endDate).format('YYYY-MM-DD HH:mm:ss'),
            'scheduleReminder': reminderTime,
            'scheduleRepeat': repeatType,
            'scheduleSuccess': '0'
        }).then(function (response) {
            alert("일정이 추가되었습니다.");
            props.setIsAdd(false);
        }).catch(
            (error) => console.log(error)
        );
    }

    return( 
        <Wrapper>
            <InputWrap>
                <Title>
                    <div>
                        <FontAwesomeIcon icon={faChevronLeft} onClick={() => props.setIsAdd(false)} />
                    </div>
					<span>일정 추가</span>
                </Title>
                <InputScheduleTitle>
                    <label>제목:</label>
                    <input type='text' value={title} onChange={titleChange}></input>
                </InputScheduleTitle>
                <ScheduleDate>
                    <SelectDate>
                        <img src={ClockImg} alt='' />
                        <div>
                            <ScheduleDatePicker 
                                startDate={startDate} 
                                endDate={endDate}
                                selectDate={startDate}
                                dateChange={startDateChange}
                                type={2} 
                            />
                            {scheduleType === "time" && <ScheduleTimePicker
                                startTime={startDate}
                                endTime={endDate}
                                selectTime={startDate}
                                timeChange={startDateChange}
                                type={2}
                            />}
                        </div>
                        <FontAwesomeIcon icon={faArrowRight} size="lg" />
                        <div>
                            <ScheduleDatePicker 
                                startDate={startDate} 
                                endDate={endDate}
                                selectDate={endDate} 
                                dateChange={endDateChange} 
                                type={3} 
                            />
                            {scheduleType === "time" && <ScheduleTimePicker
                                startTime={startDate}
                                endTime={endDate}
                                selectTime={endDate}
                                timeChange={endDateChange}
                                type={3}
                            />}
                        </div>
                    </SelectDate>
                    <TimeOrAllDay>
                        <Type
                            id="time"
                            type={scheduleType}
                            onClick={() => scheduleTypeChange("time")}
                        >
                            시간
                        </Type>
                        <Type
                            id="allDay"
                            type={scheduleType}
                            onClick={() => scheduleTypeChange("allDay")}
                        >
                            하루 종일
                        </Type>
                    </TimeOrAllDay>
                </ScheduleDate>
                <Reminder>
                    <div className="reminderTitle">
                        <img src={ReminderImg} alt='' />
                        <span>알림</span>
                    </div>
                    {remindList.map((value, index) => {
                        return(
                            <RemindTime
                                key={index}
                                type={value}
                                reminderChange={reminderChange}
                                checked={reminderChecked}
                            />
                        );
                    })}
                </Reminder>
                <Repeat>
                    <div className="repeatTitle">
                        <img src={RepeatImg} alt='' />
                        <span>반복</span>
                    </div>
                    {repeatList.map((value, index) => {
                        return(
                            <RepeatCycle
                                key={index}
                                type={value}
                                repeatChange={setRepeatType}
                                checked={repeatType}
                            />
                        );
                    })}
                </Repeat>
                <ButtonWrap>
                    <Button
                        width = "45px"
                        height = "28px"
                        title = "취소"
                        color = "#D10000"
                        onClick = {() => props.setIsAdd(false)}
                    />
                    <Button
                        width = "45px"
                        height = "28px"
                        title = "저장"
                        color = "#0077E4"
                        onClick = {() => createSchedule()}
                    />
                </ButtonWrap>
            </InputWrap>
        </Wrapper>
    )
    
}


export default AddSchedule;

/** 일정추가 틀 */
const Wrapper = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    width: 555.5px;
    height: 100%;
    background-color: white;
`;

/** 일정추가 입력 틀 */
const InputWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 430px;
    height: 100%;
    padding-top: 25px;
    overflow: scroll;

    ::-webkit-scrollbar {
        width: 0px;
    }
`;

/** 이전, 제목 */
const Title = styled.div`
    position: relative;
    text-align: center;
    height: 25px;
    width: 100%; 
    margin-bottom: 15px;

    & > span {
		font-size: 16px;
		font-weight: 700;
		color: black;
		cursor: default;
		border-bottom: 3px solid #dca600;
	}

	& > div {
        height: 25px;
		position: absolute;
		left: 0;
		color: black;
        cursor: pointer;
	}
`;

/** 일정제목 입력란 */
const InputScheduleTitle = styled.div`
    height: 26px;
    font-size: 12px;

    & > input {
        width: 395px;
        height: 100%;
        margin-left: 9px;
        padding-left: 5px;
        border: none;
        border-bottom: 1px solid #B1B1B1;
    }
`;

const ScheduleDate = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 15px 0;
    border-bottom: 1px solid #B1B1B1;
`;

/** 날짜 선택란 */
const SelectDate = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 50px;

    & > img {
        width: 15px;
        height: 15px;
    }

    & > div {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    & > svg {
        margin: 0 30px;
    }
`;

const TimeOrAllDay = styled.div`
    height: 25px;
    width: 130px;
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border: 1px solid #B1B1B1;
    border-radius: 25px;
    font-size: 12px;
`;

const Type = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 17px;
    width: 60px;
    color: #878787;
    cursor: pointer;

    ${(props) => props.id === props.type && `   
        font-weight: bold;
        color: black !important;
    `}

    :first-child {
        border-right: 0.5px solid #D1D1D1;
    }
`;

/** 알림시간 설정란 */
const Reminder = styled.div`
    width: 100%;
    padding: 15px 0;
    border-bottom: 1px solid #B1B1B1;

    & > .reminderTitle {
        display: flex;
        align-items: center;
        margin-bottom: 10px;

        & > img {
            width: 15px;
            height: 15px;
        }

        & > span {
            margin-left: 15px;
            font-size: 12px;
        }
    }
`;

/** 반복주기 설정란 */
const Repeat = styled.div`
    width: 100%;
    padding: 15px 0;
    border-bottom: 1px solid #B1B1B1;

    & > .repeatTitle {
        display: flex;
        align-items: center;
        margin-bottom: 10px;

        & > img {
            width: 15px;
            height: 15px;
        }

        & > span {
            margin-left: 15px;
            font-size: 12px;
        }
    }
`;

const ButtonWrap = styled.div`
    width: 100%;
    padding: 15px 0;
    display: flex;
    justify-content: center;

    & > button:first-child {
        margin-right: 15px;
    }
`;