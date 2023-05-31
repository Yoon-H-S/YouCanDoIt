import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        font-family: 'Noto Sans KR', sans-serif;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        flex-shrink: 0;

        ::before,
        ::after {
            box-sizing: border-box;
        }
    }

    :root {
        --primary-color: #FFF066;
    }

    body {
        min-height: 100vh;
        min-width: fit-content;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    /* 선택시 아웃라인 스타일 제거 */
    input, select {
        outline: none;
    }

    /* 이미지의 비율 고정 */
    img {
        object-fit: cover;
    }

    /* number타입의 버튼 제거 */
    input[type=number]::-webkit-outer-spin-button,
    input[type=number]::-webkit-inner-spin-button {
        -webkit-appearance: none;
    }
`;

export default GlobalStyle;