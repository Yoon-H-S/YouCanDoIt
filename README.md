#### 디렉토리 설명
- assets : 이미지 파일들이 저장되는 디렉토리
- component : 재사용 가능성이 있는 컴포넌트들이 저장되는 디렉토리
- pages : Router를 이용하는 페이지 컴포넌트들이 저장되는 디렉토리 
- styles : 재사용 가능성이 있는 styled-components들이 저장되는 디렉토리

#### 컴포넌트 설명
* App : 메인 컴포넌트

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

### "백엔드 연결" 변경사항
1. axios 패키지 설치
2. proxy 설정
3. 회원가입 구현
4. 아이디 찾기 구현
5. 비밀번호 찾기 구현
6. 비밀번호 재설정 구현
7. 유효성검사(비밀번호 일치 등) 미완성
8. 로그인 미구현
9. 전화번호 인증 미구현
10. SNS로그인 미구현

