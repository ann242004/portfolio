import React, { useRef } from 'react'
import styles from '../components/Contact.module.css'
import { MdEmail, MdPhone } from 'react-icons/md'
import { IoLogoLinkedin } from 'react-icons/io5'
import { GrInstagram } from 'react-icons/gr'
import { motion, useScroll, useTransform } from 'framer-motion'

function Contact() {
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
      <motion.div id="contact" 
      initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: false, amount: 0.3 }}
      className={styles.contact}>contact.</motion.div>


      <motion.div className={styles.contactCard}
      initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: false, amount: 0.3 }}
      
      >
        {/* <div className={styles.contactHeading}>Let's Connect</div> */}
        <div className={styles.contactLinks1}>
          <a
            href="mailto:ann242004@gmail.com"
            className={styles.iconLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MdEmail className={styles.icon} /> ann242004@gmail.com
          </a>
          <a
            href="tel:+918547804689"
            className={styles.iconLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MdPhone className={styles.icon} /> +91 8547804689
          </a>
          </div>
          <div className={styles.contactLinks2}>
          <a
            href="https://www.linkedin.com/in/ann-k-s-ba3652255/"
            className={styles.iconLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoLinkedin className={styles.icon} /> LinkedIn
          </a>
          <a
            href="https://www.instagram.com/_ann_samuel_/"
            className={styles.iconLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <GrInstagram className={styles.icon} /> Instagram
          </a>
        </div>
      </motion.div>
    </>
  )
}

export default Contact