// 외부 import
import React, { useState, useEffect } from 'react';
// 내부 import
import { Wrapper } from 'styles/login/InputStyled';

function PhoneInput(props) {
    const [values, setValues] = useState({
        first: "010",
        second: "",
        third: ""
    });
    // 비구조화 할당
    const {first, second, third} = values;

    // 부모에게 state값 전달
    useEffect(() => {
        props.phoneChange(first + second + third);
    }, [values])

    // input값이 변경되면 state에 저장
    const onChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
    };

    // 전화번호 최대글자 제한
    const onInput = (e) => {
        if (e.target.value.length > e.target.maxLength)
            e.target.value = e.target.value.slice(0, e.target.maxLength);
    };

    return(
        <Wrapper required={props.required}>
            <span>전화번호</span>
            <div>
                <select name="first" onChange={onChange}>
                    <option value="010">010</option>
                    <option value="011">011</option>
                </select>
                -<input type="number" name="second" maxLength={4} onInput={onInput} onChange={onChange} />
                -<input type="number" name="third" maxLength={4} onInput={onInput} onChange={onChange} />
            </div>
            <button>인증번호 발송</button>
        </Wrapper>
    );
}

export default PhoneInput;