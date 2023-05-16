// 외부 import
import React from 'react';
// 내부 import
import { Wrapper } from 'styles/login/InputStyled';

function TextInput(props) {
    return(
        <Wrapper required={props.required} isReset={props.isReset}>
            <span>{props.name}</span>
            <input type={props.type} value={props.value} readOnly={props.readOnly} name={props.stateName} onChange={props.handleChange} />
        </Wrapper>
    );
}

export default TextInput;