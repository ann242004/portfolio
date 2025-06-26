import React, { useRef } from 'react'
import styles from '../components/Project.module.css';
import projects from '../../data';
import ProjectCard from './ProjectCard';
import { motion, useScroll, useTransform } from 'framer-motion'

function Project() {

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
  
   


  return (
    
    <motion.div 
    id="project"
    initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: false, amount: 0.3 }} // 👈 Add this line
     className={styles.projectSection}>
      <h1 className={styles.project}>projects.</h1>
      <div className={styles.cardGrid}>
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </motion.div>
  );
}

export default Project;