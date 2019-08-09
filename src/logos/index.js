import React from "react";
import {Col, Row} from "react-bootstrap";
import Image from 'react-bootstrap/Image';




const imgArr = ["./images/img2.svg","./images/img3.svg","./images/img4.svg" ];

function Logoes() {
  
  return (

    <div>
      
      <h3 className="d-flex justify-content-center text-uppercase font-weight-bold border border-info" >Our Partner</h3>
      
    <Row className="d-flex justify-content-center mb-5 mt-5">
    <Col xs={1} md={1} >
      <Image src={imgArr[0]} />
    </Col>
    <Col xs={1} md={1}>
      <Image src={imgArr[1]} />
    </Col>
    <Col xs={1} md={1}>
      <Image src={imgArr[2]} />
    </Col>
    <Col xs={1} md={1}>
      <Image src={imgArr[0]} />
    </Col>
    <Col xs={1} md={1}>
      <Image src={imgArr[1]} />
    </Col>
    <Col xs={1} md={1}>
      <Image src={imgArr[2]} />
    </Col>
    </Row>
      </div>
  );
}
export default Logoes;


 
