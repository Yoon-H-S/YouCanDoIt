import styled from "styled-components";

// 로그인 틀
export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`; 

// 상단 로고
export const Title = styled.div`
    font-size: 30px;
    font-weight: bold;
    line-height: 80px;
    color: #DCA600;
`; 

// 실제 콘텐츠가 삽입되는 영역
export const Inside = styled.div`
    width: 1263px;
    height: 473px;
    background-color: white;
    margin-bottom: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`; 

// 로그인 텍스트
export const LoginTitle = styled.div`
    font-size: 22px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 30px;
`; 

// 정보 입력 영역
export const StyledInput = styled.div`
    width: 381px;
    height: 42px;
    margin: 8px 0;
    padding: 0 15px;
    border: 1px solid #B1B1B1;
    border-radius: 5px;
    display: flex;
    align-items: center;

    & > img {
        width: 15px;
        height: 15px;
        margin-right: 20px;
    }

    & > input {
        border: none;
        outline: none;
        font-size: 12px;
        width: 100%;
        height: 100%;
    }
`;

// 회원가입, 아이디찾기, 비밀번호찾기
export const Linklist = styled.ul`
    list-style-type: none;
    width: 381px;
    display: flex;
    font-size: 12px;
    margin: 10px 0;

    & > * {
        width: 100%;
        text-align: center;
        :not(:last-child) {
            border-right: 1px solid #5C5C5C;
        }
    }
`;

// 로그인 버튼
export const LoginButton = styled.button`
    width: 381px;
    height: 42px;
    background-color: #FFF066;
    border:1px solid #B1B1B1;
    border-radius: 10px;
    margin: 10px 0;
`;

//sns 로그인 라인
export const Line = styled.div`
    width: 407px;
    display: flex;
    align-items: center;
    color: #AEAEAE;
    font-size: 12px;
    margin: 8px 0px;

    ::before, ::after {
        content: "";
        flex-grow: 1;
        border-top: 1px dashed #B1B1B1;
        height: 0px;
        font-size: 0px;
        line-height: 0px;
        margin: 0px 8px;
    }
`;

//SNS 로그인 영역
export const SNSWrap = styled.div`
    margin-top: 10px;
    width: 200px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

// 각 SNS로그인 개체
export const SNSLogin = styled.img`
    width: 40px;
    height: 40px;
    border: 1px solid #B1B1B1;
    border-radius: 10px;
`;

