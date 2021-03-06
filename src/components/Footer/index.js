import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Box, Link } from "@material-ui/core";
import Styles from './Styles.module.css';



function FooterPage ()  {

    return (

     <Box color="white" className={Styles.fColor}>
       <Container>

        <Row>
          <Col>
            <h5 className="text-uppercase mb-4 mt-5 font-weight-bold">
              Lost & Found
            </h5>
            <p>Here you can find and organize your content of your life.</p>
            <p>
              with our website all things between your hands , you will not miss
              any thing after today..{" "}
            </p>
          </Col>
          <hr className="clearfix w-100 d-md-none" />
          <Col md="2" lg="2" className="ml-auto">
            <h5 className="text-uppercase mb-4 mt-5 font-weight-bold">About</h5>
            <ul className="list-unstyled">
              <p>
                <a href="/" className="text-white" >HOME</a>

              </p>
              <p>
                <a href="#!" className="text-white">About US</a>
              </p>
              <p>
                <a href="/details"className="text-white">DETAILS</a>
              </p>
              <p>
                <a href="/rewards"className="text-white">REWARDS</a>

              </p>
            </ul>
          </Col>
          <hr className="clearfix w-100 d-md-none" />
          <Col md="5" lg="3">
            <h5 className="text-uppercase mb-4 mt-5 font-weight-bold">Address</h5>
            <p>
              <i className="fa fa-home mr-3" /> Gaziantep, gazimukhtar basha
              10012, TR
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
            <h5 className="text-uppercase mb-4 mt-5 font-weight-bold">Follow us</h5>
            <div className="mt-2 d-flex flex-column">
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
      
      <div className="footer-copyright text-center py-3">
        <Container fluid>
          &copy; {new Date().getFullYear()} Copyright:{" "}

          <Link href="/" className="text-white"> Lost & Found </Link>
        </Container>
      </div>
      </Container>
    </Box>
  );
}

export default FooterPage;
