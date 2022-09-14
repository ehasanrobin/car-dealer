import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Rating from "react-rating";
import { Link, useParams } from "react-router-dom";

const CarUpdate = () => {
  const { id } = useParams();
  const [addStock, setAddStock] = useState(0);
  const SVGIcon = (props) => (
    <svg className={props.className} pointerEvents="none">
      <use xlinkHref={props.href} />
    </svg>
  );
  const [inventory, setInventory] = useState({});
  const [istock, setIStock] = useState(0);

  useEffect(() => {
    fetch(`https://cryptic-falls-18058.herokuapp.com/cars/${id}`)
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

  const handleStock = (e) => {
    const aStock = parseInt(e.target.value);
    setAddStock(aStock + istock);
  };

  const handleQuantity = (id) => {
    const proceed = window.confirm("are you sure?");
    let quantity = stock;
    console.log(id);
    if (proceed) {
      fetch(`https://cryptic-falls-18058.herokuapp.com/cars/${id}`, {
        method: "PUT", // Method itself
        headers: {
          "Content-type": "application/json; charset=UTF-8", // Indicates the content
        },
        body: JSON.stringify({ stock: addStock }), // We send data in JSON format})
      })
        .then((response) => response.json())
        .then((data) => console.log(data));
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
            <Link to={`/inventory/${_id}`}> back</Link>

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
            <input
              type="text"
              name="addstock"
              className="form-control"
              onChange={handleStock}
              onKeyPress={(event) => {
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
              placeholder="add stock"
            />
            <h3 className="text-danger">
              price: ${regularPrice}
              <sub>
                <del>${discountPrice}</del>
              </sub>
            </h3>
            <button
              onClick={() => handleQuantity(_id)}
              className="btn btn-primary mt-3"
            >
              Add Product
            </button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default CarUpdate;
