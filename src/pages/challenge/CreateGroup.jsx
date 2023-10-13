import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import 'react-datepicker/dist/react-datepicker.css';

import SelectedCalender from './SelectedCalender';
import Button from 'components/ui/Button';

function CreateGroup(props) {
	const today = new Date(); // 오늘 날짜
	const [startDate, setStartDate] = useState(new Date(today.setDate(today.getDate() + 1))); // 그룹 시작날짜(기본값은 내일)
	const [endDate, setEndDate] = useState(startDate); // 그룹 끝나는 날짜(기본값은 시작날짜)
	const [visible, setVisible] = useState(false); // 친구 초대 목록
	const [imagePreview, setImagePreview] = useState(null); // 이미지 업로드 시 미리보기
	const [imgFile, setImgFile] = useState(null); // 그룹이미지
	const [friends, setFriends] = useState([]); // 친구 목록
	const [withFriends, setWithFriends] = useState([]); // 함께할 친구목록
	const title = props.challengeType !== null ? "갓생" : "D.I.Y";
	const [values, setValues] = useState({
        groupName: "", // 그룹이름
        groupSubject: "", // 그룹주제
        groupContents: "", // 그룹내용
		groupType: "", // 그룹구분(갓생, diy)
		category: "" // 카테고리
    });
    // 비구조화 할당
    const {groupName, groupSubject, groupContents, groupType, category} = values;

	// 갓생챌린지 정보, 친구목록 불러오기
	useEffect(() => {
        axios.get('/api/challenge-api/with-friend')
		.then(function (response) {
			setFriends(response.data);
        }).catch(
            (error) => console.log(error)
        );
		if(props.challengeType !== null) {
			axios.get('/api/challenge-api/godlife-challenge-detail', {
				params: {
					subject:props.challengeType
				}
			}).then(function (response) {
				setValues({
					...values,
					["groupSubject"]: response.data["challengeSubject"],
					["groupContents"]: response.data["challengeContents"],
					["groupType"]: "1",
					["category"]: response.data["challengeCategory"],
				});
			}).catch(
				(error) => console.log(error)
			);
		} else {
			setValues({
				...values,
				["groupType"]: "2",
			});
		}
    },[]);

	// input값이 변경되면 state에 저장
	const handleChange = (e) => {
		setValues({
			...values,
			[e.target.name]: e.target.value,
		});
	};

	// 파일값 저장
	const fileChange = (e) => {
		const file = e.target.files[0];
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onloadend = () => {
			setImagePreview(reader.result);
		};
		setImgFile(file);
	};

	// 함께할 친구 초대
	const checkChange = (e) => {
		const id = e.target.value;
		if(e.target.checked) {
			setWithFriends([...withFriends, id]);
		} else {
			setWithFriends(withFriends.filter((mem) => mem !== id));
		}
	}

	/** 시작날짜 설정 */
	const startDateChange = (date) => {
		setStartDate(date);
		if(date > endDate)
			setEndDate(date);
	}

	/** 종료날짜 설정 */
	const endDateChange = (date) => {
		setEndDate(date);
	}

	// 그룹생성
    const Create = () => {
		console.log(withFriends);
        axios.post('/api/challenge-api/challenge-create', {
			"groupNumber":0,
			"groupName":groupName,
            "groupSubject":groupSubject,
            "groupContents":groupContents, 
            "groupStartdate":startDate, 
            "groupEnddate":endDate,
            "groupClass":groupType
		}, {
			params : {
                members:withFriends
            },
            paramsSerializer: (paramObj) => {
                const params = new URLSearchParams()
                for (const key in paramObj) {
                    params.append(key, paramObj[key])
                }
                return params.toString()
            }
        }).then(function (response) {
            if(imgFile) {
                const formData = new FormData();
                formData.append("groupNumber", response.data);
                formData.append("file", imgFile);
                axios.post('/api/challenge-api/insert-group-image',
                    formData
                ).then(function (response) {
                    alert("그룹생성이 완료되었습니다.");
					window.location.reload();
                }).catch(
                    (error) => console.log(error)
                );
            } else {
                alert("그룹생성이 완료되었습니다.");
				window.location.reload();
            }
        }).catch(
            (error) => console.log(error)
        );
    };

	return (
		<Wrapper>
			<Title>
				<FontAwesomeIcon icon={faChevronLeft} onClick={props.close} />
				<span>{title} 챌린지 - 그룹 생성하기</span>
			</Title>
			<FormArea>
				<Form>
					<Picture>
						<label htmlFor="file">사진 첨부하기</label>
						<input type="file" id="file" onChange ={fileChange} />
						{imagePreview && <img src={imagePreview} alt="" />}
					</Picture>
					<Inputs>
						<InputRow>
							<label>그룹 이름:</label>
							<input type="text" name="groupName" onChange={handleChange} />
						</InputRow>
						<InputRow>
							<label>주제:</label>
							<input type="text" name="groupSubject" value={groupSubject} onChange={handleChange} />
						</InputRow>
						<InputRow>
							<label>내용:</label>
							<textarea name="groupContents" value={groupContents} onChange={handleChange}></textarea>
						</InputRow>
						<InputRow>
							<label>함께할 친구:</label>
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
							{visible && (
								<CheckboxGroup>
									{friends.length > 0 && friends.map((value, index) => {
										return(
											<Checkbox key={index} >
												<input 
													type="checkbox" 
													value={value["memId"]} 
													onChange={checkChange} 
													checked={withFriends.includes(value["memId"])} 
												/>
												<label>{value["nickname"]}</label>
											</Checkbox>
										);
									})}
									<Button
										title="확인"
										width="39px"
										height="20px"
										color="#0077e4"
										type="button"
										onClick={() => {
											setVisible(!visible);
										}}
									/>
								</CheckboxGroup>
							)}
						</InputRow>
						{groupType === 1 && 
							<InputRow>
								<label>카테고리:</label>
								<Button
									title={category}
									width="70px"
									height="24px"
									type="button"
								/>
							</InputRow>
						}
						<InputRow>
							<label>기간 설정:</label>
							<SelectedCalender 
								startDate={startDate} 
								endDate={endDate}
								selectDate={startDate} 
								dateChange={startDateChange} 
								type={2} 
							/>
							<span className="tilde">~</span>
							<SelectedCalender 
								startDate={startDate} 
								endDate={endDate}
								selectDate={endDate} 
								dateChange={endDateChange} 
								type={3} 
							/>
						</InputRow>
					</Inputs>
				</Form>
				<Button
					title="등록하기"
					width="87px"
					height="28px"
					color="#0077e4"
					onClick={Create}
				/>
			</FormArea>
		</Wrapper>
	);
}

