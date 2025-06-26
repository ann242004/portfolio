import React from 'react'
import styles from '../components/Home.module.css'
import { motion } from 'framer-motion'

const profilePhoto="/yellow pic.jpeg";

function Home() {
  return (
    <>    
    <div id="home" className={styles.home_container}>
      
      
      <main className={styles.main_content}>
        <div className={styles.text_content}>
          <p className={styles.greeting}>Hello, I'm Ann,</p>
          <h1 className={styles.title}>Web Developer</h1>
          <p className={styles.location}>B.Tech 4th year Computer Science student</p>
          <button className={styles.resume_btn}>Resume</button>
        </div>

        <div className={styles.profile_image_container}>
          <img src={profilePhoto} alt="Profile" className={styles.profile_image} />
          <div className={styles.decor_1}></div>
          <div className={styles.decor_2}></div>
          <div className={styles.decor_3}></div>
        </div>
      </main>
    </div>
    </>
  )
}

export default Home