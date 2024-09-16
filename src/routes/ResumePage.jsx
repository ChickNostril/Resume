// src/routes/ResumePage.jsx
import React from "react";
import styles from "./ResumePage.module.scss";

const ResumePage = () => {
  return (
    <div className={styles.resume}>
      <h1 className={styles.title}>신정엽 | 이력서</h1>
      <div className={styles.aboutMe}>
        <div className={styles.information}>
          <img className={styles.idPhoto} src="/IdPhoto.jpeg" alt="ID Photo" />
        </div>
        <div className={styles.info}>
          <div className={styles.contact}>
            <h3>Contact</h3>
            <p>strik241@gmail.com</p>
          </div>
          <div className={styles.link}>
            <h3>Github</h3>
            <p>
              <a
                href="https://github.com/Harfe0626"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://github.com/Harfe0626
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className={styles.introduce}>
        <h1>Introduce</h1>
        <h3>성장하기 위해 끊임없이 노력하는 주니어 FE 개발자 신정엽 입니다.</h3>
        <p>
          저는 최신 웹 기술과 트렌드를 꾸준히 학습하며, 실제 프로젝트에 적용하는
          것을 통해 실력을 쌓아가고 있습니다. 특히 React와 Vue.js와 같은
          프레임워크에 대한 이해와 활용에 노력을 기울이고 있으며, 사용자 경험을
          최우선으로 생각하는 UI/UX 디자인에도 많은 관심을 기울이고 있습니다.
          앞으로도 새로운 도전에 적극적으로 임하며, 보다 나은 개발자가 되기 위해
          지속적으로 노력할 것입니다. 감사합니다.
        </p>
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
      </div>

      <div className={styles.skills}>
        <h1>Skills</h1>
        <div className={styles.skillCategory}>
          <h2>Front-end</h2>
          <ul>
            <li>
              <strong>HTML</strong>: 웹 페이지 구조를 설계하고 구성할 수
              있습니다.
            </li>
            <li>
              <strong>CSS</strong>:
              <ul>
                <li>
                  다양한 레이아웃 기법을 사용하여 반응형 웹 디자인을 구현할 수
                  있습니다.
                </li>
                <li>모듈화된 스타일시트를 작성할 수 있습니다.</li>
              </ul>
            </li>
            <li>
              <strong>Javascript</strong>:
              <ul>
                <li>
                  비동기 처리를 위해 Promise와 async/await을 사용할 수 있습니다.
                </li>
                <li>모듈화를 통해 function간 결합도를 낮출 수 있습니다.</li>
                <li>상황에 따라 적절한 이벤트 리스너를 사용할 수 있습니다.</li>
                <li>무한 스크롤 및 페이지네이션을 구현할 수 있습니다.</li>
              </ul>
            </li>
            <li>
              <strong>Typescript</strong>:
              <ul>
                <li>
                  정적 타입을 사용하여 코드의 안정성을 향상시킬 수 있습니다.
                </li>
                <li>인터페이스와 제네릭으로 타입 검사를 할 수 있습니다.</li>
              </ul>
            </li>
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
                <li>복잡한 상태 변화롤 효과적으로 관리할 수 있습니다.</li>
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
                <li>CRUD 기능을 구현할 수 있습니다.</li>
                <li>
                  Entity-Relationship Diagram을 통해 데이터베이스 구조를
                  효율적으로 설계할 수 있습니다.
                </li>
                <li>
                  Express.js를 사용하여 웹 서버를 설정하고 REST API를 설계할 수
                  있습니다.
                </li>
                <li>
                  Cookie 및 Session을 사용하여 인증 및 권한을 관리할 수
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
                <li>코드 버전 관리 및 협업을 할 수 있습니다.</li>
                <li>브랜치 전략을 사용할 수 있습니다.</li>
                <li>Github을 통해 코드를 리뷰 및 협업을 할 수 있습니다.</li>
              </ul>
            </li>
            <li>
              <strong>Notion</strong>: 팀 커뮤니케이션 및 실시간으로 협업할 수
              있습니다.
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.projects}>
        <h1>Projects</h1>
        <div className={styles.projectCard}>
          <div className={styles.projectContent}>
            <img
              className={styles.projectImage}
              src="/starbucks.png"
              alt="Starbucks Screenshot"
            />
            <div className={styles.projectText}>
              <h2>스타벅스 홈페이지 클론 코딩</h2>
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
            <a
              href="/portfolio/starbucks"
              target="_blank"
              rel="noopener noreferrer"
            >
              starbucks 포트폴리오 바로가기
            </a>
          </div>
        </div>
        <div className={styles.projectCard}>
          <div className={styles.projectContent}>
            <img
              className={styles.projectImage}
              src="/pokemon.png"
              alt="Pokemon Screenshot"
            />
            <div className={styles.projectText}>
              <h2>포켓몬 도감 사이트</h2>
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
            <a
              href="/portfolio/pokemon"
              target="_blank"
              rel="noopener noreferrer"
            >
              포켓몬 도감 사이트 포트폴리오 바로가기
            </a>
          </div>
        </div>
        <div className={styles.projectCard}>
          <div className={styles.projectContent}>
            <img
              className={styles.projectImage}
              src="/Community.png"
              alt="Community Screenshot"
            />
            <div className={styles.projectText}>
              <h2>아무 말 대잔치</h2>
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
            <a
              href="/portfolio/community"
              target="_blank"
              rel="noopener noreferrer"
            >
              아무 말 대잔치 포트폴리오 바로가기
            </a>
          </div>
        </div>
        <div className={styles.projectCard}>
          <div className={styles.projectContent}>
            <img
              className={styles.projectImage}
              src="/Hackerton.png"
              alt="Hackerton Screenshot"
            />
            <div className={styles.projectText}>
              <h2>AI 기반 대화형 장소 추천 시스템</h2>
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
            <a
              href="/portfolio/hackerton"
              target="_blank"
              rel="noopener noreferrer"
            >
              AI 기반 대화형 장소 추천 시스템 포트폴리오 바로가기
            </a>
          </div>
        </div>
        <div className={styles.projectCard}>
          <div className={styles.projectContent}>
            <img
              className={styles.projectImage}
              src="/pokemon.png"
              alt="sumda Screenshot"
            />
            <div className={styles.projectText}>
              <h2>숨 쉬는 다람쥐 숨다</h2>
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
            <a
              href="/portfolio/sumda"
              target="_blank"
              rel="noopener noreferrer"
            >
              숨 쉬는 다람쥐 숨다 포트폴리오 바로가기
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumePage;
