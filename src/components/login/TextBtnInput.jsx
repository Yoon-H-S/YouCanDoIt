// 외부 import
import React from 'react';
// 내부 import
import { Wrapper } from 'styles/login/InputStyled';

function TextBtnInput(props) {
    return(
        <Wrapper required={props.required}>
            <span>{props.name}</span>
            <input type="text" name={props.stateName} onChange={props.handleChange} />
            <button onClick={props.click}>{props.btnName}</button>
        </Wrapper>
    );
}

export default TextBtnInput;