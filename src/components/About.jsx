import React, { useRef } from 'react'
import styles from '../components/About.module.css'
import { motion, useScroll, useTransform } from 'framer-motion'

function About() {
  // Animation variants for reuse
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
    <>
      <br />
      <br />
      <motion.div
          id="about"
  className={styles.about}
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true, amount: 0.3 }} // 👈 Add this line
      >
        about.
      </motion.div>

      <motion.div
        className={styles.about_text}
        initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: false, amount: 0.3 }} // 👈 Add this line
      >
        <p>
          I'm a dedicated Front-End Developer with a strong focus on building responsive, accessible, and efficient web interfaces using technologies like React, HTML, CSS, and JavaScript.
          While my primary expertise is in front-end development, I also have a basic understanding of Flask, which I’ve used for small-scale backend tasks and integrating simple server-side functionality.
          I’m familiar with design tools like Figma and Canva, which help in translating visual concepts into clean user interfaces. I also have working knowledge of Python, C, MySQL technologies.
        </p>
      </motion.div>

      <motion.div
        className={styles.education}
        initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: false, amount: 0.3 }} // 👈 Add this line
      >
        <ul>
          {[ 
            {
              title: 'Under Graduation (2022–Current)',
              details: 'Toc H Institute of Science and Technology\nB.Tech Computer Science Engineering\nCGPA: 9.2'
            },
            {
              title: 'Higher Secondary Education (2020–2022)',
              details: 'St Sebastians Higher Secondary School\nComputer Science Engineering\nPercentage: 9.7'
            },
            {
              title: 'High School Education (Until 2020)',
              details: 'St Mary\'s Anglo Indian Girls High School\nComputer Science Engineering\nGrade: A+'
            }
          ].map((item, i) => (
            <motion.li
              key={i}
              custom={i}
              variants={fadeUpVariant}
        initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: false, amount: 0.3 }} // 👈 Add this line
              className={styles.edu_item}
            >
              {item.title}
              <p>{item.details.split('\n').map((line, idx) => <span key={idx}>{line}<br /></span>)}</p>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </>
  );
}

export default About;
