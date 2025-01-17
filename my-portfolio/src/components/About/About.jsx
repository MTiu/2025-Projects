import { Carousel, Container, Col, Row } from "react-bootstrap";
import CustomCardGroup from "../ui/CustomCardGroup/CustomCardGroup";
import styles from "./about.module.css"
import { carouselItems, animeCards, mangaCards, gameCards, techStack } from "./aboutData";

function About() {
    return (
        <Container>
            <Row className="mt-5 align-items-center flex-column gap-5">
                <Col className="d-flex flex-column align-items-center gap-5">
                    <h1 className="fs-1 fw-bold text-center">
                        My love for anime, games, and programming fuels my
                        creativity, problem-solving in development, and approach
                        to life's challenges.
                    </h1>
                    <Carousel className={`${styles["custom-carousel"]}`}>
                        {carouselItems.map((item, idx) => (
                            <Carousel.Item key={idx}>
                                <img
                                    src={item.image}
                                    alt={"Image of " + item.name}
                                />
                                <Carousel.Caption>
                                    <h1>Image of {item.name}</h1>
                                    <a
                                        className="text-decoration-underline"
                                        href={item.href}
                                    >
                                        {item.name} Image Link
                                    </a>
                                </Carousel.Caption>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </Col>
                <CustomCardGroup cardArray={animeCards} topic={"Animes"}></CustomCardGroup>
                <CustomCardGroup cardArray={mangaCards} topic={"Mangas"}></CustomCardGroup>
                <CustomCardGroup cardArray={gameCards} topic={"Games"}></CustomCardGroup>
            </Row>
        </Container>
    );
}

export default About;
