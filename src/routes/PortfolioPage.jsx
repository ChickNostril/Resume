import React from "react";
import { Link } from "react-router-dom";
import styles from "./PortfolioPage.module.scss";

const portfolioItems = [
  {
    id: 1,
    title: "스타벅스 홈페이지 클론 코딩",
    overview:
      "스타벅스 홈페이지를 클론하여 웹 디자인, 게시판, 회원 관리 기능을 구현한 프로젝트",
    period: "23.01.01 ~ 23.06.13",
    role: "프론트엔드 개발",
    imageUrl: `${process.env.PUBLIC_URL}/starbucks/starbucks.png`,
    detailLink: "/portfolio/starbucks",
  },
  {
    id: 2,
    title: "포켓몬 도감 사이트",
    overview:
      "React와 Styled-components로 도감 구현 및 Firebase로 OAuth 로그인 및 배포를 완료한 개인 프로젝트",
    period: "23.11.13 ~ 23.12.04",
    role: "프론트엔드 개발",
    imageUrl: `${process.env.PUBLIC_URL}/pokemon/pokemon.png`,
    detailLink: "/portfolio/pokemon",
  },
  {
    id: 3,
    title: "아무 말 대잔치",
    overview:
      "Express와 MySQL로 게시판 사이트를 구현하여 백엔드와 데이터베이스 연동을 구현한 카카오테크 부트캠프 개인 프로젝트",
    period: "24.04 ~ 24.07",
    role: "프론트엔드 개발",
    imageUrl: `${process.env.PUBLIC_URL}/community/community.png`,
    detailLink: "/portfolio/community",
  },
  {
    id: 4,
    title: "AI 기반 대화형 장소 추천 시스템",
    overview:
      "카카오테크 부트캠프 해커톤에서 제주 관광객을 위한 AI 기반으로 맞춤형 장소 추천을 제공하는 대화형 시스템",
    period: "2024.08.05 ~ 2024.08.07",
    role: "프론트엔드 개발",
    imageUrl: `${process.env.PUBLIC_URL}/hackerton/Hackerton.png`,
    detailLink: "/portfolio/hackerton",
  },
  {
    id: 5,
    title: "숨쉬는 다람쥐 숨다",
    overview:
      "공공 데이터 API를 활용해 실시간 날씨와 대기질 정보 제공 및 다람쥐 육성 게이미피케이션 기능을 포함한 웹 서비스",
    period: "24.07.22 ~ 24.09.13",
    role: "프론트엔드 개발",
    imageUrl: `${process.env.PUBLIC_URL}/sumda/main.png`,
    detailLink: "/portfolio/sumda",
  },
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
