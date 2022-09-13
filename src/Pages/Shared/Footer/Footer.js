import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import logo from "../../../images/logo-dark.png";
import "./Footer.css";
const Footer = () => {
  return (
    <>
      <footer>
        <Container>
          <Row xs={1} md={3}>
            <Col>
              <img className="logo mb-4" src={logo} alt="" />
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos
                dolores debitis iure impedit ipsum, commodi obcaecati tempora
                reprehenderit qui optio?
              </p>
            </Col>
            <Col>
              <h5>menus</h5>
              <ul>
                <li>
                  <a href="">home</a>
                </li>
                <li>
                  <a href="">inventories</a>
                </li>
                <li>
                  <a href="">about</a>
                </li>
                <li>
                  <a href="">contact</a>
                </li>
              </ul>
            </Col>
            <Col>
              <h5>menus</h5>
              <ul>
                <li>
                  <a href="">home</a>
                </li>
                <li>
                  <a href="">inventories</a>
                </li>
                <li>
                  <a href="">about</a>
                </li>
                <li>
                  <a href="">contact</a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
