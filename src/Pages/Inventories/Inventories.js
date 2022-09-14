import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Inventories.css";
const Inventories = () => {
  const [pagesCount, setPagesCount] = useState(0);
  const [pages, setPages] = useState(0);
  const [size, setSize] = useState(5);

  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch(
      `https://cryptic-falls-18058.herokuapp.com/cars?page=${pages}&size=${size}`
    )
      .then((res) => res.json())
      .then((data) => setCars(data));
  }, [pages, size]);

  useEffect(() => {
    fetch("https://cryptic-falls-18058.herokuapp.com/productCount")
      .then((res) => res.json())
      .then((data) => setPagesCount(Math.ceil(data.count / 5)));
  }, []);

  return (
    <>
      <Container className="intentory-seciton">
        <Row>
          <div className="inventorytitle text-center">
            <sub>Cars Inventory</sub>
            <h1>Cars Collection</h1>
          </div>
        </Row>
        <Row xs={1} sm={2} md={3} lg={4}>
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
        <Row>
          <div>
            {[...Array(pagesCount).keys()].map((number) => (
              <button
                className={`btn border m-2 ${pages == number ? "active" : ""}`}
                onClick={() => setPages(number)}
              >
                {" "}
                {number + 1}
              </button>
            ))}

            <select
              name=""
              onChange={(e) => {
                setSize(e.target.value);
              }}
              className="btn border"
              id=""
            >
              <option value="5">5</option>
              <option value="7">7</option>
              <option value="10">10</option>
            </select>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Inventories;
