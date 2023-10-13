import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

function RemindTime(props) {
    const { type, reminderChange, checked } = props;
    const [timeName, setTimeName] = useState('');
    const [yCoordinate, setYCoordinate] = useState(1);
    const [customUnit, setCustomUnit] = useState(1);
    const [customTime, setCustomTime] = useState(0);

    useEffect(() => {
        switch(type) {
            case "start":
                setTimeName('일정 시작시간');
                break;
            case "min10":
                setTimeName('10분 전');
                break;
            case "hour1":
                setTimeName('1시간 전');
                break;
            case "day1":
                setTimeName('1일 전');
                break;
            case "custom":
                setTimeName('사용자 지정 시간');
                break;
        }
    },[]);

    const onChange = (type) => {
        switch(type) {
            case "start":
                reminderChange(type, 0);
                break;
            case "min10":
                reminderChange(type, 10);
                break;
            case "hour1":
                reminderChange(type, 60);
                break;
            case "day1":
                reminderChange(type, 1440);
                break;
            case "custom":
                reminderChange(type, customTime * customUnit);
                break;
        }
    }

    const customTimeChange = (e) => {
        setCustomTime(e.target.value);
        reminderChange('custom', e.target.value * customUnit);
    }

    const customUnitChange = (unit, y) => {
        setCustomUnit(unit);
        setYCoordinate(y);
        reminderChange('custom', customTime * unit);
    }

    return(
        <TimeWrapper>
            <input
                type="radio"
                name="reminderTime"
                id={type}
                onChange={() => onChange(type)}
                checked={checked === type}
            />
            <label htmlFor={type}>{timeName}</label>
            {(type === "custom" && checked === "custom") && 
                <CustomTime>
                    <div>
                        <input type="number" value={customTime} onChange={customTimeChange} />
                    </div>
                    <ul>
                        <Spinner y={yCoordinate}>
                            <li
                                className={customUnit === 1 ? 'selected' : ''}
                                onClick={() => customUnitChange(1, 1)}
                            >
                                분
                            </li>
                            <li
                                className={customUnit === 60 ? 'selected' : ''}
                                onClick={() => customUnitChange(60, 0)}
                            >
                                시간
                            </li>
                            <li
                                className={customUnit === 1440 ? 'selected' : ''}
                                onClick={() => customUnitChange(1440, -1)}
                            >
                                일
                            </li>
                        </Spinner>  
                    </ul>
                </CustomTime>
            }
        </TimeWrapper>
    );
}

export default RemindTime;

/** 각 알림 설정 시간 */
const TimeWrapper = styled.div`
    display: flex;
    margin: 5px 0 0 34px;

    & > input[type=radio]{
        display: none;

        :checked + label::before{
            content:"✔";
            background-color: #B8E5FF;
        }
    }

    & > label {
        display: flex;
        font-size: 11px;
        width: fit-content;
        position: relative;
        cursor: pointer;

        ::before{
            content: "";
            width: 18px;
            height: 18px;
            border:1px solid #B1B1B1;
            border-radius: 22px;
            margin-right: 31px;
            font-size: 10px;
            text-align: center;
        }
    }
`;

/** 알림시간 커스텀 */
const CustomTime = styled.div`
    display: flex;
    justify-content: space-between;
    height: 68px;
    padding: 8px 25px;
    width: 135px;
    border-top: 1px solid #B1B1B1;
    border-bottom: 1px solid #B1B1B1;
    margin: 9px 0 0 41px;

    & > div {
        display: flex;
        align-items: center;
        height: 100%;
        flex: 0.7;
        

        input {
            height: 30%;
            width: 40%;
            font-size: 10px;
            text-align: center;
            border: none;
            border-bottom: 1px solid #B1B1B1;
        }
    }

    & > ul {
        height: 100%;
        flex: 0.3;
        font-size: 10px;
        color: #CBCBCB;
        list-style: none;
        overflow: hidden;

        div {
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            li {
                cursor: pointer;
            }

            .selected {
                color: black !important;
            }
        }
    }
`;

/** 알림시간 커스텀 분, 시간, 일 선택 */
const Spinner = styled.div`
    position: relative;
    top: ${(props) => props.y * 17.5}px;
    transition: 0.3s;
`;