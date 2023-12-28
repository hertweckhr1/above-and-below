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
import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import TopNavBar from "components/Navbars/TopNavBar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import SectionCarousel from "./index-sections/SectionCarousel";
import ContactForm from "components/Form";

function LandingPage() {
  // const [showFormValidation, setShowFormValidation] = useState(false);
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });

  return (
    <>
      <TopNavBar />
      <LandingPageHeader />
      <div className="main">
        <div className="section text-center" id="services">
          <Container>
            <h2 className="title">Services</h2>
            <Row>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("assets/img/bees/bee-wood1.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Beekeeping</CardTitle>
                        <h6 className="card-category">Consulting, bee boxes, honey</h6>
                      </div>
                    </a>
                    <p className="card-description text-center">
                        Committed to keeping our planet filled with these amazing pollinators, I provide pure, raw honey right from my bee farm along with a chance to adopt your own bee-hives. I'm also skilled in offering swarm removal services maintaining safety and fair treatment of bees.
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon btn-neutral"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-twitter" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-google-plus" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("assets/img/bees/bee-boxes2.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Education</CardTitle>
                        <h6 className="card-category">Focus on Sustainable beekeeping</h6>
                      </div>
                    </a>
                    <p className="card-description text-center">
                        We offer unique learning opportunities for individuals, schools, and community groups. Our workshops and events cover everything from the role of bees in pollination, honey making process, to hands-on experience in beekeeping. Our goal is to inspire budding bee enthusiasts and promote sustainable beekeeping practices for a better, greener future.
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon btn-neutral"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-twitter" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-google-plus" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("assets/img/bees/garden1.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Garden</CardTitle>
                        <h6 className="card-category">Consulting, landscaping</h6>
                      </div>
                    </a>
                    <p className="card-description text-center">
                        Our garden service company provides expert advice and personalized consultations to guide you in creating aesthetically pleasing and productive gardens tailored to your unique needs and ambitions.
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon btn-neutral"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-twitter" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-google-plus" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="section section-dark text-center" id="who-we-are">
          <Container>
            <h2 className="title">Who We Are</h2>
            <Row>
                <Col md="4">
                    <img
                        alt="..."
                        className="img-rounded img-responsive"
                        src={require("assets/img/bees/bee-keeper_family.jpg")}
                    />
                </Col>
                <Col md="8">
                    <p style={{fontSize: '20px'}} className="card-description text-muted text-center">
                        Meet Gabby and Devon, the devoted duo behind our buzzing beekeeping and flourishing garden business. With their expertise in beekeeping and green thumb in gardening, they have teamed up to create a unique venture that offers exquisite raw honey, personalized gardening consultations, and enlightening beekeeping workshops. Their shared passion for the environment and sustainable practices is evident in their commitment to educate and inspire others about the importance of bees, effective gardening, and the interconnectedness of nature. Join Gabby and Devon on this journey as they strive to make a difference one garden and one beehive at a time.
                    </p>
                </Col>
            </Row>
          </Container>
        </div>
        <div className="section text-center" id="gallery">
          <Container>
            <h2 className="title">Gallery</h2>
            <SectionCarousel />
          </Container>
        </div>
        <div className="section section-dark landing-section" id="contact-us">
          <ContactForm/>
        </div>
      </div>
      <DemoFooter />
    </>
  );
}

export default LandingPage;
