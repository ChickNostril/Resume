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
                  Session 및 JWT를 사용하여 인증 및 권한을 관리할 수 있습니다.
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
              alt="Commit Mate Screenshot"
            />
            <div className={styles.projectText}>
              <h2>Starbucks 클론 코딩</h2>
              <p>
                Github API를 사용하여 조직의 기여도 상황을 파악하고 협업할 수
                있는 대시보드
              </p>
              <div className={styles.projectDetails}>
                <p>
                  <strong>기간:</strong> 23.01.01 ~ 23.06.13
                </p>
                <p>
                  <strong>담당:</strong> 웹 프론트엔드 개발
                </p>
                <p>
                  <strong>스택:</strong> Javascript, HTML, CSS, PHP
                </p>
                <p>
                  <strong>인원:</strong> 개인 프로젝트
                </p>
              </div>
              <ul className={styles.projectTasks}>
                <li>권한에 따른 페이지 뷰 구분</li>
                <li>대시보드 구현 (차트 및 그래프 사용)</li>
                <li>AWS S3, Cloudfront를 이용해 dev 웹 배포</li>
                <li>Router를 사용한 SPA 개발</li>
              </ul>
            </div>
          </div>
          <div className={styles.projectLinks}>
            <a
              href="https://commit-mate-portfolio-link.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              starbucks 포트폴리오 바로가기
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumePage;
