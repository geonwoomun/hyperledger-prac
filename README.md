## 사용 방법

node 버전 : 10.16.1
npm 버전 : 6.9.0

오류나면 node와 npm 버전 맞춰 볼 것.

git clone을 원하는 폴더에 받은 뒤

vscode(또는 다른 에디터)로 폴더를 연다.

server.js와 package.json이 있는 폴더에서

npm install을 입력하여 package.json 의 dependencies에 적혀 있는 모듈들을 모두 설치한다.

그리고 cd ui를 입력하여 ui 폴더로 이동하여

npm install을 입력하여 ui/package.json의 dependencies에 적혀 있는 모듈들을 모두 설치한다.

그리고 npm install -g nodemon 을 입력하여 nodemon을 설치 하여 준다.

그리고 젤 상위 폴더에서 nodemon server를 입력하여 서버를 실행시켜준다.

5000서버가 열렸습니다. 라고 콘솔창에 나오면 서버가 열린 것이다.

그리고 cd ui를 입력하여 ui 폴더로 이동하여 npm start 또는 yarn start를 입력하여 클라이언트를 실행시킨다.

그러면 3000번 포트에서 알아서 열리고 웹을 사용 할 수 있다.

오류 나면 말해주세요.

ui 약간 수정 및 리팩토링 했습니다.

현재 백엔드 구현 :
로그인, 회원가입, 