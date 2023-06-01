### "메인페이지 ver 2" 변경사항
1. 나의랭킹 백엔드 연결
2. 챌린지 기본틀 작성

#### 디렉토리 설명
- assets : 이미지 파일들이 저장되는 디렉토리
- component : 재사용 가능성이 있는 컴포넌트들이 저장되는 디렉토리
- pages : Router를 이용하는 페이지 컴포넌트들이 저장되는 디렉토리
- styles : 재사용 가능성이 있는 styled-components들이 저장되는 디렉토리

#### 컴포넌트 설명
* App : 메인 컴포넌트

- Page : 전체적인 기본 틀
- LoginPage : 로그인페이지의 틀
- MainPage : 메인페이지의 틀
- FriendPage : 친구페이지의 틀

* Main : 메인페이지
* GroupInvite : 그룹 초대 페이지

+ Login : 로그인 페이지
    + SignUp : 회원가입 페이지
    + FindId : 아이디 찾기 페이지
        + FindIdResult : 아이디 찾기 결과 페이지
    + FindPw : 비밀번호 찾기 페이지
        + PwReset : 비밀번호 재설정 페이지
    + SnsSignUp : SNS회원가입 페이지
+ Redirection : SNS API 코드를 백엔드로 전송하는 컴포넌트

- FileInput : 파일 업로드 컴포넌트
- PhoneInput : 전화번호 입력 컴포넌트
- TextInput : 일반텍스트, 비밀번호 입력 컴포넌트
- TextBtnInput : 일반텍스트 입력과 버튼 컴포넌트

* GlobalStyle : 전역 스타일
* InputStyled : Input 컴포넌트들의 스타일
* LoginStyled : Login 페이지와 하위 페이지에서 사용되는 스타일