import React from "react";
import { Col, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Styles from './Styles.module.css';
import {Container} from '@material-ui/core'

const imgArr = [
  "./images/Recoded.png",
  "./images/CodeDiscovery.jpg",
  "./images/reactjs.jpg",
  "./images/material-ui-logo.svg",
  "./images/freeCodeCamp.jpeg",
  "./images/learnco.jpg"
];

function Logoes() {
  return (
    <div>
      <h3 className="d-flex justify-content-center mt-5 text-uppercase font-weight-bold border border-info">
        Our Partner
      </h3>
<Container className="my-5">
      <Row className={Styles.container}>
        <Col xs={12} md={6} lg={2}>
          <Image src={imgArr[0]} className={Styles.logos}/>
        </Col>
        <Col xs={12} md={6} lg={2}>
          <Image src={imgArr[1]}  className={Styles.logos}/>
        </Col>
        <Col xs={12} md={6} lg={2}>
          <Image src={imgArr[2]}  className={Styles.logos1}/>
        </Col>
        <Col xs={12} md={6} lg={2}>
          <Image src={imgArr[3]} className={Styles.logos1}/>
        </Col>
        <Col xs={12} md={6} lg={2}>
          <Image src={imgArr[4]} className={Styles.logos}/>
        </Col>
        <Col xs={12} md={6} lg={2}>
          <Image src={imgArr[5]} className={Styles.logos}/>
        </Col>
      </Row>
      </Container>
    </div>
  );
}
export default Logoes;
