import styled from "styled-components";

// 기본 틀
export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`; 

// 뒤로가기 버튼
export const Back = styled.div`
    position: absolute;
    cursor: pointer;
`;

// 로그인 텍스트
export const Title = styled.div`
    width: 381px;
    font-size: 22px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 40px;
    cursor: default;
`;

// 정보 입력 영역
export const InputArea = styled.div`
    width: 381px;
    border: 1px solid #B1B1B1;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
`;

// 찾기 메뉴
export const FindMenu = styled.div`
    display: flex;
    width: 100%;
    height: 40px;
    border-bottom: 1px solid #B1B1B1;
    cursor: pointer;
    font-size: 13px;
`;

// 선택된 메뉴
export const SelectedMenu = styled.div`
    width: 50%;
    height: 100%;
    background-color: #FFF6A7;
    text-align: center;
    line-height: 40px;
    
    :not(:last-child) {
        border-right: 1px solid #B1B1B1;
    }

    :last-child {
        border-left: 1px solid #B1B1B1;
    }
`;

// 선택되지않은 메뉴
export const NotSelectedMenu = styled.div`
    width: 50%;
    height: 100%;
    color: #878787;
    text-align: center;
    line-height: 40px;
`;

// 실제 입력 부분
export const Inputs = styled.div`
    width: 100%;
    height: 65px;
    display: flex;
    align-items: center;
    justify-content: center;

    :not(:last-child) {
        border-bottom: 1px dashed #B1B1B1;
    }

    & > span {
        margin-right: 15px;
        font-size: 12px;
        color: #8C8C8C;
        width: 50px;
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

    & > input[type="text"] {
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

// 찾기 버튼
export const FindButton = styled.button`
    width: 381px;
    height: 42px;
    background-color: #FFF066;
    border:1px solid #B1B1B1;
    border-radius: 10px;
    margin-top: 40px;
    cursor: pointer;
`;