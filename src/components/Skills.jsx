import React from 'react';
import styles from '../components/Skills.module.css';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Frontend Development',
      skills: ['React', 'HTML', 'CSS', 'JavaScript']
    },
    {
      category: 'Design & UI/UX',
      skills: ['Figma', 'Canva']
    },
    {
      category: 'Programming & Database',
      skills: ['Python', 'C', 'MySQL']
    }
  ];

  const allSkills = skillCategories.flatMap(cat => cat.skills);

  return (
    <>
    <div id="skills" className={styles.skill}>skills.</div>
    <section className={styles.skillsContainer} aria-labelledby="skills-heading">
      

      <div className={styles.skillsContent}>
        <div className={styles.skillsGrid}>
          {allSkills.map((skill, index) => (
            <div 
              key={skill} 
              className={styles.skillCard}
              style={{ '--animation-delay': `${index * 0.1}s` }}
            >
              <span className={styles.skillName}>{skill}</span>
            </div>
          ))}
        </div>

        {/* <div className={styles.skillsStats}>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>{allSkills.length}</span>
            <span className={styles.statLabel}>Technologies</span>
          </div>
          <div className={styles.statDivider}></div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>{skillCategories.length}</span>
            <span className={styles.statLabel}>Categories</span>
          </div>
        </div> */}
      </div>
    </section>
    </>
  );
};

export default Skills;