export default CreateGroup;

// 갓생 챌린지 - 그룹 생성하기 틀
const Wrapper = styled.div`
	position: absolute;
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	height: 100%;
	overflow: hidden;
	background-color: white;
`;

// 그룹 생성하기 타이틀 영역
const Title = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 65px;
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
const FormArea = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	height: 357px;
	padding: 10px 20px;
	z-index: 1;
	overflow-y: scroll;
	::-webkit-scrollbar {
		width: 0px;
	}
`;

// 폼
const Form = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 465px;
	/* height: 400px; */
	padding: 0 20px 15px 20px;
	overflow: hidden;
	border: 1px solid #b1b1b1;
	border-radius: 10px;
	margin-bottom: 10px;
	z-index: 1;
`;

// 사진 첨부하기 영역
const Picture = styled.div`
	position: relative;
	width: 465px;
	height: 135px;

	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 12px;

	& > #file {
		display: none;
	}

	& > img {
		position: absolute;
		width: 100%;
		height: 100%;
	}
`;

// 입력 폼
const Inputs = styled.div`
	width: 465px;
	height: auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	border-top: 1px solid #b1b1b1;
	padding: 13px 0 0 0;
`;

const InputRow = styled.div`
	position: relative;
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
		font-size: 11px;
		width: 348px;
		height: 50px;
		resize: none;
		border: 1px solid #b1b1b1;
		
		::-webkit-scrollbar {
			width: 0px;
		}
	}

	& > .tilde {
		margin: 0 7px;
	}

	:last-child {
		margin-bottom: 0px;
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
	position: absolute;
	bottom: 30px;
	left: 77px;
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
