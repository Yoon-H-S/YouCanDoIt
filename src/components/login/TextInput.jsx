import React from 'react';
import { Wrapper } from 'styles/login/InputStyled';

function TextInput(props) {
    return(
        <Wrapper required={props.required} isReset={props.isReset}>
            <span>{props.name}</span>
            <input type={props.type} value={props.value} readOnly={props.readOnly} />
        </Wrapper>
    );
}

export default TextInput;