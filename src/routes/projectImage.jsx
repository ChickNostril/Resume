import { useState } from "react";
import styles from "./ResumePage.module.scss";

const ProjectImage = ({ project }) => {
  const [hasError, setHasError] = useState(false);

  return (
    !hasError && (
      <div className={styles.projectInfo}>
      <img
        className={styles.projectImage}
        src={`${process.env.PUBLIC_URL}${project.image}`}
        alt={`${project.title} Screenshot`}
        onError={() => setHasError(true)}
      />
      <a
        href={project.links.github}
        target="_blank"
        rel="noopener noreferrer"
      >
        {project.links.github}
      </a>
    </div>
    )
  );
};

export default ProjectImage;
