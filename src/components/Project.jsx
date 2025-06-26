import React from 'react';
import styles from '../components/Project.module.css';
import projects from '../../data';
import ProjectCard from './ProjectCard';

function Project() {
  return (
    <div id="project" className={styles.projectSection}>
      <h1 className={styles.project}>projects.</h1>
      <div className={styles.cardGrid}>
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
}

export default Project;