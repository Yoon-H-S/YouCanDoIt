import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import 'react-datepicker/dist/react-datepicker.css';

import { ko } from 'date-fns/esm/locale';
import * as S from 'styles/DatePickerStyle';

import Button from 'components/ui/Button';

function CreateGroup(props) {
	const [selectDate, setSelectDate] = useState(new Date());
	const [startDate, setStartDate] = useState(new Date());
	const [endDate, setEndDate] = useState(new Date());
	const [maxResult, setMaxResult] = useState(17950);
	const [visible, setVisible] = useState(false);
	return (
		<Wrapper>
			<Title>
				<FontAwesomeIcon icon={faChevronLeft} />
				<span>갓생 챌린지 - 그룹 생성하기</span>
			</Title>
			<FormArea>
				<Form>
					<Picture>
						<span>사진 첨부하기</span>
					</Picture>
					<Inputs>
						<InputRow>
							<label htmlFor="">그룹 이름:</label>
							<input type="text" />
						</InputRow>
						<InputRow>
							<label htmlFor="">주제:</label>
							<input type="text" />
						</InputRow>
						<InputRow>
							<label htmlFor="">내용:</label>
							<textarea></textarea>
						</InputRow>
						<InputRow>
							<label htmlFor="">함께할 친구:</label>
							<Button
								title="추가"
								width="45px"
								height="24px"
								// color="#0077e4"
								color={visible ? '#9A9A9A;' : '#0077e4'}
								type="button"
								onClick={() => {
									setVisible(!visible);
								}}
							/>
						</InputRow>
						<InputRow>
							<label htmlFor="">카테고리:</label>
							<Button
								title="건강"
								width="59px"
								height="24px"
								type="button"
							/>
						</InputRow>
						<InputRow>
							<label htmlFor="">기간 설정:</label>
							<S.Calender>
								<S.CustomDatePicker
									showIcon
									showPopperArrow={false}
									fixedHeight
									dateFormat="yyyy - MM - dd"
									// minDate={new Date('2023-05-01')}
									// maxDate={new Date('2023-06-10')}
									locale={ko}
									closeOnScroll={true}
									selected={startDate}
									onChange={(date) => setStartDate(date)}
									selectsStart
									startDate={startDate}
									endDate={endDate}
									renderCustomHeader={({
										date,
										decreaseMonth,
										increaseMonth,
										prevMonthButtonDisabled,
										nextMonthButtonDisabled,
									}) => (
										<S.CustomHeader>
											<button
												onClick={decreaseMonth}
												disabled={prevMonthButtonDisabled}
												type="button">
												{'<'}
											</button>
											<div>
												{date.getFullYear()}년 {date.getMonth() + 1}월
											</div>
											<button
												onClick={increaseMonth}
												disabled={nextMonthButtonDisabled}
												type="button">
												{'>'}
											</button>
										</S.CustomHeader>
									)}
								/>
							</S.Calender>
							<span class="tilde">~</span>
							<S.Calender>
								<S.CustomDatePicker
									showIcon
									showPopperArrow={false}
									fixedHeight
									dateFormat="yyyy - MM - dd"
									// minDate={new Date('2023-05-01')}
									// maxDate={new Date('2023-06-10')}
									locale={ko}
									closeOnScroll={true}
									selected={endDate}
									onChange={(date) => setEndDate(date)}
									selectsEnd
									startDate={startDate}
									endDate={endDate}
									renderCustomHeader={({
										date,
										decreaseMonth,
										increaseMonth,
										prevMonthButtonDisabled,
										nextMonthButtonDisabled,
									}) => (
										<S.CustomHeader>
											<button
												onClick={decreaseMonth}
												disabled={prevMonthButtonDisabled}
												type="button">
												{'<'}
											</button>
											<div>
												{date.getFullYear()}년 {date.getMonth() + 1}월
											</div>
											<button
												onClick={increaseMonth}
												disabled={nextMonthButtonDisabled}
												type="button">
												{'>'}
											</button>
										</S.CustomHeader>
									)}
								/>
							</S.Calender>
						</InputRow>
					</Inputs>
					{visible && (
						<CheckboxGroup>
							<Checkbox>
								<input type="checkbox" />
								<label>김시은</label>
							</Checkbox>
							<Checkbox>
								<input type="checkbox" />
								<label>김혜나</label>
							</Checkbox>
							<Checkbox>
								<input type="checkbox" />
								<label>김혜나</label>
							</Checkbox>
							<Checkbox>
								<input type="checkbox" />
								<label>김혜나</label>
							</Checkbox>
							<Checkbox>
								<input type="checkbox" />
								<label>김혜나</label>
							</Checkbox>
							<Checkbox>
								<input type="checkbox" />
								<label>김혜나</label>
							</Checkbox>
							<Checkbox>
								<input type="checkbox" />
								<label>김혜나</label>
							</Checkbox>
							<Checkbox>
								<input type="checkbox" />
								<label>김혜나</label>
							</Checkbox>
							<Checkbox>
								<input type="checkbox" />
								<label>김혜나</label>
							</Checkbox>
						</CheckboxGroup>
					)}
				</Form>
				<Button
					title="등록하기"
					width="87px"
					height="28px"
					color="#0077e4"
				/>
			</FormArea>
		</Wrapper>
	);
}

