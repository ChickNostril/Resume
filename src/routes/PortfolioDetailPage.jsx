import React from "react";
import { useParams } from "react-router-dom";
import styles from "./PortfolioDetailPage.module.scss";

// 포트폴리오 데이터 예시 (백엔드나 다른 데이터 소스에서 불러오는 경우에도 사용할 수 있음)
const portfolioDetails = {
  "commit-mate": {
    title: "Commit Mate",
    imageUrl: [
      "/starbucks.png",
      "/starbucks.png",
      "/starbucks.png",
      "/starbucks.png",
      "/starbucks.png",
    ],
    description:
      "GitHub API를 사용하여 조직의 기여도 상황을 파악하고 협업할 수 있는 대시보드입니다.",
    overview: {
      name: "Commit Mate",
      period: "2024년 7월 3일 ~ 2024년 7월 15일",
      role: "웹 프론트엔드 개발",
      stack: "Javascript, HTML, CSS, React",
      team: "프론트엔드 개발자 2명, 백엔드 개발자 3명",
    },
    motivation:
      "현대 소프트웨어 개발 환경에서 협업과 기여도를 명확히 파악하는 것은 매우 중요한 과제입니다. ...",
    contributions: [
      {
        title: "웹 프론트엔드 개발",
        tasks: [
          "전체 프로젝트의 프론트엔드 아키텍처 설계 및 구현을 담당했습니다.",
          "React를 활용하여 컴포넌트 기반 개발을 진행했습니다.",
          "권한에 따른 페이지 뷰 구분 로직을 구현했습니다.",
          "대시보드에서 다양한 차트 및 그래프를 사용하여 데이터를 시각화했습니다.",
          "AWS S3와 Cloudfront를 이용한 개발 환경 배포를 완료했습니다.",
        ],
        achievements: [
          "React의 컴포넌트 재사용성을 최대한 활용하여 유지보수성을 높였습니다.",
          "사용자 권한에 따라 대시보드 뷰를 동적으로 변경하여 보안성을 강화했습니다.",
          "다양한 차트 및 그래프를 사용하여 데이터 전달력을 높였습니다.",
          "AWS S3와 Cloudfront를 사용한 배포로 안정적이고 빠른 웹 애플리케이션을 제공했습니다.",
        ],
      },
      {
        title: "협업 및 커뮤니케이션",
        tasks: [
          "백엔드 팀과의 원활한 API 연동 및 데이터 통신을 담당했습니다.",
          "프론트엔드 팀원과의 코드 리뷰를 통해 협업을 진행했습니다.",
          "실시간으로 현재 개발 진행도를 전달하여 업무 분담을 효율적으로 진행했습니다.",
        ],
        achievements: [
          "백엔드 팀과의 원활한 소통으로 API 연동 시 발생할 수 있는 문제를 최소화했습니다.",
          "코드 리뷰를 통해 코드 품질을 향상시키고 버그를 사전에 예방했습니다.",
        ],
      },
    ],
    positives: [
      "React 컴포넌트 재사용성을 극대화했습니다.",
      "데이터 시각화의 다양성을 확보했습니다.",
      "권한에 따른 페이지 뷰를 구분했습니다.",
      "효율적인 배포 프로세스를 구현했습니다.",
    ],
    negatives: [
      "짧은 프로젝트 기간이 아쉬웠습니다.",
      "초기에 기획이 되지 않은 상태로 프로젝트를 시작하여, 초기 개발 속도가 늦은 점이 아쉬웠습니다.",
    ],
    conclusion:
      "Commit Mate 프로젝트는 GitHub API를 활용하여 조직의 기여도를 시각적으로 파악할 수 있는 유용한 도구로 개발되었습니다. ...",
  },
  // 다른 포트폴리오 아이템 추가 가능
};

const PortfolioDetailPage = () => {
  const { id } = useParams();
  const detail = portfolioDetails[id];

  if (!detail) {
    return <div>포트폴리오를 찾을 수 없습니다.</div>;
  }

  return (
    <div className={styles.portfolioDetail}>
      <h1 className={styles.title}>{detail.title}</h1>
      <div className={styles.imageGrid}>
        {detail.imageUrl.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${detail.title} 이미지 ${index + 1}`}
            className={styles.detailImage}
          />
        ))}
      </div>
      <p>{detail.description}</p>

      <section className={styles.projectOverview}>
        <h2>프로젝트 개요</h2>
        <p>
          <strong>프로젝트 이름:</strong> {detail.overview.name}
        </p>
        <p>
          <strong>프로젝트 기간:</strong> {detail.overview.period}
        </p>
        <p>
          <strong>담당 역할:</strong> {detail.overview.role}
        </p>
        <p>
          <strong>사용 스택:</strong> {detail.overview.stack}
        </p>
        <p>
          <strong>팀 구성:</strong> {detail.overview.team}
        </p>
      </section>

      <section className={styles.projectMotivation}>
        <h2>프로젝트를 시작하게 된 계기</h2>
        <p>{detail.motivation}</p>
      </section>

      <section className={styles.projectContributions}>
        <h2>주요 기여 및 성과</h2>
        {detail.contributions.map((contribution, index) => (
          <div key={index}>
            <h3>{contribution.title}</h3>
            <p>
              <strong>주요 업무:</strong>
            </p>
            <ul>
              {contribution.tasks.map((task, taskIndex) => (
                <li key={taskIndex}>{task}</li>
              ))}
            </ul>
            <p>
              <strong>성과:</strong>
            </p>
            <ul>
              {contribution.achievements.map(
                (achievement, achievementIndex) => (
                  <li key={achievementIndex}>{achievement}</li>
                )
              )}
            </ul>
          </div>
        ))}
      </section>

      <section className={styles.projectEvaluation}>
        <h2>잘한 점</h2>
        <ul>
          {detail.positives.map((positive, index) => (
            <li key={index}>{positive}</li>
          ))}
        </ul>

        <h2>아쉬운 점</h2>
        <ul>
          {detail.negatives.map((negative, index) => (
            <li key={index}>{negative}</li>
          ))}
        </ul>
      </section>

      <section className={styles.projectConclusion}>
        <h2>결론</h2>
        <p>{detail.conclusion}</p>
      </section>
    </div>
  );
};

export default PortfolioDetailPage;
