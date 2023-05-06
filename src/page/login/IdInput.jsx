import React from "react";
import * as S from "../../styled/login/FindStyled";

function IdInput(props) {
    return(
        <S.Inputs>
            <span>아이디</span>
            <input type="text" pattern="\d*"/>
        </S.Inputs>
    );
}

export default IdInput;