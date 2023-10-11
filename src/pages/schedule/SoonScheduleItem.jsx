import React from 'react';
import styled from 'styled-components';

function SoonScheduleItem(props) {
	const { dayList, index, scheduleLength } = props;

    return(
        <Wrapper key={index}>
			<Soon_Detail>
				<span> {dayList[0].startDate} </span>
				<Soon>
					{dayList?.map((value, index) => {
						return(
							<div key={index}>
								<Detail>
									<SoonTime>
									{(value.startTime === '00:00' && value.endTime === '23:59') ?
										<StartTime> - </StartTime>
									:
										<>
											<StartTime> {value.startTime} </StartTime>
											<LastTime> {value.endTime} </LastTime>
										</>
									}
									</SoonTime>
									<DivisionLine />
									<Schedule_Title> {value.title} </Schedule_Title>
								</Detail>
								{dayList.length - 1 !== index && <DetailLine />}
							</div>
						);
					})}
				</Soon>
			</Soon_Detail>
			{scheduleLength - 1 !== index && <SoonMiddleLine />}
		</Wrapper>
    );
}

export default SoonScheduleItem;

/** 오늘의 일정의 각 일정 틀 */
const Wrapper = styled.div`
`;

/** 다가오는 일정 각 날짜 */
const Soon_Detail = styled.div`
	display: flex;
	width: 250px;
	padding: 12px 0;

	& > span {
		font-size: 11px;
		margin-right: 6px;
		margin-left: 12px;
	}
`;

/** 상세 내용, 구분선 틀 */
const Soon = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 180px;
	border: 0.5px solid #b1b1b1;
	background-color: #fffdf6;
`;

/** 다가오는 일정 상세 내용 */
const Detail = styled.div`
	display: flex;
	align-items: center;
	width: 180px;
	height: 35px;
	padding-bottom: 3px;
`;

/** 일정 시간 (시작 시간, 끝나는 시간) 영역 */
const SoonTime = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 0 10px 0 16px;
	width: 51px;
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

/** 다가오는 일정 (시간, 일정 제목) 구분선 */
const DivisionLine = styled.div`
	display: flex;
	width: 0px;
	height: 25px;
	border-left: 2px solid #ff8282;
	padding-right: 15px;
`;

/** 일정 제목 */
const Schedule_Title = styled.div`
	font-size: 11px;
`;

/** 하루의 여러 일정 구분 라인 */
const DetailLine = styled.div`
	width: 150px;
	height: 0px;
	border-top: 1px dashed #b1b1b1;
	margin-left: 15px;
`;

/** 다가오는 일정 중간 라인 */
const SoonMiddleLine = styled.div`
	display: flex;
	width: 220px;
	height: 0px;
	border-top: 1px dashed #b1b1b1;
	margin-left: 15px;
`;