#### 디렉토리 설명
- assets : 이미지 파일들이 저장되는 디렉토리
- component : 재사용 가능성이 있는 컴포넌트들이 저장되는 디렉토리
- pages : Router를 이용하는 페이지 컴포넌트들이 저장되는 디렉토리 
- styles : 재사용 가능성이 있는 styled-components들이 저장되는 디렉토리

#### 컴포넌트 설명
- App : 메인 컴포넌트

- Login : 로그인 페이지
-   SignUp : 회원가입 페이지
-   FindId : 아이디 찾기 페이지
-       FindIdResult : 아이디 찾기 결과 페이지
-   FindPw : 비밀번호 찾기 페이지
-       PwReset : 비밀번호 재설정 페이지

- FileInput : 파일 업로드 컴포넌트
- PhoneInput : 전화번호 입력 컴포넌트
- TextInput : 일반텍스트, 비밀번호 입력 컴포넌트
- TextBtnInput : 일반텍스트 입력과 버튼 컴포넌트

- GlobalStyle : 전역 스타일
- InputStyled : Input 컴포넌트들의 스타일
- LoginStyled : Login 페이지와 하위 페이지에서 사용되는 스타일

### "로그인 페이지 디자인 완료" 변경사항
1. 웹사이트 폰트 변경(Noto Sans KR)
2. 디렉토리 구조 변경 및 각 파일 재배치
3. index.css -> GlobalStyle.jsx로 변경
4. Inputs 컴포넌트 세분화
5. 로그인 페이지 및 각 하위 페이지 크기조절 및 내용 추가
6. 아이디 찾기 결과 페이지(FindIdResult) 완성
7. 비밀번호 재설정 페이지(RwReset) 완성

