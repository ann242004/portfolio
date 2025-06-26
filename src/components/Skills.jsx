import React, { useRef } from 'react'
import styles from '../components/Skills.module.css';
import { motion, useScroll, useTransform } from 'framer-motion'

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

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const listItemVariant = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.2 }
    })
  };

  const ref = useRef(null);
const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
const yAbout = useTransform(scrollYProgress, [0, 1], [0, 60]);
const yText = useTransform(scrollYProgress, [0, 1], [0, -40]);
const yEdu = useTransform(scrollYProgress, [0, 1], [0, 30]);

  const allSkills = skillCategories.flatMap(cat => cat.skills);

  return (
    <>
    <motion.div
          id="skills"
  className={styles.skill}
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: false, amount: 0.3 }} // 👈 Add this line
      >
        skills.
      </motion.div>

      <motion.div
      initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: false, amount: 0.3 }} // 👈 Add this line
      >
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
    </motion.div>
    </>
  );
};

export default Skills;