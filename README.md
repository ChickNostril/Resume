# Resume

https://chicknostril.github.io/Resume/

React 페이지를 수정하고 다시 배포하는 과정

1. 클론하기
   GitHub에서 Repository를 클론하여 로컬로 가져옵니다. (일반 프로젝트와 동일)

bash
코드 복사
git clone https://github.com/ChickNostril/Resume.git
cd repository 2. 수정 작업
React 프로젝트에서 필요한 코드를 수정합니다.

패키지 설치
클론한 후 node_modules를 설치해야 합니다.

bash
코드 복사
npm install
프로젝트 수정
src 디렉토리 아래의 파일들(예: App.js, App.css 등)을 수정합니다.

로컬에서 실행 및 확인

bash
코드 복사
npm start
로컬 서버에서 수정된 내용을 확인합니다.

3. 빌드
   React는 GitHub Pages에 배포하기 위해 정적 파일로 빌드해야 합니다.

빌드 실행

bash
코드 복사
npm run build
build/ 디렉토리가 생성되며, 배포 가능한 정적 파일들이 포함됩니다.

빌드된 결과 확인 build/ 폴더가 잘 생성되었는지 확인하고, index.html과 정적 리소스가 포함되어 있는지 확인합니다.

4. GitHub Pages 설정 (한 번만 설정 필요)

1) package.json에 homepage 추가
   React 프로젝트를 클론한 후, package.json 파일을 열고 아래 내용을 추가합니다:

json
코드 복사
"homepage": "https://chicknostril.github.io/Resume/",
username과 repository를 본인의 GitHub 정보로 바꿔야 합니다.

5. 자동화 스크립트 추가
   React를 GitHub Pages에 쉽게 배포하려면 gh-pages 패키지를 사용합니다.

gh-pages 설치

bash
코드 복사
npm install gh-pages --save-dev
package.json 수정 아래와 같은 내용을 scripts에 추가합니다:

json
코드 복사
"scripts": {
"predeploy": "npm run build",
"deploy": "gh-pages -d build"
}
predeploy: 배포 전에 자동으로 빌드 실행.
deploy: 빌드 결과를 gh-pages 브랜치에 배포.

6. 배포
   수정 후 다시 배포하려면 아래 명령어를 실행합니다:

bash
코드 복사
npm run deploy
이 명령어는 빌드 결과물을 gh-pages 브랜치에 푸시하고, GitHub Pages에서 배포를 업데이트합니다.

7. 배포 확인
   몇 분 후 GitHub Pages URL에서 수정된 내용을 확인합니다:

URL: https://chicknostril.github.io/Resume/

8. 브랜치 전략 (Optional)
   GitHub Pages가 사용하는 브랜치를 확인하세요:
   일반적으로 gh-pages 브랜치입니다.
   기본 브랜치(main 또는 master)에서 코드를 수정하고, npm run deploy를 통해 빌드된 파일을 gh-pages 브랜치로 배포합니다. 9. 수정 후 반복 배포
   React 프로젝트를 수정한 다음에는 항상 다음 과정을 반복합니다:

코드를 수정하고 저장.
로컬에서 테스트 (npm start).
빌드 (npm run build).
배포 (npm run deploy).
