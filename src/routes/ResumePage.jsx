// src/routes/ResumePage.jsx
import React from "react";
import { Link } from "react-router-dom";
import styles from "./ResumePage.module.scss";
import projects from "../data/projects.json";

const ResumePage = () => {
  return (
    <div className={styles.resume}>
      <h1 className={styles.title}>신정엽 | 이력서</h1>
      <div className={styles.aboutMe}>
        <div className={styles.information}>
          <img
            className={styles.idPhoto}
            src={`${process.env.PUBLIC_URL}/IdPhoto.jpeg`}
            alt="ID Photo"
          />
        </div>
        <div className={styles.info}>
          <div className={styles.contact}>
            <h3>Phone</h3>
            <p>010-7127-1089</p>
          </div>
          <div className={styles.contact}>
            <h3>Contact</h3>
            <p>strik241@gmail.com</p>
          </div>
          <div className={styles.link}>
            <h3>Github</h3>
            <p>
              <a
                href="https://github.com/ChickNostril"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://github.com/ChickNostril
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className={styles.introduce}>
        <h1>Introduce</h1>
        <h3>
          안녕하세요, 프로젝트를 위한 필요한 기술과 경험을 갖춘 주니어
          프론트엔드 개발자 신정엽입니다.
        </h3>
        <p>
          최신 웹 기술과 트렌드를 꾸준히 학습하며, 이를 실제 프로젝트에
          적용해가며 실력을 쌓고 있습니다.
          <br />
          React와 Zustand를 활용한 상태 관리 최적화, 실시간 데이터 처리 경험을
          바탕으로, 팀 프로젝트에서 UI/UX 개선 및 데이터 일관성 유지에
          기여했습니다.
          <br />
          Kakao OAuth 인증과 API 연동을 통해 사용자 인증 및 데이터 관리 시스템을
          구축한 경험이 있습니다.
          <br />
          프로젝트에서 얻은 실무 경험을 통해, 효율적인 코드 작성과 문제 해결
          능력을 키웠으며, 사용자 중심의 인터페이스를 설계해 개발 속도와 품질을
          함께 높이는 방향으로 일하고자 합니다.
          <br />
          즉각적인 기여를 통해 회사의 목표 달성에 힘을 보태겠습니다.
          <br />
          앞으로도 새로운 도전에 적극적으로 임하며, 지속적인 학습과 성장을 통해
          더 나은 개발자가 되기 위해 노력하겠습니다. 감사합니다.
        </p>
      </div>

      <div className={styles.skills}>
        <h1>Skills</h1>
        <div className={styles.skillCategory}>
          <h2>Front-end</h2>
          <ul>
            <li>
              <strong>React</strong>:
              <ul>
                <li>
                  React Router를 사용하여 단일 페이지 애플리케이션에서 라우팅을
                  구현할 수 있습니다.
                </li>
                <li>
                  React Hooks를 사용하여 함수형 컴포넌트 상태를 관리할 수
                  있습니다.
                </li>
                <li>
                  Zustand와 같은 상태 관리 도구를 사용하여 전역 상태를
                  효율적으로 관리하고, 복잡한 상태 변화를 효과적으로 처리할 수
                  있습니다.
                </li>
              </ul>
            </li>
            <li>
              <strong>Javascript</strong>:
              <ul>
                <li>
                  비동기 처리를 위해 Promise와 async/await을 사용할 수 있습니다.
                </li>
                <li>
                  모듈화를 통해 함수 간의 결합도를 낮추고 재사용성을 높일 수
                  있습니다.
                </li>
                <li>
                  상황에 따라 적절한 이벤트 리스너를 선택하여 사용할 수
                  있습니다.
                </li>
              </ul>
            </li>
            <li>
              <strong>Typescript</strong>:
              <ul>
                <li>
                  정적 타입을 사용하여 코드의 안정성과 가독성을 향상시킬 수
                  있습니다.
                </li>
                <li>인터페이스와 제네릭으로 타입 검사를 할 수 있습니다.</li>
              </ul>
            </li>
            <li>
              <strong>Three.js & @react-three/fiber (R3F)</strong>:
              <ul>
                <li>
                  Three.js를 통해 WebGL 기반의 3D 그래픽과 애니메이션을 개발할
                  수 있습니다.
                </li>
                <li>
                  @react-three/fiber를 사용하여 React 환경에서 Three.js의 기능을
                  더 간결하게 활용할 수 있습니다.
                </li>
                <li>
                  복잡한 3D 모델을 로드하고, 실시간 상호작용 및 사용자 정의
                  애니메이션을 추가할 수 있습니다.
                </li>
              </ul>
            </li>
            <li>
              <strong>HTML</strong>: 웹 페이지의 구조를 설계하고 효율적으로
              구성할 수 있습니다.
            </li>
            <li>
              <strong>CSS</strong>:
              <ul>
                <li>
                  다양한 레이아웃 기법을 사용하여 반응형 웹 디자인을 구현할 수
                  있습니다.
                </li>
                <li>
                  모듈화된 스타일시트를 작성하여 유지보수성을 높일 수 있습니다.
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <div className={styles.skillCategory}>
          <h2>Back-end</h2>
          <ul>
            <li>
              <strong>express</strong>:
              <ul>
                <li>
                  CRUD 기능을 포함한 RESTful API를 설계하고 구현할 수 있습니다.
                </li>
                <li>
                  Entity-Relationship Diagram을 통해 효율적인 데이터베이스
                  구조를 설계할 수 있습니다.
                </li>
                <li>
                  Express.js를 사용하여 웹 서버를 설정하고 REST API를 설계할 수
                  있습니다.
                </li>
                <li>
                  Cookie 및 Session을 사용해 사용자 인증 및 권한을 관리할 수
                  있습니다.
                </li>
              </ul>
            </li>
            <li>
              <strong>FastAPI</strong>:
              <ul>
                <li>
                  Python 기반의 FastAPI를 사용하여 고성능 RESTful API를 설계하고
                  구현할 수 있습니다.
                </li>
                <li>
                  비동기 처리(Async/Await)를 통해 빠르고 확장 가능한 서버를
                  구축할 수 있습니다.
                </li>
                <li>
                  자동화된 API 문서를 활용하여 개발 및 테스트를 간소화할 수
                  있습니다.
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <div className={styles.skillCategory}>
          <h2>협업 도구</h2>
          <ul>
            <li>
              <strong>Git</strong>:
              <ul>
                <li>
                  코드 버전 관리를 통해 팀원들과의 협업을 효율적으로 진행할 수
                  있습니다.
                </li>
                <li>
                  브랜치 전략을 활용해 협업 시 충돌을 최소화할 수 있습니다.
                </li>
                <li>
                  GitHub을 통해 코드 리뷰 및 피드백을 받고, 협업을 원활하게
                  진행할 수 있습니다.
                </li>
                <li>
                  GitHub Enterprise를 사용해 사내 전용 GitHub 페이지를 통해 코드
                  관리를 수행하고, 보안이 강화된 환경에서 협업한 경험이
                  있습니다.
                </li>
              </ul>
            </li>
            <li>
              <strong>Notion</strong>: 팀 커뮤니케이션을 효율적으로 관리하고,
              실시간으로 협업할 수 있는 환경을 제공할 수 있습니다.
            </li>
          </ul>
        </div>
      </div>

      {/* <div className={styles.projects}>
        <h1>Projects</h1>
        <div className={styles.projectCard}>
          <div className={styles.projectContent}>
            <div className={styles.projectInfo}>
              <img
                className={styles.projectImage}
                src={`${process.env.PUBLIC_URL}/auto-rigger/step3.png`}
                alt="Auto-Rigger Tool Screenshot"
              />
              <a
                href="https://github.com/ChickNostril/autoRigger"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://github.com/ChickNostril/autoRigger
              </a>
            </div>
            <div className={styles.projectText}>
              <h2>Auto-Rigger Tool</h2>
              <p>
                **Auto-Rigger Tool**은 3D 아티스트, 애니메이터 및 개발자를 위해
                설계된 웹 기반 3D 리깅 서비스입니다. 사용자는 3D 모델을
                업로드하고, 크기와 위치를 조정하며, 마커를 배치하여 스켈레톤을
                생성하고 미리보기할 수 있습니다. 이 서비스는 직관적인 UI와
                효율적인 워크플로우를 통해 리깅 작업의 생산성을 높이는 것을
                목표로 합니다.
              </p>
              <div className={styles.projectDetails}>
                <p>
                  <strong>기간:</strong> 2024.11.12 ~ 2024.11.29
                </p>
                <p>
                  <strong>담당:</strong> 프론트엔드 개발
                </p>
                <p>
                  <strong>스택:</strong> React, Three.js, R3F, Sass, Node.js
                </p>
              </div>
              <ul className={styles.projectTasks}>
                <li>
                  **모델 업로드 및 조정**: 사용자가 `.glb` 또는 `.gltf` 형식의
                  3D 모델을 업로드하고, 크기, 위치, 회전 값을 슬라이더를
                  사용하여 직관적으로 조정 가능하도록 구현하였습니다.
                </li>
                <li>
                  **마커 배치 및 대칭**: 턱, 어깨, 팔꿈치, 손목 등 주요 관절에
                  리깅 마커를 배치하고, 좌우 대칭 기능을 통해 작업을
                  효율화하였습니다.
                </li>
                <li>
                  **스켈레톤 미리보기**: 사용자 배치 데이터를 기반으로
                  스켈레톤을 생성하여 3D 모델과 함께 미리보기가 가능하도록
                  구현하였습니다.
                </li>
                <li>
                  **리깅 데이터 생성**: 서버와 통신하여 업로드된 데이터를
                  기반으로 Blender 스크립트를 실행, 리깅 결과를 `.glb` 파일로
                  다운로드할 수 있도록 구현하였습니다.
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.projectLinks}>
            <Link to="/portfolio/auto-rigger">Auto-Rigger Tool 포트폴리오</Link>
            <a
              href="https://your-demo-link.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Auto-Rigger Tool 데모
            </a>
          </div>
        </div>

        <div className={styles.projectCard}>
          <div className={styles.projectContent}>
            <div className={styles.projectInfo}>
              <img
                className={styles.projectImage}
                src={`${process.env.PUBLIC_URL}/sumda/sumda-final.png`}
                alt="sumda Screenshot"
              />
              <a
                href="https://github.com/100-hours-a-week/5-team-daramgil-sumda-fe"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://github.com/100-hours-a-week/5-team-daramgil-sumda-fe
              </a>
            </div>
            <div className={styles.projectText}>
              <h2>05. 숨 쉬는 다람쥐 숨다</h2>
              <p>
                공공 데이터 API를 활용하여 날씨와 대기질 정보를 제공하는 웹
                서비스로, 사용자에게 실시간 환경 정보를 제공합니다. 또한, 다람쥐
                육성 게이미피케이션 요소를 통해 사용자가 다양한 종류의 다람쥐를
                육성하며 일일 미션을 수행할 수 있는 기능을 구현하였습니다.
              </p>
              <div className={styles.projectDetails}>
                <p>
                  <strong>기간:</strong> 24.07.22 ~ 24.09.13
                </p>
                <p>
                  <strong>담당:</strong> 프론트엔드 개발
                </p>
                <p>
                  <strong>스택:</strong> TypeScript, React, CSS, Zustand
                </p>
                <p>
                  <strong>인원:</strong> 총 5명 (FE 2명, BE 3명)
                </p>
              </div>
              <ul className={styles.projectTasks}>
                <li>
                  날씨/대기질 정보 제공: 공공 데이터 API를 활용하여 실시간 날씨
                  및 대기질 정보를 조회할 수 있는 서비스를 구현하였습니다.
                </li>
                <li>
                  상태 관리: Zustand를 사용하여 전역 상태 관리를 구현하여
                  데이터의 일관성과 효율적인 업데이트를 보장하였습니다.
                </li>
                <li>
                  인증/인가 기능: Kakao OAuth를 통해 사용자가 로그인할 수 있도록
                  하였으며, 로그인 시 JWT 토큰을 발급하고 이를 통해 사용자별
                  다람쥐 정보를 불러옵니다.
                </li>
                <li>
                  게이미피케이션: 사용자는 다양한 종류의 다람쥐 (예: 사무라이
                  다람쥐, 기사 다람쥐 등)를 육성할 수 있으며, 일일 미션을
                  완료하여 도토리를 획득하고 다람쥐를 성장시키는 시스템을
                  구현하였습니다.
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.projectLinks}>
            <Link to="/portfolio/sumda">숨쉬는 다람쥐 숨다 포트폴리오</Link>
            <a
              href="https://www.canva.com/design/DAGS9yrQEfk/f-B0GbF_yLyY3kCt5tN4Vg/edit?utm_content=DAGS9yrQEfk&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
              target="_blank"
              rel="noopener noreferrer"
            >
              숨쉬는 다람쥐 숨다 결과
            </a>
          </div>
        </div>
        <div className={styles.projectCard}>
          <div className={styles.projectContent}>
            <div className={styles.projectInfo}>
              <img
                className={styles.projectImage}
                src={`${process.env.PUBLIC_URL}/community/Community.png`}
                alt="community Screenshot"
              />
              <a
                href="https://github.com/ChickNostril/KCS-Community"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://github.com/ChickNostril/KCS-Community
              </a>
            </div>
            <div className={styles.projectText}>
              <h2>04. 아무 말 대잔치</h2>
              <p>
                카카오테크 부트캠프 클라우드 과정 in JEJU의 개인 프로젝트로,
                Express와 MySQL을 사용한 게시판 사이트를 구현하여 백엔드와
                데이터베이스의 연동을 경험하고 이해도를 높이기 위한 목적으로
                진행되었습니다.
              </p>
              <div className={styles.projectDetails}>
                <p>
                  <strong>기간:</strong> 24.04 ~ 24.07
                </p>
                <p>
                  <strong>담당:</strong> 프론트엔드 개발
                </p>
                <p>
                  <strong>스택:</strong> Javascript, React, Express, MySQL
                </p>
                <p>
                  <strong>인원:</strong> 개인 프로젝트
                </p>
              </div>
              <ul className={styles.projectTasks}>
                <li>
                  React를 사용하여 게시판의 프론트엔드를 구현하고 사용자
                  인터페이스를 직관적으로 설계했습니다.
                </li>
                <li>
                  Express를 활용해 서버를 구축하고, RESTful API를 통해 데이터
                  요청 및 관리를 처리했습니다.
                </li>
                <li>
                  MySQL을 사용하여 데이터베이스를 설계하고, 게시글의 CRUD 기능을
                  구현했습니다.
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.projectLinks}>
            <Link to="/portfolio/community">아무 말 대잔치 포트폴리오</Link>
            <a
              href="https://www.notion.so/4330d424e2db4e63b77f26eb76626313"
              target="_blank"
              rel="noopener noreferrer"
            >
              아무 말 대잔치 기능 시연
            </a>
          </div>
        </div>
        <div className={styles.projectCard}>
          <div className={styles.projectContent}>
            <div className={styles.projectInfo}>
              <img
                className={styles.projectImage}
                src={`${process.env.PUBLIC_URL}/pokemon/pokemon.png`}
                alt="Pokemon Screenshot"
              />
              <a
                href="https://github.com/ChickNostril/PokeAPI"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://github.com/ChickNostril/PokeAPI
              </a>
            </div>
            <div className={styles.projectText}>
              <h2>03. 포켓몬 도감 사이트</h2>
              <p>
                React와 Styled-components를 활용하여 포켓몬 도감을 구현한 개인
                프로젝트로, 포켓몬 정보 조회 및 필터링 기능을 제공합니다.
                Firebase를 사용해 OAuth 로그인 및 사이트 배포를 완료하였습니다.
              </p>
              <div className={styles.projectDetails}>
                <p>
                  <strong>기간:</strong> 23.11.13 ~ 23.12.04
                </p>
                <p>
                  <strong>담당:</strong> 프론트엔드 개발
                </p>
                <p>
                  <strong>스택:</strong> Javascript, React, Styled-Components
                </p>
                <p>
                  <strong>인원:</strong> 개인 프로젝트
                </p>
              </div>
              <ul className={styles.projectTasks}>
                <li>
                  React를 사용하여 포켓몬 도감 UI와 데이터를 동적으로 렌더링 및
                  Styled-components로 스타일링
                </li>
                <li>
                  Firebase Authentication을 통해 Google OAuth 로그인을 구현하여
                  간편한 사용자 인증 제공
                </li>
                <li>Firebase Hosting을 활용하여 프로젝트를 배포</li>
              </ul>
            </div>
          </div>
          <div className={styles.projectLinks}>
            <Link to="/portfolio/pokemon">포켓몬 도감 사이트 포트폴리오</Link>
            <a
              href="https://react-api-app-197f9.firebaseapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              포켓몬 도감 사이트 결과
            </a>
          </div>
        </div>
        <div className={styles.projectCard}>
          <div className={styles.projectContent}>
            <div className={styles.projectInfo}>
              <img
                className={styles.projectImage}
                src={`${process.env.PUBLIC_URL}/starbucks/starbucks.png`}
                alt="Starbucks Screenshot"
              />
              <a
                href="https://github.com/ChickNostril/Starbucks"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://github.com/ChickNostril/Starbucks
              </a>
            </div>
            <div className={styles.projectText}>
              <h2>02. 스타벅스 홈페이지 클론 코딩</h2>
              <p>
                스타벅스의 공식 웹사이트를 클론하여 프론트엔드와 백엔드를
                경험해보기 위한 프로젝트로, 기본적인 웹 디자인부터 게시판 및
                회원 관리 기능을 구현하였습니다.
              </p>
              <div className={styles.projectDetails}>
                <p>
                  <strong>기간:</strong> 23.01.01 ~ 23.06.13
                </p>
                <p>
                  <strong>담당:</strong> 프론트엔드 개발
                </p>
                <p>
                  <strong>스택:</strong> Javascript, HTML, CSS, PHP
                </p>
                <p>
                  <strong>인원:</strong> 개인 프로젝트
                </p>
              </div>
              <ul className={styles.projectTasks}>
                <li>
                  HTML, CSS, JavaScript를 사용하여 스타벅스 홈페이지의 UI,UX
                  클론
                </li>
                <li>
                  PHP를 활용해 게시판 기능을 구현하여 사용자가 게시글 작성,
                  수정, 삭제
                </li>
                <li>
                  회원가입과 로그인 기능을 통해 사용자 관리 및 세션 관리 추가
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.projectLinks}>
            <Link to="/portfolio/starbucks">
              스타벅스 홈페이지 클론 코딩 포트폴리오
            </Link>
            <a
              href="https://www.notion.so/Starbucks-e45847f776394c04afd4b7738376a924"
              target="_blank"
              rel="noopener noreferrer"
            >
              스타벅스 홈페이지 클론 코딩 기능 시연
            </a>
          </div>
        </div>
        <div className={styles.projectCard}>
          <div className={styles.projectContent}>
            <div className={styles.projectInfo}>
              <img
                className={styles.projectImage}
                src={`${process.env.PUBLIC_URL}/hackerton/Hackerton.png`}
                alt="hackerton Screenshot"
              />
              <a
                href="https://github.com/ZZ3n/startupcode-fe"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://github.com/ZZ3n/startupcode-fe
              </a>
            </div>
            <div className={styles.projectText}>
              <h2>
                01. 카카오테크 부트캠프 해커톤 - AI 기반 대화형 장소 추천 시스템
              </h2>
              <p>
                카카오테크 부트캠프 해커톤에서 개발된 프로젝트로, 제주도를
                여행하는 관광객들이 맞춤형 장소 추천을 받을 수 있도록 AI 기반
                대화형 시스템을 구현하였습니다. 사용자의 입력을 바탕으로 관심사,
                나이, 여행 날짜 등을 고려하여 개인화된 추천 서비스를 제공하는
                것을 목표로 하였습니다.
              </p>
              <div className={styles.projectDetails}>
                <p>
                  <strong>기간:</strong> 2024.08.05 ~ 2024.08.07
                </p>
                <p>
                  <strong>담당:</strong> 프론트엔드 개발
                </p>
                <p>
                  <strong>스택:</strong> TypeScript, React, Zustand
                </p>
                <p>
                  <strong>인원:</strong> 총 5명 (클라우드 1명, BE 2명, FE 2명)
                </p>
              </div>
              <ul className={styles.projectTasks}>
                <li>
                  사용자의 기초 정보를 입력받아 (인원 수, 나이, 관심사, 여행
                  날짜 등) AI 질문을 생성합니다.
                </li>
                <li>
                  대화형 인터페이스를 통해 사용자가 AI와 상호작용하며 추가
                  질문을 통해 정보를 구체화합니다.
                </li>
                <li>
                  비짓제주 관광 공공 데이터를 활용하여 최종적으로 사용자에게
                  적합한 관광 정보를 추천합니다. 프롬프트 엔지니어링을 통해 AI가
                  정확한 정보를 제공하도록 설계되었습니다.
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.projectLinks}>
            <Link to="/portfolio/hackerton">
              AI 기반 대화형 장소 추천 시스템 포트폴리오
            </Link>
            <a
              href="https://kba75f051fb0ea.user-app.krampoline.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              AI 기반 대화형 장소 추천 시스템 결과
            </a>
          </div>
        </div>
      </div> */}

      <div className={styles.projects}>
        <h1>Projects</h1>
        {projects.map((project) => (
          <div key={project.id} className={styles.projectCard}>
            <div className={styles.projectContent}>
              <div className={styles.projectInfo}>
                <img
                  className={styles.projectImage}
                  src={`${process.env.PUBLIC_URL}${project.image}`}
                  alt={`${project.title} Screenshot`}
                />
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.links.github}
                </a>
              </div>
              <div className={styles.projectText}>
                <h2>{project.title}</h2>
                <p>
                  {project.description.split("\n").map((line, index) => (
                    <React.Fragment key={index}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </p>
                <div className={styles.projectDetails}>
                  <p>
                    <strong>기간:</strong> {project.period}
                  </p>
                  <p>
                    <strong>담당:</strong> {project.role}
                  </p>
                  <p>
                    <strong>스택:</strong> {project.stack.join(", ")}
                  </p>
                  {project.teamSize && (
                    <p>
                      <strong>인원:</strong> {project.teamSize}
                    </p>
                  )}
                </div>
                <ul className={styles.projectTasks}>
                  {project.tasks.map((task, index) => (
                    <li key={index}>{task}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className={styles.projectLinks}>
              <Link to={project.links.portfolio}>포트폴리오</Link>
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
              >
                결과/데모/시연
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.timeline}>
        <h1>Timeline</h1>
        <div className={styles.timelineItem}>
          <div className={styles.timelineDate}>2018.03</div>
          <div className={styles.timelineContent}>
            계명대학교 교통공학과 입학
          </div>
        </div>
        <div className={styles.timelineItem}>
          <div className={styles.timelineDate}>2019.03</div>
          <div className={styles.timelineContent}>
            계명대학교 게임소프트웨어학과 전과
          </div>
        </div>
        <div className={styles.timelineItem}>
          <div className={styles.timelineDate}>2024.02</div>
          <div className={styles.timelineContent}>
            계명대학교 게임소프트웨어학과 졸업
          </div>
        </div>
        <div className={styles.timelineItem}>
          <div className={styles.timelineDate}>2024.04</div>
          <div className={styles.timelineContent}>
            카카오테크 부트캠프 클라우드 과정 in JEJU
          </div>
        </div>
        <div className={styles.timelineItem}>
          <div className={styles.timelineDate}>2024.10</div>
          <div className={styles.timelineContent}>
            카카오테크 부트캠프 클라우드 과정 in JEJU 수료
          </div>
        </div>
        <div className={styles.timelineItem}>
          <div className={styles.timelineDate}>2024.11</div>
          <div className={styles.timelineContent}>엔씨소프트 단기 계약직</div>
        </div>
        <div className={styles.timelineItem}>
          <div className={styles.timelineDate}>2025.02</div>
          <div className={styles.timelineContent}>
            엔씨소프트 단기 계약직 계약 종료
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumePage;
