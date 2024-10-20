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
  CardTitle,
  Container,
  Row,
  Col,
  CardFooter,
} from "reactstrap";

// core components
import TopNavBar from "components/Navbars/TopNavBar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import SectionCarousel from "./index-sections/SectionCarousel";
import ContactForm from "components/Form";
import './Home.css';

function LandingPage() {
  // const [showFormValidation, setShowFormValidation] = useState(false);
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });

  const beeServices = [
    'New Hive Installation',
    'Inspections',
    'Treatments',
    'Personalized Maintenance Plans',
    'Honey Harvest',
    'Nucleaus Colonies',
    'Hive Set-ups',
    'Bee-hive Tours',
    'Beekeeper Expereince Days',
    'Bee/Wasp Identification & Removal',
    '*FREE SWARM REMOVAL*'
  ];

  const gardenServices = [
    'Landscaping and gardening for positive environmental impact',
    'Sustainable and responsible management plans for residential and commercial sites',
    'Customized modifications to existing landscapes to incorporate a native landscape',
    'Kill your lawn - lawn replacement for beneficial and sustainable gardening',
    'Native habitat restoration',
    'Pollinator gardening',
    'Edible landscaping',
    'Mushroom gardening',
    'Container & balcony gardening',
    'Overgrowth and invasive plant removal (i.e. blackberry, holly, ivy, scotch broom, etc.)',
    'Pruning for plant health and vitality'
  ]

  return (
    <>
      <TopNavBar />
      <LandingPageHeader />
      <div className="main">
        <div className="section text-center" id="services">
          <Container className="services">
            <h2 className="title">Services Overview</h2>
            <Row>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <img
                      alt="..."
                      src={require("assets/img/bees/bee-wood1.jpg")}
                    />
                  </div>
                  <CardBody>
                    <div>
                      <CardTitle tag="h4">Beekeeping</CardTitle>
                      <h6 className="card-category">Consulting, Hive Services, Gear & Honey</h6>
                    </div>
                    <ul className="services-list">
                      {beeServices.map((service) => <li style={{textAlign: 'left'}} className="services-list-item">{service}</li>)}
                    </ul>
                  </CardBody>
                  <CardFooter className="services-card-footer">
                    <Button
                      className="btn-round"
                      color="default"
                      href="/beekeeping"
                      outline
                      type="button"
                    >
                      See detailed service list and pricing
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <img
                      alt="..."
                      src={require("assets/img/bees/garden1.jpg")}
                    />
                  </div>
                  <CardBody>
                    <div style={{display: 'inline-flex'}}>
                      <div>
                        <CardTitle tag="h4">Gardening</CardTitle>
                        <h6 className="card-category">Consulting & landscaping</h6>
                      </div>
                    </div>
                    <div>
                        <img
                          alt="Pollinator steward logo"
                          width="75px"
                          src={require("assets/img/bees/PollinatorStewardLogo.png")}
                        />
                      </div>
                    <ul className="services-list">
                      {gardenServices.map((service) => <li style={{textAlign: 'left'}} className="services-list-item">{service}</li>)}
                    </ul>
                  </CardBody>
                  <CardFooter className="services-card-footer">
                  <Button
                    className="btn-round"
                    color="default"
                    outline
                    type="button"
                    onClick={() => document.getElementById("contact-us").scrollIntoView({behavior: "smooth"})}
                  >
                    Contact us for full service list and pricing
                  </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <img
                      alt="..."
                      src={require("assets/img/bees/bee-boxes2.jpg")}
                    />
                  </div>
                  <CardBody>
                    <div>
                      <CardTitle tag="h4">Education</CardTitle>
                      <h6 className="card-category">Focus on Sustainable Beekeeping, Pollinators, and their Habitat</h6>
                    </div>
                    <p className="card-description text-center education-summary">
                        We offer unique learning opportunities for individuals, schools, and community groups. Our workshops and events cover everything from the role of bees in pollination, honey making process, to hands-on experience in beekeeping. Our goal is to inspire budding bee enthusiasts and promote sustainable beekeeping practices for a better, greener future.
                    </p>
                  </CardBody>
                </Card>
              </Col>
            </Row>
            {/* <Button
              className="btn-round"
              color="default"
              outline
              type="button"
              onClick={() => document.getElementById("contact-us").scrollIntoView({behavior: "smooth"})}
            >
              Contact us for full service list and pricing
            </Button> */}
          </Container>
        </div>
        <div className="section section-dark text-center" id="who-we-are">
          <Container>
            <h2 className="title">Who We Are</h2>
            <Row>
                <Col md="4">
                    <img
                        alt="..."
                        className="img-rounded img-responsive about-us-image"
                        src={require("assets/img/bees/AboutUs.jpeg")}
                    />
                </Col>
                <Col md="8">
                    <p style={{fontSize: '18px'}} className="card-description white-text text-center">
                      Hi! Gabby and Devin here, ma & pa, gardener & beekeeper duo. We're here in the Coast Salish lowland forest (Puget Sound) providing sustainable and responsible gardening and beekeeping services to residents and commercial sites. Our shared passion for the environment drives us to nurture the land we share and live on for a greener, healthier future for all. For people & pollinators alike. We strive to help you create a space you feel good in, where you can grow a healthy relationship with nature, a place you feel like you can escape and relax in right outside your door. Through pollinator focused gardening and sustainable beekeeping we believe everyone can bring the natural world back home. We hope you’ll join us on this journey to help make the Earth a bit more green again one garden at a time.
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
          <p className="text-center form-call-us">Free Pollinator & Insect Identification - <a className="contact-form-link" href="mailto:gabby@abovebelowbgs.com" alt="send an email">Send an email</a> titled “Gabby’s Bug Box!”</p>
          <p className="text-center form-call-us">Need to chat sooner? Give us a call <i className="fa fa-phone" />: <a className="contact-form-link" href="tel:206-512-9996" alt="Call 206-512-9996">206-512-9996</a></p>
          <div className="form-call-us text-center">
            <h6>Hours</h6>
            <p>
              In Season (Mar - Oct): 8am-6pm Mon-Fri
              <ul>
                <li>*Swarm calls on weekends! </li>
              </ul>
            </p>
            <p>
              Off Season (Nov - Feb): 8am-6pm Mon-Fri 
            </p>
          </div>
        </div>
      </div>
      <DemoFooter />
    </>
  );
}

export default LandingPage;
