import React from 'react'
import myImage from "../../assets/images/me.jpg";
import { Container, Row, Col } from "react-bootstrap"
import styles from "./home.module.css"

export default function Home() {
  return (
    <Container className='global-fade-in' fluid>
      <Row className="align-items-center flex-column gap-2">
          <Col className="d-flex flex-column justify-content-center align-items-center">
              <h1 className="text-info fs-1 px-5 py-3 fw-bold text-center">Full Stack Web Developer</h1>
              <p className='fs-4 text-center'>I have a passion in programming, anime, and games</p>
          </Col>
          <Col className="d-flex justify-content-center">
              <img className={`${styles["main-image"]}`} src={myImage} alt="Image of Matthew" />
          </Col>
          <Col className="d-flex justify-content-center">
              <h1 className="px-5 py-3 fw-bold text-center">Hi! I'm <span className='text-info'>Matt</span>. Nice to meet you!</h1>
          </Col>
          <Col className="d-flex justify-content-center w-75">
              <p className="fs-4 text-center framed p-3">
                During the COVID days, I recognized the need to improve my skills and confidence.
                Attending the <span className='text-info'>Village 88 Philippines Bootcamp</span> helped me take a big step forward,
                completing over <span className="text-info">320 assignments</span> and strengthening my web development abilities.
                Inspired by my passion for games and anime, I continue to sharpen my creativity and problem-solving skills
                while striving for growth.
              </p>
          </Col>
      </Row>
    </Container>
  )
}
