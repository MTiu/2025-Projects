import { Carousel, Container, Col, Row } from "react-bootstrap";
import CustomCardGroup from "../ui/CustomCardGroup/CustomCardGroup";
import styles from "./about.module.css"
import { carouselItems, animeCards, mangaCards, gameCards, techStack } from "./aboutData";
import FadeIn from "../ui/FadeInGroup/FadeIn";

function About() {
    return (
        <Container fluid style={{marginBottom:"7%"}}>
            <Row className="mt-5 align-items-center flex-column gap-5">
                <Col className="d-flex flex-column align-items-center gap-5">
                    <h1 className="fs-1 text-info fw-bold text-center ">
                        Throughout my career I experienced challenges and tackled them
                        and those made me the programmer that I am today and expanded my tech stack
                    </h1>
                    <Container fluid className="border border-info rounded">
                        <Row className="m-5 align-items-center gap-4 p-5 justify-content-center">
                            {techStack.map((item,idx)=>(
                                <Col className="mb-4" sm="4" md="3" lg="2" xxl="1" key={idx}><img src={item.image} alt={"Image of " + item.name} /></Col>
                            ))}
                        </Row>
                    </Container>
                </Col>
                <Col style={{marginTop:"7%"}} className="d-flex flex-column align-items-center gap-5">
                    <h1 className="fs-1 text-info fw-bold text-center ">
                        My love for anime, games, and programming fuels my
                        creativity, problem-solving in development, and approach
                        to life's challenges.
                    </h1>
                    <Container>
                        <FadeIn>
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
                        </FadeIn>
                    </Container>
                </Col>
                <Row className="d-flex justify-content-center">
                    <Col md="6" lg="4">
                        <CustomCardGroup cardArray={animeCards} topic={"Animes"}></CustomCardGroup>
                    </Col>
                    <Col md="6" lg="4">
                        <CustomCardGroup cardArray={mangaCards} topic={"Mangas"}></CustomCardGroup>
                    </Col>
                    <Col md="6" lg="4">
                        <CustomCardGroup cardArray={gameCards} topic={"Games"}></CustomCardGroup>
                    </Col>
                </Row>
            </Row>
        </Container>
    );
}

export default About;
