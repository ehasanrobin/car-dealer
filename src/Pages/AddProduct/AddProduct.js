import React from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
const AddProduct = () => {
  const handleProduct = (event) => {
    event.preventDefault();
    const name = event.target.pname.value;
    const rating = event.target.rating.value;
    const sname = event.target.sname.value;
    const stock = event.target.stock.value;
    const dprice = event.target.dprice.value;
    const rprice = event.target.rprice.value;
    const imgUrl = event.target.imgUrl.value;

    const data = {
      name: name,
      rating: rating,
      supplierName: sname,
      stock: stock,
      regularPrice: rprice,
      discountPrice: dprice,
      img: imgUrl,
    };
    console.log(data);

    fetch("http://localhost:5000/addProduct", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      });

    event.target.reset();
  };
  return (
    <Container>
      <Row>
        <h2>Add Product</h2>
        <Form onSubmit={handleProduct}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Product Name</Form.Label>
            <Form.Control type="text" name="pname" placeholder="Product Name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Supplier Name</Form.Label>
            <Form.Control
              type="text"
              name="sname"
              placeholder="Supplier Name"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Rating</Form.Label>
            <Form.Control
              type="text"
              onKeyPress={(event) => {
                if (!/[1-5]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
              pattern="[0-5]{0,1}"
              name="rating"
              placeholder="Product Name"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Stock</Form.Label>
            <Form.Control
              type="text"
              onKeyPress={(event) => {
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
              name="stock"
              placeholder="Product Name"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>regular Price</Form.Label>
            <Form.Control
              type="text"
              onKeyPress={(event) => {
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
              name="rprice"
              placeholder="Product Name"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>discount Price</Form.Label>
            <Form.Control
              type="text"
              onKeyPress={(event) => {
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
              name="dprice"
              placeholder="Product Name"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>img url</Form.Label>
            <Form.Control type="text" name="imgUrl" placeholder="Image URL" />
          </Form.Group>

          <Button variant="primary" className="form-control mb-4" type="submit">
            add Product
          </Button>
        </Form>
      </Row>
    </Container>
  );
};

export default AddProduct;
