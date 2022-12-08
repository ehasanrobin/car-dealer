import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Rating from "react-rating";
import { Link, useParams } from "react-router-dom";
import "./Inventory.css";

const Inventory = () => {
  const { id } = useParams();
  const SVGIcon = (props) => (
    <svg className={props.className} pointerEvents="none">
      <use xlinkHref={props.href} />
    </svg>
  );
  const [inventory, setInventory] = useState({});
  const [istock, setIStock] = useState(0);

  useEffect(() => {
    fetch(`https://car-dealer-server-eosin.vercel.app/cars/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setInventory(data);
        setIStock(data.stock);
      });
  }, [inventory]);

  const {
    _id,
    img,
    name,
    supplierName,
    rating,
    stock,
    discountPrice,
    regularPrice,
  } = inventory;

  const handleDeliver = async (id) => {
    const proceed = window.confirm("are you sure?");
    let quantity = 0;
    if (proceed) {
      if (istock > 0) {
        quantity = { stock: istock - 1 };
        fetch(`https://car-dealer-server-eosin.vercel.app/cars/${id}`, {
          method: "PUT", // Method itself
          headers: {
            "Content-type": "application/json; charset=UTF-8", // Indicates the content
          },
          body: JSON.stringify(quantity), // We send data in JSON format})
        })
          .then((response) => response.json())
          .then((data) => console.log(data));
      }
    }
  };

  return (
    <Container>
      <Row>
        <Col>
          <div className="inventory-model">
            <img src={img} className="img-thumbnail" alt="" />
          </div>
        </Col>
        <Col>
          <div className="inventory-model">
            <Link to={`/carUpdate/${_id}`}>
              {" "}
              <i className="fa-solid fa-pencil"></i> update
            </Link>

            <h1>model :{name}</h1>
            <Rating
              initialRating={rating}
              emptySymbol="fa-regular fa-star"
              fullSymbol="fa-solid fa-star"
              readonly={true}
              className="text-warning fs-3"
            />
            <h3 className="py-3">Supplier Name: {supplierName}</h3>
            <h3 className="py-3">Stock: {stock}</h3>
            <h3 className="text-danger">
              price: ${regularPrice}
              <sub>
                <del>${discountPrice}</del>
              </sub>
            </h3>
            <button
              onClick={() => handleDeliver(_id)}
              className="btn btn-primary mt-3"
            >
              Deliver
            </button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Inventory;
