import React from 'react'
import styles from '../components/Contact.module.css'
import { MdEmail, MdPhone } from 'react-icons/md'
import { IoLogoLinkedin } from 'react-icons/io5'
import { GrInstagram } from 'react-icons/gr'

function Contact() {
  return (
    <>
      <div id="contact" className={styles.contact}>contact.</div>
      <div className={styles.contactCard}>
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
      </div>
    </>
  )
}

export default Contact