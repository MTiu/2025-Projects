import React from 'react'
import styles from './projectCard.module.css'
import FadeIn from '../FadeInGroup/FadeIn'

export default function ProjectCard({project}) {
  return (
    <FadeIn>
      <div className={styles["project-card-container"]} style={{backgroundColor:`${project.bg_color}`, color:`${project.theme === "dark" ? "white" : "black"}`}}>
        <img className={styles["project-card-img"]} src={project.logo} alt="" />
        <div className={styles["pop-card"]}>
          <p className='text-center p-4'>{project.desc}</p>
          <a className={`${styles["pop-card-a"]} ${project.theme === "dark" ? "dark-link" : "light-link" }`} href={project.link}>Youtube Vid</a>
        </div>
      </div>
    </FadeIn>
  )
}
