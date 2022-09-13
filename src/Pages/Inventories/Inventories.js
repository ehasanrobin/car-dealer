import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import useCars from "../../Hooks/useCars";
import "./Inventories.css";
const Inventories = () => {
  const [cars] = useCars();

  return (
    <>
      <Container className="intentory-seciton">
        <Row>
          <div className="inventorytitle text-center">
            <sub>Cars Inventory</sub>
            <h1>Cars Collection</h1>
          </div>
        </Row>
        <Row md={4}>
          {cars.map((car) => (
            <Col className="mt-3">
              <Card as={Link} to={`/inventory/${car._id}`} className="cars-box">
                <Card.Img variant="top" src={car.img} />
                <Card.Body>
                  <Card.Title className="double-bars pb-2 text-center position-relative">
                    {car.name}
                  </Card.Title>
                  <Card.Text className="pt-3">
                    <del>${car.regularPrice}</del>
                    &nbsp; ${car.discountPrice}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Inventories;
