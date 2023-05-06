import React from "react";
import * as S from "../../styled/login/FindStyled";

function PhoneInput(props) {
    return(
        <S.Inputs>
            <span>전화번호</span>
            <select>
                <option value="010">010</option>
                <option value="011">011</option>
            </select>
            <div/>
            <input
                type="number"
                maxLength={4}
                onInput={(e) => {
                    if (e.target.value.length > e.target.maxLength) {
                        e.target.value = e.target.value.slice(0, e.target.maxLength);
                }}}
            />
            <div/>
            <input
                type="number"
                maxLength={4}
                onInput={(e) => {
                    if (e.target.value.length > e.target.maxLength)
                        e.target.value = e.target.value.slice(0, e.target.maxLength);
                }}
            />
            <button>인증번호 발송</button>
        </S.Inputs>
    );
}

export default PhoneInput;