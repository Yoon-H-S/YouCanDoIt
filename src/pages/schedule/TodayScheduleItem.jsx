import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

function TodayScheduleItem(props) {
	const { value, index, onClickCheck } = props;
    const todayRef = useRef(); // 오늘의 일정 이름길이 추출을 위해 선언
    const [highlightWidth, setHighlightWidth] = useState(); // 오늘의 일정 체크시 형광펜 길이

    useEffect(() => {
		setHighlightWidth(todayRef.current?.offsetWidth);
	},[]);

    return(
        <Wrapper key={index}>
			<ToTime>
				{(value.startTime === '00:00' && value.endTime === '23:59') ?
					<StartTime> - </StartTime>
				:
					<>
						<StartTime> {value.startTime} </StartTime>
						<LastTime> {value.endTime} </LastTime>
					</>
				}
			</ToTime>
			<ToDivisionLine />
			<ToTitle>
				<ToTitle_Detail>
					<Schedule_Title
						className='todayTitle'
						ref={(component) => {
							todayRef.current = component;
						}}
					> 
						{value.title}
					</Schedule_Title>
					{value.success === '1' && 
						<Highlighter
							colorType={index % 3}
							width={highlightWidth}
						/>
					}
					<input
						type="checkbox"
						id={value.title}
						checked={value.success === '1'}
						onChange={() => onClickCheck(value.number)}
					/>
					<label htmlFor={value.title} />
				</ToTitle_Detail>
				<ToTitleLine />
			</ToTitle>
		</Wrapper>
    );
}

export default TodayScheduleItem;

/** 오늘의 일정의 각 일정 틀 */
const Wrapper = styled.div`
	display: flex;
	align-items: center;
	width: 250px;
	height: 36px;
	margin: 3px 0 3px 0;
`;

/** 오늘의 일정 시간 */
const ToTime = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 52px;
`;

/** 오늘의 일정 (시간, 일정 제목) 구분선 */
const ToDivisionLine = styled.div`
	display: flex;
	width: 0px;
	height: 25px;
	border-left: 2px solid #ff8282;
	padding-right: 6px;
`;

/** 오늘의 일정 이름 영역 */
const ToTitle = styled.div`
	display: flex;
	flex-direction: column;
`;

/** 오늘의 일정 이름, 체크박스 */
const ToTitle_Detail = styled.div`
	position: relative;
	display: flex;
	justify-content: space-between;
	align-items: center;

	& > .todayTitle {
		padding: 0 8px;
	}

	& > input[type=checkbox]{
        display: none;

        :checked + label::before{
            content:"✔";
        }
    }

	& > label {
        display: flex;
        position: relative;
        cursor: pointer;

        ::before{
            content: "";
            width: 18px;
            height: 18px;
            font-size: 11px;
            text-align: center;
			background-color: #B8E5FF;
        }
    }
`;

/** 오늘의 일정 체크시 형광펜 */
const Highlighter = styled.div`
	position: absolute;
	height: 9px;
	width: ${(props) => props.width}px;
	background-color: ${(props) => (
		props.colorType === 0 ?
			'#FFB1B166'
		: props.colorType === 1 ?
			'#CAB1FF66'
		:
			'#B1FFFA66'
	)};
`;

/** 오늘의 일정 각 일정 하단선 */
const ToTitleLine = styled.div`
	width: 171px;
	border-bottom: 1px solid #b1b1b1;
	padding-bottom: 3px;
`;

/** 일정 시작 시간 */
const StartTime = styled.div`
	font-size: 10px;
`;

/** 일정 끝나는 시간 */
const LastTime = styled.div`
	font-size: 10px;
	color: #a5a5a5;
`;

/** 일정 제목 */
const Schedule_Title = styled.div`
	font-size: 11px;
`;