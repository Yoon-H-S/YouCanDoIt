import styled from "styled-components";

// 실제 입력 부분
export const Wrapper = styled.div`
    width: 100%;
    height: 74px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: default;

    :not(:last-child) {
        border-bottom: 1px dashed #B1B1B1;
    }

    /* 입력 컴포넌트 이름 */
    span {
        font-size: 14px;
        font-weight: 500;
        color: #8C8C8C;
        width: ${(props) => props.isReset ? 107 : 91}px;

        /* 필수입력사항 */
        ${(props) => (
            props.required && `
                width: 102px;

                ::before {
                    content: "\\002A";
                    font-size: 10px;
                    font-weight: bold;
                    color: #D30000;
                    margin-right: 5px;
                    ${
                        (props.required === 2) && `
                            visibility: hidden;
                        `
                    }
                }
            `
        )}
    }

    /* 기본텍스트 입력 */
    input[type=text], 
    input[type=password] {
        width: 213px;
        height: 23px;
        border: none;
        border-bottom: 1px solid #B1B1B1;
        text-align: center;
        font-size: 12px; 

        :last-child {
            margin-right:${(props) => props.isReset ? 48 : 95}px;
        }

        :read-only {
            border-bottom: none!important;
            font-size: 14px;
            font-weight: 500;
            text-align: left;
        }
    }

    /* 전화번호 입력 */
    div {
        width: 213px;
        height: 26px;
        display: flex;
        justify-content: space-between;
        color: #B1B1B1;
        cursor: default;
        
        select {
            width: 47px;
            height: 100%;
            text-align: center;
            border: 1px solid #B1B1B1;
            border-radius: 5px;
            font-size: 11px;
        }

        input {
            width: 62px;
            height: 100%;
            text-align: center;
            border: 1px solid #B1B1B1;
            border-radius: 5px;
            font-size: 11px;
        }
    }

    input[type=file] {
        display: none;
    }

    /* 상호작용 버튼 */
    button, label {
        width: 75px;
        height: 26px;
        line-height: 26px;
        text-align: center;
        border: 1px solid #B1B1B1;
        border-radius: 5px;
        font-size: 10px;
        background-color: #0077E4;
        color: white;
        margin-left: 20px;
        cursor: pointer;

        :disabled {
            opacity: 0.5;
            cursor: default;
        }
    }
`;