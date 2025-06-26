import React from 'react'
import styles from '../components/About.module.css'


function About() {
  return (
    <>
    <br />
    <br />
    <div id="about" className={styles.about}>about.</div>
    <div className={styles.about_text}>
        <p>I'm a dedicated Front-End Developer with a strong focus on building responsive, accessible, and efficient web interfaces using technologies like React, HTML, CSS, and JavaScript.
While my primary expertise is in front-end development, I also have a basic understanding of Flask, which I’ve used for small-scale backend tasks and integrating simple server-side functionality.
I’m familiar with design tools like Figma and Canva, which help in translating visual concepts into clean user interfaces. I also have working knowledge of Python, C, MySQL technologies.</p>
    </div>

    <div className={styles.education}>
        <ul>
            <li>Under Graduation(2022-Current)</li>
            <p>Toc H Institute of Science and Technology <br />B.Tech Computer Science Engineering <br />CGPA: 9.2</p>
            <li>Higher Secondary Education(2020-2022)</li>
            <p>St Sebastians Higher Secondary School <br />Computer Science Engineering <br />Percentage: 9.7</p>
            <li>High School Education(2020-2022)</li>
            <p>St Mary's Anglo Indian Girls High School <br />Computer Science Engineering <br />Grade: A+</p>
        </ul>
    </div>



    </>
  )
}

export default About