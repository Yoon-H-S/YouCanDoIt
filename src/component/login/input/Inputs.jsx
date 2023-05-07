import React from "react";
import styled from "styled-components";

function Inputs(props) {
    switch(props.type) {
        case "text":
        case "password":
            return(
                <Wrapper height={props.height}>
                    <span>{props.name}</span>
                    <input type={props.type}/>
                </Wrapper>
            );
            break;
        case "cert":
            return(
                <Wrapper height={props.height}>
                    <span>인증번호</span>
                    <input type="text" pattern="\d*"/>
                    <button>확인</button>
                </Wrapper>
            );
            break;
        case "phone":
            return(
                <Wrapper height={props.height}>
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
                            if (e.target.value.length > e.target.maxLength)
                                e.target.value = e.target.value.slice(0, e.target.maxLength);
                        }}
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
                </Wrapper>
            );
            break;    
    }
}

export default Inputs;

// 실제 입력 부분
export const Wrapper = styled.div`
    width: 100%;
    height:${(props) => (props.height ? props.height : 65) }px;
    display: flex;
    align-items: center;
    justify-content: center;

    :not(:last-child) {
        border-bottom: 1px dashed #B1B1B1;
    }

    & > span {
        font-size: 12px;
        color: #8C8C8C;
        width: 80px;
    }

    & > select {
        width: 43px;
        height: 22px;
        border: 1px solid #B1B1B1;
        border-radius: 5px;
        font-size: 10px;
    }

    & > input[type=number] {
        width: 50px;
        height: 22px;
        text-align: center;
        border: 1px solid #B1B1B1;
        border-radius: 5px;
        font-size: 10px;

        ::-webkit-outer-spin-button, ::-webkit-inner-spin-button {
            -webkit-appearance: none;
        }
    }

    & > div {
        content: "";
        border-top: 1px solid #B1B1B1;
        width: 8px;
        height: 0;
        font-size: 0;
        line-height: 0;
        margin: 0 7px;
    }

    & > button {
        width: 80px;
        height: 24px;
        border: 1px solid #B1B1B1;
        border-radius: 5px;
        font-size: 10px;
        background-color: #0077E4;
        color: white;
        margin-left: 15px;
    }

    & > input[type=text],input[type=password] {
        width: 187px;
        height: 22px;
        border: none;
        border-bottom: 1px solid #B1B1B1;
        text-align: center;
        font-size: 10px;

        :last-child {
            margin-right:95px;
        }
    }
`;