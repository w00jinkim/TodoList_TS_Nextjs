# Todo List Made with TypeScript and Next.js

- TypeScript 와 Next.js 를 이용한 투두 리스트 만들기
- 접속시 베이스 페이지 랜딩
- 로그인/ 회원가입 기능
- 회원가입시 로그인 페이지 이동
- 로그인 후 투두리스트 페이지 이동
- 투두 리스트 내 작성, 수정, 삭제 등등 진행 가능
- 로그아웃시 JWT 삭제 및 로그인 페이지 이동

<br/><br/>

## 배포

- ~~<a href="https://6439018c88cbe71b26c0f586--cute-crisp-d78737.netlify.app/">넷틀리파이링크<a/>~~ 현재 api 제공 종료로 api 사용 불가능
- 테스트 아이디 : test@test.org
- 테스트 비밀번호 : 1234test

<br/><br/>

## 참여자

|                                                                Front-end                                                                |
| :-------------------------------------------------------------------------------------------------------------------------------------: |
|                                                                 김우진                                                                  |
|               <img width="95px" height="95px" src="https://avatars.githubusercontent.com/u/111094669?v=4" alt="avatar"/>                |
| [<img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white"/>](https://github.com/w00jinkim) |

<br/><br/>

## 구현사항

  <br/>
1. 로그인 / 회원가입 <br/>
 
- 회원가입과 로그인 페이지에 이메일과 비밀번호의 유효성 검사기능을 구현<br/>
&nbsp; 이메일 조건: @ 포함<br/>
&nbsp; 비밀번호 조건: 8자 이상<br/>
&nbsp; 입력된 이메일과 비밀번호가 유효성 검사를 통과하지 못한다면 button에 disabled 속성을 부여<br/>
  
- 회원가입 페이지에서 버튼을 클릭 시 회원가입을 진행하고 회원가입이 정상적으로 완료되었을 시 /signin 경로 이동<br/>
  
- 로그인 페이지에서 버튼을 클릭 시, 로그인을 진행하고 로그인이 정상적으로 완료되었을 시 /todo 경로로 이동<br/>
&nbsp;로그인 API는 로그인이 성공했을 시 Response Body에 JWT를 포함해서 응답<br/>
&nbsp;응답받은 JWT는 로컬 스토리지에 저장<br/>

- 로그인 여부에 따른 리다이렉트 처리를 구현<br/>
  &nbsp;로컬 스토리지에 토큰이 있는 상태로 /signin 또는 /signup 페이지에 접속한다면 /todo 경로로 리다이렉트<br/>
  &nbsp;로컬 스토리지에 토큰이 없는 상태로 /todo페이지에 접속한다면 /signin 경로로 리다이렉트<br/>

2. TODO LIST<br/>

- /todo경로에 접속하면 투두 리스트 목록 렌더링<br/>
  목록에서는 TODO의 내용과 완료 여부 표시<br/>

- 추가 button을 클릭하면 입력 input의 내용이 새로운 TODO 추가<br/>

- TODO의 체크박스를 통해 완료 여부를 수정 <br/>

- 투두 리스트의 삭제 기능을 구현 <br/>

- 투두 리스트의 수정 기능을 구현<br/>
  &nbsp;TODO 우측의 수정 버튼을 누르면 수정모드 활성화<br/>
  &nbsp;수정모드에서는 TODO의 내용이 input창 안에 입력된 형태로 변경 <br/>
  &nbsp;수정모드에서는 TODO의 우측에 제출버튼과 취소버튼 표시 <br/>
  &nbsp;제출버튼을 누르면 수정한 내용 제출시 내용 업데이트 <br/>
  &nbsp;취소버튼을 누르면 수정한 내용을 초기화 하고, 수정모드 비활성화 <br/>

- 로그아웃 기능 구현 <br/>
  &nbsp;로그아웃 버튼을 누르면 JWT 삭제 및 /signin 경로로 리다이렉트<br/>

## 개발 기간

- 2023-04-03 ~ 2023-04-14

## TECH-STACKS

### Front-End

<p>

<img src="https://img.shields.io/badge/TypeScript-3178C6?logo=TypeScript&logoColor=white&style=for-the-badge" />
<img src="https://img.shields.io/badge/next.js-000000?logo=nextdotjs&logoColor=white&style=for-the-badge" />
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?logo=JavaScript&logoColor=white&style=for-the-badge" />
<img src="https://img.shields.io/badge/React-61DAFB?logo=React&logoColor=white&style=for-the-badge" />
<img src="https://img.shields.io/badge/TailwindCSS-06B6D4?logo=TailwindCSS&logoColor=white&style=for-the-badge" />
<img src="https://img.shields.io/badge/Netlify-00C7B7?logo=Netlify&logoColor=white&style=for-the-badge" />
