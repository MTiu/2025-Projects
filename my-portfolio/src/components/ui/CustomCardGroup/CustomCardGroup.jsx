import React from 'react'
import { Col, Card } from "react-bootstrap"
import styles from "./customCardGroup.module.css"
import FadeIn from '../FadeInGroup/FadeIn'

export default function CustomCardGroup( { cardArray, topic } ) {
return (
<div>
    <Col className="mb-5 d-flex flex-column align-items-center gap-5">
        <FadeIn>
            <h1 className="mt-5 fs-1 text-info fw-bold text-center">{topic} that I like</h1>
        </FadeIn>
        {
            cardArray.map((item,idx) => (
                <FadeIn key={idx}>
                    <Card className={`${styles["custom-card"]} d-flex flex-row border-info`} key={idx} data-bs-theme="dark">
                        <Card.Img src={item.image} className={`${styles["custom-card-image"]}`} ></Card.Img>
                        <Card.Body className="p-4 fw-bold text-info fs-3 d-flex align-items-center">{item.name}</Card.Body>
                    </Card>
                </FadeIn>
            ))
        }
    </Col>
</div>
)
}
