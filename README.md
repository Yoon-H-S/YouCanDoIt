#### 디렉토리 설명
- assets : 이미지 파일들이 저장되는 디렉토리
- component : 재사용 가능성이 있는 컴포넌트들이 저장되는 디렉토리
- pages : Router를 이용하는 페이지 컴포넌트들이 저장되는 디렉토리 
- styles : 재사용 가능성이 있는 styled-components들이 저장되는 디렉토리

#### 컴포넌트 설명
* App : 메인 컴포넌트

- Page : 전체적인 기본 틀
- LoginPage : 로그인페이지의 틀

+ Login : 로그인 페이지
    + SignUp : 회원가입 페이지
    + FindId : 아이디 찾기 페이지
        + FindIdResult : 아이디 찾기 결과 페이지
    + FindPw : 비밀번호 찾기 페이지
        + PwReset : 비밀번호 재설정 페이지

- FileInput : 파일 업로드 컴포넌트
- PhoneInput : 전화번호 입력 컴포넌트
- TextInput : 일반텍스트, 비밀번호 입력 컴포넌트
- TextBtnInput : 일반텍스트 입력과 버튼 컴포넌트

* GlobalStyle : 전역 스타일
* InputStyled : Input 컴포넌트들의 스타일
* LoginStyled : Login 페이지와 하위 페이지에서 사용되는 스타일

### "로그인, 회원가입 ver 3" 변경사항
1. 로그인 구현
2. 전화번호 인증 구현
3. 비밀번호 일치 유효성검사 구현
4. 아이디 저장 구현
5. 유효성검사(아이디 길이, 닉네임 길이, 비밀번호 형식) 미구현
6. SNS로그인 미구현
7. App.js에서 웹사이트 기본 틀 Page.jsx로 분리
8. 로그인 여부로 페이지 이동을 위한 Page.jsx에서 LoginPage.jsx 분리(useEffect가 다르다.)
9. index컴포넌트를 임시로 Page컴포넌트로 적용

