import React from 'react'
import styles from './projectCard.module.css'


export default function ProjectCard({project}) {
  return (
    <div className={styles["project-card-container"]}>
      <img src={project.img} alt="" />
      <img src={project.logo} alt="" />
      <h1>{project.name}</h1>
      <p>{project.desc}</p>
      <p>{project.link}</p>
    </div>
  )
}
