import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import useCars from "../../Hooks/useCars";

const ManageProduct = () => {
  const [cars] = useCars();

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      fetch(`http://localhost:5000/cars/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.text()) // or res.json()
        .then((res) => console.log(res));
    }
  };

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
              <Card className="cars-box">
                <Card.Img variant="top" src={car.img} />
                <Card.Body>
                  <Card.Title className="double-bars pb-2 text-center position-relative">
                    {car.name}
                  </Card.Title>
                  <Card.Text className="pt-3">
                    <del>${car.regularPrice}</del>
                    &nbsp; ${car.discountPrice}
                  </Card.Text>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(car._id)}
                  >
                    delete
                  </button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default ManageProduct;
