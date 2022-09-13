import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./LowBanner.css";
const LowBanner = () => {
  return (
    <Container fluid>
      <Row xl={3} md={2} xs={1}>
        <Col className="p-0">
          <Card className="bg-dark text-white rounded-0">
            <Card.Img src="https://i.ibb.co/zm4Ss0r/16.jpg" alt="Card image" />
            <Card.ImgOverlay>
              <Card.Title>ALL BRANDS</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <button className="theme-btn">View Inventory</button>
            </Card.ImgOverlay>
          </Card>
        </Col>
        <Col className="p-0">
          <Card className="bg-dark text-white rounded-0">
            <Card.Img src="https://i.ibb.co/4P7pkVn/17.jpg" alt="Card image" />
            <Card.ImgOverlay>
              <Card.Title>ALL BRANDS</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <button className="theme-btn">View Inventory</button>
            </Card.ImgOverlay>
          </Card>
        </Col>
        <Col className="p-0">
          <Card className="bg-dark text-white rounded-0">
            <Card.Img src="https://i.ibb.co/7G4K20j/15.jpg" alt="Card image" />
            <Card.ImgOverlay>
              <Card.Title>ALL BRANDS</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <button className="theme-btn">View Inventory</button>
            </Card.ImgOverlay>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default LowBanner;
