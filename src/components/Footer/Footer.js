import React from "react";
import { Button, Form } from "react-bootstrap";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className=" container ">
        <div className="row">
          <div className="col-md-6">
            <h2>Company</h2>
            <div className="row">
              <div className="col-md-6">
                <div className="explore">
                  <h3>Explore Us</h3>
                </div>
                <ul>
                  <li>About Us </li>
                  <li>Contact Us</li>
                  <li>Work with us</li>
                </ul>
              </div>
              <div className="col-md-6">
                <div className="misc">
                  <h3>Misc</h3>
                </div>
                <ul>
                  <li>Acount</li>
                  <li>Privacy Policy</li>
                  <li> Affiliate </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-4">
              <div className="news"><h2>Newslatter</h2></div>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Button variant="primary" type="submit">
                Subscribe
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
