import React from "react";
import { MdHighlight } from "react-icons/md";

import style from "./style.module.css";
import { Col, Container, Row } from "react-bootstrap";

function Header() {
  return (
    <Container className={style.header}>
      <Row>
        <Col sm={1}>
          <MdHighlight />
        </Col>
        <Col sm={10}>
          <h1 style={{ textAlign: "center" }}>Todo App</h1>
        </Col>
        <Col sm={1}></Col>
      </Row>
    </Container>
  );
}

export default Header;
