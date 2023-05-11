import React from 'react';
import { Wrapper } from 'styles/login/InputStyled';

function TextBtnInput(props) {
    return(
        <Wrapper required={props.required}>
            <span>{props.name}</span>
            <input type="text" />
            <button>{props.btnName}</button>
        </Wrapper>
    );
}

export default TextBtnInput;