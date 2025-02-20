// src/routes/ResumePage.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./ResumePage.module.scss";
import projects from "../data/projects.json";
import introduceData from "../data/introduce.json";
import skillsData from "../data/skills.json";
import ProjectImage from "./projectImage";

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
      {/* Introduce Section */}
      <div className={styles.introduce}>
        <h1>Introduce</h1>
        <h3>{introduceData.title}</h3>
        {introduceData.content.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      {/* Skills Section */}
      <div className={styles.skills}>
        <h1>{skillsData.title}</h1>
        {skillsData.categories.map((category, index) => (
          <div key={index} className={styles.skillCategory}>
            <h2>{category.category}</h2>
            <ul>
              {category.skills.map((skill, skillIndex) => (
                <li key={skillIndex}>
                  <strong>{skill.name}</strong>:
                  <ul>
                    {skill.details.map((detail, detailIndex) => (
                      <li key={detailIndex}>{detail}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className={styles.projects}>
        <h1>Projects</h1>
        {projects.map((project) => (
          <div key={project.id} className={styles.projectCard}>
            <div className={styles.projectContent}>
              <div className={styles.projectInfo}>
                {/* <img
                  className={`${styles.projectImage}`}
                  src={`${process.env.PUBLIC_URL}${
                    project.image
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
                </a> */}
                <ProjectImage project={project} />
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