export default CreateGroup;

// 갓생 챌린지 - 그룹 생성하기 틀
const Wrapper = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	height: 100%;
	overflow: hidden;
`;

// 그룹 생성하기 타이틀 영역
const Title = styled.div`
	position: relative;
	top: 5px;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 50px;
	z-index: 2;

	& > span {
		font-size: 16px;
		font-weight: 700;
		color: black;
		cursor: default;
		border-bottom: 3px solid #dca600;
	}

	& > svg {
		position: absolute;
		left: 45px;
		color: black;
	}
`;

// 그룹 생성하기 폼 스크롤 되는 영역
const FormArea = styled.form`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	height: 372px;
	padding: 10px 20px;
	z-index: 1;
	overflow-y: scroll;
	::-webkit-scrollbar {
		width: 0px;
	}
`;

// 폼
const Form = styled.form`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 465px;
	height: 400px;
	padding: 15px 20px;
	border: 1px solid #b1b1b1;
	border-radius: 10px;
	margin-bottom: 10px;
	z-index: 1;
`;

// 사진 첨부하기 영역
const Picture = styled.div`
	width: 465px;
	height: 120px;

	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 12px;
`;

// 입력 폼
const Inputs = styled.div`
	width: 465px;
	height: auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	border-top: 1px solid #b1b1b1;
	padding: 13px 0;
`;

const InputRow = styled.div`
	width: 435px;
	height: auto;
	display: flex;

	padding-right: 10px;
	margin-bottom: 14px;
	& > label {
		font-size: 12px;
		width: 77px;
	}
	& > input {
		width: 348px;
		height: 17px;
		border: none;
		border-bottom: 1px solid #b1b1b1;
		background-color: transparent;
		font-size: 12px;
	}
	& > textarea {
		width: 348px;
		height: 50px;
		resize: none;
		border: 1px solid #b1b1b1;
	}

	& > .tilde {
		margin: 0 7px;
	}
`;

const CheckboxGroup = styled.div`
	width: 130px;
	height: 215px;
	background-color: white;
	border: 1px solid #9e9e9e;
	border-radius: 5px;
	box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.25);
	z-index: 3;
	position: relative;
	top: -320px;
	left: -25px;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 10px;
	overflow-y: scroll;
	::-webkit-scrollbar {
		width: 0px;
	}
`;

const Checkbox = styled.div`
	width: 100px;
	border-bottom: 1px dashed #d3d3d3;
	margin-bottom: 5px;
	padding-bottom: 5px;
	display: flex;
	align-items: center;
	& > label {
		font-size: 10px;
	}

	& > input {
		width: 15px;
		height: 15px;
		appearance: none;
		border: 0.3px solid #b1b1b1;
		border-radius: 15px;
		margin-right: 7px;
	}

	& > input:checked {
		background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='black' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
		background-size: 100% 100%;
		background-position: 50%;
		background-repeat: no-repeat;
		background-color: #b8e5ff;
	}
`;
