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

      <div className={styles.projects}>
        <h1>Projects</h1>
        {projects.map((project) => (
          <div key={project.id} className={styles.projectCard}>
            <div className={styles.projectContent}>
              <div className={styles.projectInfo}>
                <img
                  className={styles.projectImage}
                  src={`${process.env.PUBLIC_URL}${
                    project.image || "https://placehold.co/400"
                  }`}
                  alt={`${project.title} Screenshot`}
                  onError={(e) => {
                    e.target.src = "https://placehold.co/400";
                  }}
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
