import React from 'react'
import ProjectCard from '../ui/ProjectCard/ProjectCard'
import { Container, Col, Row } from 'react-bootstrap'
import projectArr from './projectsData'

export default function Projects() {
  return (
    <Container className="mb-5" fluid>
      <h1 className='global-fade-in text-center mb-2'>List of <span className='text-info fw-bold'>Projects</span> that I'm proud of</h1>
      <p className='global-fade-in text-center mb-5'>(Please <span className='text-info fw-bold'>Hover / Tap</span> the cards)</p>
      <Row className='justify-content-center gap-4'>
          {
            projectArr.map((item,idx)=>(
              <Col xs="12" sm="5" xl="3" key={idx}>
                <ProjectCard project={item}></ProjectCard>
              </Col>
            ))
          }
      </Row>
    </Container>
  )
}
