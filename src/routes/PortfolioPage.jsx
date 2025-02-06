import React from "react";
import { Link } from "react-router-dom";
import styles from "./PortfolioPage.module.scss";
import portfolioItems from "../data/portfolioItems.json";

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
              src={`${process.env.PUBLIC_URL}${
                item.imageUrl || "https://placehold.co/320x180"
              }`}
              alt={`${item.title} 이미지`}
              className={styles.portfolioImage}
              onError={(e) => {
                e.target.src = "https://placehold.co/320x180";
              }}
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
