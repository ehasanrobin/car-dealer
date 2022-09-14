import React from "react";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <Container className="vh-100 ">
      <Row className="d-flex align-items-center">
        <h1>Opps! 404 not found</h1>
        <Link to="/">Back to home</Link>
      </Row>
    </Container>
  );
};

export default Error;
