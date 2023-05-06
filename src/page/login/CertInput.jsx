import React from "react";
import * as S from "../../styled/login/FindStyled";

function CertInput(props) {
    return(
        <S.Inputs>
            <span>인증번호</span>
            <input type="text" pattern="\d*"/>
            <button>확인</button>
        </S.Inputs>
    );
}

export default CertInput;