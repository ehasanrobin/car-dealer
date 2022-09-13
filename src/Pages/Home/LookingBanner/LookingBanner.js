import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import img1 from "./../../../images/01.png";
import img from "./../../../images/02.png";
import "./LookingBanner.css";
const LookingBanner = () => {
  return (
    <Container fluid>
      <Row xs={1} lg={2} md={2}>
        <Col className="looking-banner p-3">
          <Card className="flex-row transparentbg justify-content-center align-items-center border-0">
            <Card.Img variant="top" className="w-50" src={img} />
            <Card.Body>
              <Card.Title>ARE YOU LOOKING FOR A CAR?</Card.Title>
              <Card.Text>
                Search your car in our Inventory and request a quote on the
                vehicle of your choosing.
              </Card.Text>
              <Button className="searchbtnrRed">Search</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col className=" p-3" style={{ background: "#db2d2e" }}>
          <Card className="flex-row-reverse transparentbg justify-content-center align-items-center border-0">
            <Card.Img variant="top" className="w-50" src={img1} />
            <Card.Body>
              <Card.Title>ARE YOU LOOKING FOR A CAR?</Card.Title>
              <Card.Text>
                Search your car in our Inventory and request a quote on the
                vehicle of your choosing.
              </Card.Text>
              <Button className="searchbtnrRed bg-light text-danger">
                Search
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default LookingBanner;
