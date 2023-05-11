import React from 'react';
import { Wrapper } from 'styles/login/InputStyled';

function PhoneInput(props) {
    return(
        <Wrapper required={props.required}>
                    <span>전화번호</span>
                    <div>
                        <select>
                            <option value="010">010</option>
                            <option value="011">011</option>
                        </select>
                        -<input
                            type="number"
                            maxLength={4}
                            onInput={(e) => {
                                if (e.target.value.length > e.target.maxLength)
                                    e.target.value = e.target.value.slice(0, e.target.maxLength);
                            }}
                        />
                        -<input
                            type="number"
                            maxLength={4}
                            onInput={(e) => {
                                if (e.target.value.length > e.target.maxLength)
                                    e.target.value = e.target.value.slice(0, e.target.maxLength);
                            }}
                        />
                    </div>
                    <button>인증번호 발송</button>
                </Wrapper>
    );
}

export default PhoneInput;