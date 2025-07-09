import React from 'react'
import styles from '../components/Home.module.css'
import { motion } from 'framer-motion'

const profilePhoto="/yellow pic.jpeg";

function Home() {
  return (
    <>    
    <div id="home" className={styles.home_container}>
      
      
     <motion.main
  className={styles.main_content}
  initial={false}
>
  <motion.div
    className={styles.text_content}
    initial={{ opacity: 0, x: -60 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
  viewport={{ once: false, amount: 0.3 }}
    
  >
    <p className={styles.greeting}>Hello, I'm Ann,</p>
    <h1 className={styles.title}>Web Developer</h1>
    <p className={styles.location}>B.Tech 4th year Computer Science student</p>
    <a href="/ANN.K.S.pdf" target="_blank" rel="noopener noreferrer">
  <button className={styles.resume_btn}>Resume</button>
</a>
  </motion.div>

  <motion.div
   className={styles.profile_image_container}
  initial={{ opacity: 0, x: 60 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
  viewport={{ once: false, amount: 0.3 }}
  >
    <img src={profilePhoto} alt="Profile" className={styles.profile_image} />
    <div className={styles.decor_1}></div>
    <div className={styles.decor_2}></div>
    <div className={styles.decor_3}></div>
  </motion.div>
</motion.main>
    </div>
    </>
  )
}

export default Home