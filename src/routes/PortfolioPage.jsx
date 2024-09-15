import React from "react";
import { Link } from "react-router-dom";
import styles from "./PortfolioPage.module.scss";

const portfolioItems = [
  {
    id: 1,
    title: "스타벅스",
    overview:
      "Github API를 사용하여 조직의 기여도 상황을 파악하고 협업할 수 있는 대시보드",
    period: "24.07.03 ~ 24.07.15",
    role: "웹 프론트엔드 개발",
    imageUrl: "/starbucks.png",
    detailLink: "/portfolio/commit-mate",
  },
  {
    id: 2,
    title: "그리스로마신화 박물관",
    overview:
      "Github API를 사용하여 조직의 기여도 상황을 파악하고 협업할 수 있는 대시보드",
    period: "24.07.03 ~ 24.07.15",
    role: "웹 프론트엔드 개발",
    imageUrl: "/commit-mate.png",
    detailLink: "/portfolio/starbucks",
  },
  {
    id: 3,
    title: "스타벅스",
    overview:
      "Github API를 사용하여 조직의 기여도 상황을 파악하고 협업할 수 있는 대시보드",
    period: "24.07.03 ~ 24.07.15",
    role: "웹 프론트엔드 개발",
    imageUrl: "/starbucks.png",
    detailLink: "/portfolio/commit-mate",
  },
  {
    id: 4,
    title: "스타벅스",
    overview:
      "Github API를 사용하여 조직의 기여도 상황을 파악하고 협업할 수 있는 대시보드",
    period: "24.07.03 ~ 24.07.15",
    role: "웹 프론트엔드 개발",
    imageUrl: "/starbucks.png",
    detailLink: "/portfolio/commit-mate",
  },
  // 다른 포트폴리오 아이템들 추가
];

const PortfolioPage = () => {
  return (
    <div className={styles.portfolio}>
      <h1 className={styles.title}>신정엽 | 포트폴리오</h1>
      <div className={styles.portfolioGrid}>
        {portfolioItems.map((item) => (
          <Link
            to={item.detailLink}
            key={item.id}
            className={styles.portfolioCard}
          >
            <img
              src={item.imageUrl}
              alt={`${item.title} 이미지`}
              className={styles.portfolioImage}
            />
            <div className={styles.portfolioInfo}>
              <h2>{item.title}</h2>
              <p>{item.overview}</p>
              <p>
                <strong>기간:</strong> {item.period}
              </p>
              <p>
                <strong>담당:</strong> {item.role}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PortfolioPage;
