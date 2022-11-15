import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/the-byrd-spot.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/img/GitHub-Mark-Light-32px.png";

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <MailchimpForm />
                    <Col size={12} sm={6}>
                        <img src={logo} alt="Logo" />
                    </Col>
                    <Col size={12} sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/elibyrd/" target="_blank"><img src={navIcon1} alt="@elibyrd" /></a>
                            <a href="https://www.facebook.com/eli.byrd.501" target="_blank"><img src={navIcon2} alt="@eli.byrd.501" /></a>
                            <a href="https://www.instagram.com/byrdman895/" target="_blank"><img src={navIcon3} alt="@byrdman895" /></a>
                            <a href="https://www.github.com/byrdman32" target="_blank"><img src={navIcon4} alt="@byrdman32" /></a>
                        </div>
                        <p>Copyright 2022. All Rights Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}
