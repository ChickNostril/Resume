import React from "react";
import { useParams } from "react-router-dom";
import styles from "./PortfolioDetailPage.module.scss";
import portfolios from "../data/portfolios.json";

const PortfolioDetailPage = () => {
  const { id } = useParams();
  const detail = portfolios[id];

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
            src={`${process.env.PUBLIC_URL}${image}`}
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
