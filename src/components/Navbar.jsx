import React from 'react'
import styles from '../components/Navbar.module.css'
import { GrInstagram } from "react-icons/gr";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaGithub } from "react-icons/fa6";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.name}>ANN K S</div>

      <ul className={styles.navLinks}>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li> <a href="#project">Project</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>


      
<div className={styles.media}>
    <div><a href="https://www.instagram.com/_ann_samuel_" target="_blank" rel="noopener noreferrer" className={styles.icon}>
   <GrInstagram />
  </a>
  </div>
    <div><a href="https://github.com/ann242004" target="_blank" rel="noopener noreferrer" className={styles.icon}>
   <FaGithub />
  </a>
  </div>
    <a href="https://www.linkedin.com/in/ann-k-s-ba3652255/" target="_blank" rel="noopener noreferrer" className={styles.icon}>
   <IoLogoLinkedin />
  </a>
</div>

    </nav>
  )
}

export default Navbar
