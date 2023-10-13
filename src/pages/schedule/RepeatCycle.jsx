import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

function RepeatCycle(props) {
    const { type, repeatChange, checked } = props;
    const [typeName, setTypeName] = useState('');

    useEffect(() => {
        switch(type) {
            case 0:
                setTypeName('반복 안 함');
                break;
            case 1:
                setTypeName('매주');
                break;
            case 2:
                setTypeName('매월');
                break;
            case 3:
                setTypeName('매년');
                break;
        }
    },[]);

    return(
        <CycleWrapper>
            <input
                type="radio"
                name="RepeatCycle"
                id={type}
                onChange={() => repeatChange(type)}
                checked={checked === type}
            />
            <label htmlFor={type}>{typeName}</label>
        </CycleWrapper>
    );
}

export default RepeatCycle;

/** 각 반복 주기 */
const CycleWrapper = styled.div`
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