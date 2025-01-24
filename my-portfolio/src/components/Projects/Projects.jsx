import React from 'react'
import ProjectCard from '../ui/ProjectCard/ProjectCard'
import { Container } from 'react-bootstrap'
import projectArr from './projectsData'

export default function Projects() {
  return (
    <Container>
      {
        projectArr.map((item,idx)=>(
          <ProjectCard project={item} key={idx}></ProjectCard>
        ))
      }
    </Container>
  )
}
