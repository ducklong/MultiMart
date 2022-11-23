import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import logo from "../../assets/images/eco-logo.png";
import { Container, Col, Row, ListGroup, ListGroupItem } from "reactstrap";
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" className="mb-4" md="6">
            <div className="logo__footer">
              <img src={logo} alt="logo" />
              <div>
                <h1 className="text-white"> Multimart</h1>
              </div>
            </div>
            <p className="footer__text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
              tempora veniam cupiditate quod fuga. Qui harum fugit a accusantium
              temporibus!
            </p>
          </Col>
          <Col lg="3" md="3" className="mb-4">
            <div className="footer__quick-links">
              <h4 className="quick__link-title">Top Categories</h4>
              <ListGroupItem className="ps-0 border-0">
                <Link to="#">Mobile Phones</Link>
              </ListGroupItem>
              <ListGroupItem className="ps-0 border-0">
                <Link to="#">Modern Sofa</Link>
              </ListGroupItem>
              <ListGroupItem className="ps-0 border-0">
                <Link to="#">Arm Chair</Link>
              </ListGroupItem>
              <ListGroupItem className="ps-0 border-0">
                <Link to="#">Smart Watch</Link>
              </ListGroupItem>
            </div>
          </Col>
          <Col lg="2" md="3" className="mb-4">
            <div className="footer__quick-links">
              <h4 className="quick__link-title">Useful Links</h4>
              <ListGroupItem className="ps-0 border-0">
                <Link to="/shop">Shop</Link>
              </ListGroupItem>
              <ListGroupItem className="ps-0 border-0">
                <Link to="/cartd">Cart</Link>
              </ListGroupItem>
              <ListGroupItem className="ps-0 border-0">
                <Link to="/login">Login</Link>
              </ListGroupItem>
              <ListGroupItem className="ps-0 border-0">
                <Link to="/privacy">Privacy Policy</Link>
              </ListGroupItem>
            </div>
          </Col>
          <Col lg="3" md="4">
            <div className="footer__quick-links">
              <h4 className="quick__link-title">Contact</h4>
              <div className="footer__contact">
                <ListGroupItem className="ps-0 border-0 ">
                  <span>
                    <a href="https://goo.gl/maps/4Wk11tBhQgzr35VZA">
                      <i class="ri-map-pin-line"> 482/54C NoTrangLong, HCM</i>
                    </a>
                  </span>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <span>
                    <a href="0397827538">
                      <i class="ri-phone-line"> 0397827538</i>
                    </a>
                  </span>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <span>
                    <span>
                      <i class="ri-mail-line"> longmkting@gmail.com</i>
                    </span>
                  </span>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <span>
                    <a href="https://www.facebook.com/longmkting/">
                      <i class="ri-facebook-box-line"> Facebook</i>
                    </a>
                  </span>
                </ListGroupItem>
              </div>
            </div>
          </Col>
          <Col lg="12">
            <p className="footer__copyright">
              Copyright {year} developed by{" "}
              <a href="https://www.linkedin.com/in/duc-nguyen-long-b205721b7/">
                Longmkting
              </a>
              . All rights reserves.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
