import React, { useContext } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Context } from "..";

export default function Shop() {
  const { device } = useContext(Context);
  return (
    <Container>
      <Row>
        <Col md={3}>
          <TypeBar/>
        </Col>
        <Col md={9}></Col>
      </Row>
    </Container>
  );
}
