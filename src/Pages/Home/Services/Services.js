import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./Services.css";

const Services = () => {
  const car = <FontAwesomeIcon icon="fa-solid fa-car" />;
  const affordable = <FontAwesomeIcon icon="fa-solid fa-car-burst" />;
  const airCodioning = <FontAwesomeIcon icon="fa-solid fa-car-on" />;
  const flatbed = <FontAwesomeIcon icon="fa-solid fa-cart-flatbed" />;
  const oilChange = (
    <FontAwesomeIcon icon="fa-solid fa-cart-flatbed-suitcase" />
  );
  return (
    <Container className="service-container">
      <Row className="align-items-center">
        <Col md="4">
          <Row sm={1}>
            <Col>
              <Card border="0">
                <Card.Body className="service-body">
                  <div className="service-icon">{car}</div>
                  <Card.Title>SUPER FAST</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card border="0">
                <Card.Body className="service-body">
                  <div className="service-icon">{affordable}</div>
                  <Card.Title>AFFORDABLE</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card border="0">
                <Card.Body className="service-body">
                  <div className="service-icon">{oilChange}</div>
                  <Card.Title>OIL CHANGES</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
        <Col md="3" className="carservice-col">
          <img
            className="carService"
            src="https://i.ibb.co/xD8HZtY/18.png"
            alt=""
          />
        </Col>
        <Col md="4">
          <Row xl={1} sm={1}>
            <Col>
              <Card border="0">
                <Card.Body className="">
                  <div className="service-icon">{airCodioning}</div>
                  <Card.Title>AIR CONDITIONING</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card border="0">
                <Card.Body className="">
                  <div className="service-icon">{flatbed}</div>
                  <Card.Title>TRANSMISSION</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card border="0">
                <Card.Body className="">
                  <div className="service-icon">{oilChange}</div>
                  <Card.Title>DEALERSHIP</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Services;
