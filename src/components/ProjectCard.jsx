import React from 'react';
import styles from './Project.module.css';
import { FaGithub } from 'react-icons/fa6';

function ProjectCard({ title, description, technology, githubLink }) {
  return (
    <div className={styles.card}>
      <h2 className={styles.cardTitle}>{title}</h2>
      <p className={styles.cardDesc}>{description}</p>
      <div className={styles.techList}>
        {technology.map((tech, idx) => (
          <span className={styles.tech} key={idx}>{tech}</span>
        ))}
      </div>
      <a href={githubLink} target="_blank" rel="noopener noreferrer" className={styles.githubBtn}>
        <FaGithub /> GitHub
      </a>
    </div>
  );
}

export default ProjectCard;
