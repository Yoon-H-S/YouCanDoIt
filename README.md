#### 디렉토리 설명
- component : 실제 보여지는 컴포넌트가 저장되는 디렉토리
- component/login : 로그인 페이지와 하위 페이지들이 저장되는 디렉토리
- styled : styled-components가 저장되는 디렉토리

#### 컴포넌트 설명
- Page.jsx : 메인 틀이되는 컴포넌트\
- Login.jsx : 로그인 페이지\
-   SignUp.jsx : 회원가입 페이지(미완성)\
-   FindId.jsx : 아이디 찾기 페이지\
-   FindPw.jsx : 비밀번호 찾기 페이지\
    -   Inputs.jsx : 입력 관련 컴포넌트(미완성)\

* LoginStyled.jsx : 로그인 컴포넌트와 그 하위 컴포넌트의 재사용 스타일\

index.css : 웹사이트 전체에 적용되는 스타일/

---

### demo 4 변경사항
1. 디렉토리 이름 수정
2. 회원가입, 찾기 페이지 입력 관련 컴포넌트 수정(하나로 모음)
3. 재사용되는 스타일을 정리
4. import 절대경로 사용을 위해 jsconfig.json파일 추가
