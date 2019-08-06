import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Box, Link } from "@material-ui/core";


function FooterPage ()  {

    return (

<Box color="black">
      <Container>
        <Row >
          <Col>
            <h5 className="text-uppercase mb-4 font-weight-bold">
              Lost & Found 
            </h5>
            <p>
              Here you can find and organize your 
              content of your life.
            </p>
            <p>
            with our website all things between your hands , you  will not miss any thing after today.. {" "}
            </p>
          </Col>
          <hr className="clearfix w-100 d-md-none" />
          <Col md="2" lg="2" className="ml-auto">
            <h5 className="text-uppercase mb-4 font-weight-bold">About</h5>
            <ul className="list-unstyled">
              <p>
                <a href="#!">Home</a>
              </p>
              <p>
                <a href="#!">ABOUT US</a>
              </p>
              <p>
                <a href="#!">Success Stories</a>
              </p>
              <p>
                <a href="#!">ReWARDS</a>
              </p>
            </ul>
          </Col>
          <hr className="clearfix w-100 d-md-none" />
          <Col md="5" lg="3">
            <h5 className="text-uppercase mb-4 font-weight-bold">Address</h5>
            <p>
              <i className="fa fa-home mr-3" /> Gaziantep, gazimukhtar basha 10012, TR
            </p>
            <p>
              <i className="fa fa-envelope mr-3" /> taha.benzma94@gmail.com
            </p>
            <p>
              <i className="fa fa-phone mr-3" /> +90 531 724 1855
            </p>
            <p>
              <i className="fa fa-print mr-3" /> +90 534 370 9870
            </p>
          </Col>
          <hr className="clearfix w-100 d-md-none" />
          <Col md="2" lg="2" className="text-center">
            <h5 className="text-uppercase mb-4 font-weight-bold">
              Follow us
            </h5>
            <div className="mt-2 d-flex flex-column" >
              <Link type="button" className="btn-floating btn-lg btn-fb">
                <i className="fab fa-facebook-f" />
              </Link>
              <Link type="button" className="btn-floating btn-lg btn-tw">
                <i className="fab fa-twitter" />
              </Link>
              <Link type="button" className="btn-floating btn-lg btn-gplus">
                <i className="fab fa-google-plus" />
              </Link>
              <Link type="button" className="btn-floating btn-lg btn-git">
                <i className="fab fa-github" />
              </Link>
            </div>
          </Col>
          <hr className="clearfix w-100 d-md-none" />
        </Row>
      </Container>
      <div className="footer-copyright text-center py-3">
        <Container fluid>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <Link href="#"> Lost & Found </Link>
        </Container>
      </div>
    </Box>
  );
}

export default FooterPage;



















// import React from 'react';
// import { Container, Icon } from '@material-ui/core';
// import Box from '@material-ui/core/Box';
// import Link from '@material-ui/core/Link';
// import {Row, Col} from 'react-bootstrap';


  

// function FooterPage() {
//     return (
//         <Box color="black" className="font-small pt-4 mt-4">
//               <Container fluid className="text-center text-md-left">
//              <Row>
//                   <Col md="5">
//                  <h5>Lost & Found </h5>
//                      <p>
//                        Here you can Find whar Do you Lost , It is your do not forgive ...
//                      </p>
//                    </Col>
//                    <Col md="3">
//                      <h5>Social Media</h5>
//                      <ul>
//                        <li className="list-unstyled">             
//                         <Link href="#" color="inherit"> FaceBook</Link>
//                        </li>
//                      <li className="list-unstyled">
//                          <Link href="#" color="inherit">Twitter</Link>
//                        </li>
//                        <li className="list-unstyled">
//                          <Link href="#" color="inherit">Inistagram</Link>
//                        </li>
//                        <li className="list-unstyled">
//                          <Link href="#" color="inherit">LinkedIn</Link>
//                        </li>
//                      </ul>
//                    </Col>
//                    <Col md="3">
//                      <h5 className="title">Useful Links</h5>
//                      <ul>
//                        <li className="list-unstyled">
//                          <Link href="#" color="inherit">Home</Link>
//                        </li>
//                      <li className="list-unstyled">
//                          <Link href="#" color="inherit">About us</Link>
//                        </li>
//                        <li className="list-unstyled">
//                          <Link href="#" color="inherit">Contact us</Link>
//                        </li>
//                        <li className="list-unstyled">
//                          <Link href="#" color="inherit">Re:coded</Link>
//                        </li>
//                      </ul>
//                    </Col>
//                    </Row>
//                </Container>
//                <div className="footer-copyright text-center py-3">
//                  <Container fluid>
//                    &copy; {new Date().getFullYear()} Copyright: <a href="#"> my love is coding every time </a>
//                  </Container>
//                </div>
//              </Box>
       
//     );
//     }

// export default FooterPage;