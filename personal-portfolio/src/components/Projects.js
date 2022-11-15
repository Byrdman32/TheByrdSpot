import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import webImg1 from "../assets/img/websites/web-img1.png";
import webImg2 from "../assets/img/websites/web-img2.png";
import webImg3 from "../assets/img/websites/web-img3.png";
import mobileImg1 from "../assets/img/mobile/mobile-img1.png";
import mobileImg2 from "../assets/img/mobile/mobile-img2.png";
import logoImg1 from "../assets/img/graphic/graphic-img1.png";
import logoImg2 from "../assets/img/graphic/graphic-img1.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

    const websites = [
        {
            title: "The Byrd Spot",
            description: "ReactJS Website",
            imgUrl: webImg1,
        },
        {
            title: "Troop 59 Website",
            description: "Custom HTML5 Website",
            imgUrl: webImg2,
        },
        {
            title: "Byrdnest Studios",
            description: "WordPress Website",
            imgUrl: webImg3,
        },
    ];

    const mobile = [
        {
            title: "RoveSoRemote",
            description: "Custom iOS App for Mars Rover",
            imgUrl: mobileImg1,
        },
        {
            title: "Cognitive Chemistry",
            description: "Coming Soon",
            imgUrl: mobileImg2,
        },
    ];

    const graphic = [
        {
            title: "Renovative Limited",
            description: "General Construction Logo",
            imgUrl: logoImg1,
        },
    ];

    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                                    <h2>Projects</h2>
                                    <p>Projects are one of the ways that I like to spend my free time. Over the year I have made a few websites, mobile apps, and even logos.</p>
                                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                            <Nav.Item>
                                                <Nav.Link eventKey="first">Websites</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="second">Mobile Apps</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="third">Graphic Design</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                            <Tab.Pane eventKey="first">
                                                <Row>
                                                    {
                                                        websites.map((project, index) => {
                                                            return (
                                                                <ProjectCard
                                                                    key={index}
                                                                    {...project}
                                                                />
                                                            )
                                                        })
                                                    }
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="second">
                                                <Row>
                                                    {
                                                        mobile.map((project, index) => {
                                                            return (
                                                                <ProjectCard
                                                                    key={index}
                                                                    {...project}
                                                                />
                                                            )
                                                        })
                                                    }
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="third">
                                                <Row>
                                                    {
                                                        graphic.map((project, index) => {
                                                            return (
                                                                <ProjectCard
                                                                    key={index}
                                                                    {...project}
                                                                />
                                                            )
                                                        })
                                                    }
                                                </Row>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Tab.Container>
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>
    )
}
