/*!

=========================================================
* Paper Kit React - v1.3.2
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/
import React from "react";

// reactstrap components
import { Col, Row, Container } from "reactstrap";

function DemoFooter() {
  return (
    <footer className="footer footer-black footer-white">
      <Container>
        <Row style={{padding: '16px 0'}}>
          <Col md="11" sm="10" xs="8">
            <nav style={{lineHeight: '100px'}}>
              <ul>
                <li>
                  <a
                    href="#"
                  >
                    <i className="nc-icon nc-minimal-up" /> Back to Top
                  </a>
                </li>
              </ul>
            </nav>
          </Col>
          <Col md="1" sm="2" xs="4">
            <div className="credits ml-auto">
              <img
                alt="Pollinator steward logo"
                width="75px"
                src={require("assets/img/bees/PollinatorStewardLogo.png")}
              />
            </div>
          </Col>
          {/* <div className="credits ml-auto">
            <span className="copyright">
              {new Date().getFullYear()} HVS
            </span>
          </div> */}
        </Row>
      </Container>
    </footer>
  );
}

export default DemoFooter;
