import React, { useState } from 'react';
import styled from 'styled-components';

function Inputs(props) {
    const [file, setFile] = useState();

    switch(props.type) {
        case "text":
        case "password":
            return(
                <Wrapper height={props.height} isRequired={props.isRequired}>
                    <span>{props.name}</span>
                    <input type={props.type} />
                </Wrapper>
            );
        case "cert":
            return(
                <Wrapper height={props.height} isRequired={props.isRequired}>
                    <span>인증번호</span>
                    <input type="text" />
                    <button>확인</button>
                </Wrapper>
            );
        case "phone":
            return(
                <Wrapper height={props.height} isRequired={props.isRequired}>
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
        case "file":
            return(
                <Wrapper height={props.height} isRequired={props.isRequired}>
                    <span>프로필사진</span>
                    <input type="file" id="file" onChange={(e) => setFile(e.target.files)} />
                    <input type="text" value={file ? file[0].name : ""} readOnly />
                    <label for="file">업로드</label>
                </Wrapper>
            );
    }
}

export default Inputs;

// 실제 입력 부분
export const Wrapper = styled.div`
    width: 100%;
    height:${(props) => (props.height ? props.height : 65)}px;
    display: flex;
    align-items: center;
    justify-content: center;

    :not(:last-child) {
        border-bottom: 1px dashed #B1B1B1;
    }

    /* 입력 컴포넌트 이름 */
    span {
        font-size: 12px;
        color: #8C8C8C;
        width: 100px;

        /* 필수입력사항 */
        ::before {
            content: "\\002A";
            color: #D30000;
            margin-right: 5px;
            ${(props) => (
                !props.isRequired && `
                    visibility: hidden;
                `
            )}
        }
    }

    /* 기본텍스트 입력 */
    input[type=text],
    input[type=password] {
        width: 170px;
        height: 22px;
        border: none;
        border-bottom: 1px solid #B1B1B1;
        text-align: center;
        font-size: 12px;

        :last-child {
            margin-right:95px;
        }
    }

    /* 전화번호 입력 */
    div {
        width: 170px;
        height: 22px;
        display: flex;
        justify-content: space-between;
        color: #B1B1B1;
        cursor: default;
        
        * {
            width: 50px;
            height: 100%;
            text-align: center;
            border: 1px solid #B1B1B1;
            border-radius: 5px;
            font-size: 10px;
        }
    }

    input[type=file] {
        display: none;
    }

    /* 상호작용 버튼 */
    button, label {
        width: 80px;
        height: 24px;
        line-height: 24px;
        text-align: center;
        border: 1px solid #B1B1B1;
        border-radius: 5px;
        font-size: 10px;
        background-color: #0077E4;
        color: white;
        margin-left: 10px;
    }
`;