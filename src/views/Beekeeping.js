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
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import DemoFooter from "components/Footers/DemoFooter.js";
import GoBackNavBar from "components/Navbars/GoBackNavBar";
import ServicesPageHeader from "components/Headers/ServicesPageHeader";
import './Beekeeping.css';

function Beekeeping() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    return function cleanup() {
      document.body.classList.remove("landing-page");
    };
  });
  return (
    <>
      <GoBackNavBar />
      <ServicesPageHeader />
      <div className="section profile-content">
        <Container>
        <h1 className="text-center">Beekeeping Services</h1>
          <Row>
            <Col className="ml-auto mr-auto text-center"  lg="10" md="9" >
              <p className="services-paragraph">
                Please note: Our business offers services on a sliding scale to ensure affordability for all our clients.
              </p>
              <p className="services-paragraph">
                * All services are subject to sales tax.
              </p>
              <br />
            </Col>
          </Row>
          <br />
          <Row>
            <Col className="ml-auto mr-auto" md="10">
                <ul className="list-unstyled follows">
                    <li>
                        <Row>
                            <Col className="ml-auto mr-auto" lg="9" md="8" xs="8">
                                <h6>
                                    Basic Inspection
                                    <br />
                                    <small>Queen’s Right Proof - Brood Health and Disease Inspection - Hive Resources - Overall Hive Health and Activity - Maintain Equipment</small>
                                </h6>
                            </Col>
                            <Col className="ml-auto mr-auto" lg="3" md="4" xs="4">
                                <h6 className="text-right">$125</h6>
                            </Col>
                        </Row>
                    </li>
                    <hr />
                    <li>
                        <Row>
                            <Col className="ml-auto mr-auto" lg="9" md="8" xs="8">
                                <h6>
                                    Extended Inspection
                                    <br />
                                    <small>Varroa Wash + Mite Impact Inspection - Splits - Nuc Instillations - Exchanging or Replacing Equipment - Transportation</small>
                                </h6>
                            </Col>
                            <Col className="ml-auto mr-auto" lg="3" md="4" xs="4">
                                <h6 className="text-right">$165</h6>
                            </Col>
                        </Row>
                    </li>
                    <hr />
                    <li>
                        <Row>
                            <Col className="ml-auto mr-auto" lg="9" md="8" xs="8">
                                <h6>
                                    Inspection and Transportation
                                </h6>
                            </Col>
                            <Col className="ml-auto mr-auto" lg="3" md="4" xs="4">
                                <h6 className="text-right">$30 +30 miles</h6>
                            </Col>
                        </Row>
                    </li>
                    <hr />
                    <li>
                        <Row>
                            <Col className="ml-auto mr-auto" lg="9" md="8" xs="8">
                                <h6>
                                    Oxalic Acid Vapor Treatment Set
                                    <br />
                                    <small>3-5 days return visit</small>
                                </h6>
                            </Col>
                            <Col className="ml-auto mr-auto" lg="3" md="4" xs="4">
                                <h6 className="text-right">$125 (x2 vapes)</h6>
                            </Col>
                        </Row>
                    </li>
                    <hr />
                    <li>
                        <Row>
                            <Col className="ml-auto mr-auto" lg="9" md="8" xs="8">
                                <h6>
                                    Personal Hive Tour and/or Photo Tour (May - Jul)
                                    <br />
                                    <small>Life of Honey Bees - Brood and Hive Activities. Excellent opportunity for Photographs - Facetime or Photo and Video tours available.</small>
                                </h6>
                            </Col>
                            <Col className="ml-auto mr-auto" lg="3" md="4" xs="4">
                                <h6 className="text-right">$165</h6>
                            </Col>
                        </Row>
                    </li>
                    <hr />
                    <li>
                        <Row>
                            <Col className="ml-auto mr-auto" lg="9" md="8" xs="8">
                                <h6>
                                    Beehive Tour - 2 Observers (May - Jul)
                                    <br />
                                    <small>Hive Tour + Beekeeping Craft demonstration.</small>
                                </h6>
                            </Col>
                            <Col className="ml-auto mr-auto" lg="3" md="4" xs="4">
                                <h6 className="text-right">$225</h6>
                            </Col>
                        </Row>
                    </li>
                    <hr />
                    <li>
                        <Row>
                            <Col className="ml-auto mr-auto" lg="9" md="8" xs="8">
                                <h6>
                                    Beehive Tour - 3+ Observers (May - Jul)
                                    <br />
                                    <small>On Location for hive Owners - Demonstration Hives available. Inquire about Special Events/Filming.</small>
                                </h6>
                            </Col>
                            <Col className="ml-auto mr-auto" lg="3" md="4" xs="4">
                                <h6 className="text-right">$325</h6>
                            </Col>
                        </Row>
                    </li>
                    <hr />
                    <li>
                        <Row>
                            <Col className="ml-auto mr-auto" lg="9" md="8" xs="8">
                                <h6>
                                    Monthly Apiary Maintenance
                                    <br />
                                    <small>Inspections, Treatment, Feeding, and Seasonal Adjustments.</small>
                                </h6>
                            </Col>
                            <Col className="ml-auto mr-auto" lg="3" md="4" xs="4">
                                <h6 className="text-right">$295-350 (3+ hives)</h6>
                            </Col>
                        </Row>
                    </li>
                    <hr />
                    <li>
                        <Row>
                            <Col className="ml-auto mr-auto" lg="9" md="8" xs="8">
                                <h6>
                                    Yearly Apiary Maintenance Total
                                    <br />
                                    <small>Full Service Seasonal Beekeeping including: Inspections, Treatments, Feeding, Harvesting, Hive tours, and Photography.</small>
                                </h6>
                            </Col>
                            <Col className="ml-auto mr-auto" lg="3" md="4" xs="4">
                                <h6 className="text-right">$3800 - $5000 (existing or new apiaries ~ pollination or production)</h6>
                            </Col>
                        </Row>
                    </li>
                    <hr />
                    <li>
                        <Row>
                            <Col className="ml-auto mr-auto" lg="9" md="8" xs="8">
                                <h6>
                                    New WA hive set-up
                                    <br />
                                    <small>Deep brood box + x2 Med Supers. Telescoping Cover - Screened Bottom. Block Footing and Wind Strap + Delivery and Set-up.</small>
                                </h6>
                            </Col>
                            <Col className="ml-auto mr-auto" lg="3" md="4" xs="4">
                                <h6 className="text-right">$685</h6>
                            </Col>
                        </Row>
                    </li>
                    <hr />
                    <li>
                        <Row>
                            <Col className="ml-auto mr-auto" lg="9" md="8" xs="8">
                                <h6>
                                    Nucleus Colony
                                    <br />
                                    <small>x5 Frames Bees w/ Laying Queen. Laying guaranteed at first inspection.</small>
                                </h6>
                            </Col>
                            <Col className="ml-auto mr-auto" lg="3" md="4" xs="4">
                                <h6 className="text-right">$225 - $300 late season + $45 regional delivery</h6>
                            </Col>
                        </Row>
                    </li>
                    <hr />
                    <li>
                        <Row>
                            <Col className="ml-auto mr-auto" lg="9" md="8" xs="8">
                                <h6>
                                    Queens
                                    <br />
                                    <small>Seasonal mated queens. (Survivor queens by prior arrangement, please ask about pricing and scheduling.)</small>
                                </h6>
                            </Col>
                            <Col className="ml-auto mr-auto" lg="3" md="4" xs="4">
                                <h6 className="text-right">$55</h6>
                            </Col>
                        </Row>
                    </li>
                    <hr />
                    <li>
                        <Row>
                            <Col className="ml-auto mr-auto" lg="9" md="8" xs="8">
                                <h6>
                                    Swarm collection
                                </h6>
                            </Col>
                            <Col className="ml-auto mr-auto" lg="3" md="4" xs="4">
                                <h6 className="text-right">Free!</h6>
                            </Col>
                        </Row>
                    </li>
                    <hr />
                    <li>
                        <Row>
                            <Col className="ml-auto mr-auto" lg="9" md="8" xs="8">
                                <h6>
                                    Swarms caught and hived
                                </h6>
                            </Col>
                            <Col className="ml-auto mr-auto" lg="3" md="4" xs="4">
                                <h6 className="text-right">$125 ($65 for set up + $60 Successful Capture)</h6>
                            </Col>
                        </Row>
                    </li>
                    <hr />
                    <li>
                        <Row>
                            <Col className="ml-auto mr-auto" lg="9" md="8" xs="8">
                                <h6>
                                    Swarms caught and hived
                                </h6>
                            </Col>
                            <Col className="ml-auto mr-auto" lg="3" md="4" xs="4">
                                <h6 className="text-right">$125 ($65 for set up + $60 Successful Capture)</h6>
                            </Col>
                        </Row>
                    </li>
                    <hr />
                    <li>
                        <Row>
                            <Col className="ml-auto mr-auto" lg="9" md="8" xs="8">
                                <h6>
                                    Bee/Wasp Nest Identification
                                    <br />
                                    <small>Genera Identification of Wasp’s Nests - Bumble Bee Nests - Native Bees. Credited for (wasp only) removal.</small>
                                </h6>
                            </Col>
                            <Col className="ml-auto mr-auto" lg="3" md="4" xs="4">
                                <h6 className="text-right">$85</h6>
                            </Col>
                        </Row>
                    </li>
                    <hr />
                    <li>
                        <Row>
                            <Col className="ml-auto mr-auto" lg="9" md="8" xs="8">
                                <h6>
                                    No spray wasp removal
                                    <br />
                                    <small>Removal of wasp and hornet nests in-ground, brush, or trees.</small>
                                    <br />
                                    <small>No spray or pesticides. Nest and wasps removed by vacuum. </small>
                                    <ul>
                                        <li>Paper Wasps - $125-$165 (depending on height)</li>
                                        <li>Yellow Jackets - $185-$350 (depending on height)</li>
                                        <li>Hornets - $250 (ground level) - $375 (below 10’)</li>
                                    </ul>
                                </h6>
                            </Col>
                            <Col className="ml-auto mr-auto" lg="3" md="4" xs="4">
                                <h6 className="text-right">Starting at $125 (minus identification)</h6>
                            </Col>
                        </Row>
                    </li>
                </ul>
            </Col>
        </Row>
        <h2 className="text-center services-h2">Equipment Costs</h2>
        <Row>
            <Col className="ml-auto mr-auto text-center" md="8">
                <p>
                    Please ask about hive personalization, painting, and initialing. Pitched copper roofs and fittings available on request.
                </p>
            </Col>
        </Row>
        <br />
        <Row>
            <Col className="ml-auto mr-auto" md="10">
                <ul className="list-unstyled follows">
                    <li>
                        <Row>
                            <Col className="ml-auto mr-auto" lg="9" md="8" xs="8">
                                <h6>
                                    Lid and inner cover
                                </h6>
                            </Col>
                            <Col className="ml-auto mr-auto" lg="3" md="4" xs="4">
                                <h6 className="text-right">$65</h6>
                            </Col>
                        </Row>
                    </li>
                    <hr />
                    <li>
                        <Row>
                            <Col className="ml-auto mr-auto" lg="9" md="8" xs="8">
                                <h6>
                                    Screened Bottom Board
                                </h6>
                            </Col>
                            <Col className="ml-auto mr-auto" lg="3" md="4" xs="4">
                                <h6 className="text-right">$40</h6>
                            </Col>
                        </Row>
                    </li>
                    <hr />
                    <li>
                        <Row>
                            <Col className="ml-auto mr-auto" lg="9" md="8" xs="8">
                                <h6>
                                    Vivaldi Screen/Moisture Quilt
                                </h6>
                            </Col>
                            <Col className="ml-auto mr-auto" lg="3" md="4" xs="4">
                                <h6 className="text-right">$45</h6>
                            </Col>
                        </Row>
                    </li>
                    <hr />
                    <li>
                        <Row>
                            <Col className="ml-auto mr-auto" lg="9" md="8" xs="8">
                                <h6>
                                    Medium Super, assembled plus frames
                                </h6>
                            </Col>
                            <Col className="ml-auto mr-auto" lg="3" md="4" xs="4">
                                <h6 className="text-right">$75 ($45 for box without frames)</h6>
                            </Col>
                        </Row>
                    </li>
                    <hr />
                    <li>
                        <Row>
                            <Col className="ml-auto mr-auto" lg="9" md="8" xs="8">
                                <h6>
                                    Deep, assembled plus frames
                                </h6>
                            </Col>
                            <Col className="ml-auto mr-auto" lg="3" md="4" xs="4">
                                <h6 className="text-right">$85 ($55 for box without frames)</h6>
                            </Col>
                        </Row>
                    </li>
                    <hr />
                    <li>
                        <Row>
                            <Col className="ml-auto mr-auto" lg="9" md="8" xs="8">
                                <h6>
                                    Medium Frames
                                </h6>
                            </Col>
                            <Col className="ml-auto mr-auto" lg="3" md="4" xs="4">
                            <h6 className="text-right">$3 each</h6>
                            <h6 className="text-right">x10 - $30</h6>
                            </Col>
                        </Row>
                    </li>
                    <hr />
                    <li>
                        <Row>
                            <Col className="ml-auto mr-auto" lg="9" md="8" xs="8">
                                <h6>
                                    Deep Frames
                                </h6>
                            </Col>
                            <Col className="ml-auto mr-auto" lg="3" md="4" xs="4">
                                <h6 className="text-right">$4 each</h6>
                                <h6 className="text-right">x10 - $40</h6>
                            </Col>
                        </Row>
                    </li>
                    <hr />
                </ul>
            </Col>
        </Row>
        <h2 className="text-center services-h2">Honey</h2>
        <br />
        <Row>
            <Col className="ml-auto mr-auto" md="10">
                <ul className="list-unstyled follows">
                    <li>
                        <Row>
                            <Col className="ml-auto mr-auto" lg="9" md="8" xs="8">
                                <h6>
                                    Honey Harvested As Available from Hives
                                    <br />
                                    <small>Raw or micro filtered - Capped Honey Frames</small>
                                    <br />
                                    <small>Collected During Regular Inspection - Processed on location at request</small>
                                    <br />
                                    <small>*Honey bottled - bottles available or to order </small>
                                </h6>
                            </Col>
                            <Col className="ml-auto mr-auto" lg="3" md="4" xs="4">
                                <h6 className="text-right">$125-300 - depending on volume/# number of Frames</h6>
                            </Col>
                        </Row>
                    </li>
                    <hr />
                </ul>
            </Col>
        </Row>
        <Row>
            <Col className="ml-auto mr-auto" md="10">
                <div className="services-paragraph">
                    <ul>
                        <li>
                            Honey is not typically collected in quantity from first year hives. Portions for tasting or a modest Table are always available after June.
                        </li>
                        <li>
                            Overwintered Hives may have a portion of Spring Honey to provide after Spring Equinox.
                        </li>
                        <li>
                            Well Developed Hives will have a portion of New Honey before Fall Equinox.
                        </li>
                        <li>
                            Honey may be collected without damaging the hive at two times during the year.
                            <ul>
                                <li>
                                Traditionally The main portion is available at the end of summer when new honey is fully capped. In overwintered hives remaining honey can be collected in late spring and can be safely removed once new nectar is being collected regularly. 
                                </li>
                            </ul>
                        </li>
                        <li>
                            Honey is one of the most rewarding parts of beekeeping. We want to harvest honey for many years by always being responsible and understanding what we take, when we take it, and where we take it from.
                        </li>
                        <li>
                            We will always respect the colony’s needs when we remove the bee’s precious food.
                        </li>
                    </ul>
                </div>
            </Col>
        </Row>
        <h2 className="text-center services-h2">Above and Below New Customer Timeline</h2>
        <br />
        <Row>
            <Col className="ml-auto mr-auto" md="10">
                <div className="services-paragraph">
                    <div>Recommend x2 hives for Durability and beating statistics </div>
                    <h4 className="customer-timeline-title">New Installation:</h4>
                    <ul>
                        <li>
                            Schedule meet n' greet + site walkthrough - answer any additional questions/concerns about the location.
                            <ul>
                            <li>
                                Site access and preferred communication and scheduling
                            </li>
                            <li>
                                Hive Preferences - equipment and # of hives
                            </li>
                            <li>
                                Equipment costs - bottle and harvesting costs
                            </li>
                            <li>
                                Preferred payment and payment options
                            </li>
                            <li>
                                Estimated colony delivery schedule
                            </li>
                            </ul>
                        </li>
                        <li>
                            Jan - Feb - Mar
                            <ul>
                                <li>
                                    Introductions and Hive Location
                                </li>
                                <li>
                                    Property Particulars - Access
                                </li>
                            </ul>
                        </li>
                        <li>
                            Apr - May
                            <ul>
                                <li>
                                    Equipment Set-up
                                </li>
                                <li>
                                    Bee delivery
                                </li>
                                <li>
                                    Weekly inspections recommended through June
                                </li>
                            </ul>
                        </li>
                        <li>
                            Fall - Seasonal Prep and Winterization
                            <ul>
                                <li>
                                    Supplemental feeding
                                </li>
                                <li>
                                    Moisture Quilt
                                </li>
                                <li>
                                    Winter dry sugar
                                </li>
                                <li>
                                    Winter-way entrances
                                </li>
                                <li>
                                    Monthly Inspections
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <h4 className="customer-timeline-title">Estimated Yearly Visits (25-30 Inspections Total):</h4>
                    <ul>
                        <li>
                            Jan - Winter survival checks, OAV Treatment - (x1-2) inspections
                        </li>
                        <li>
                            Feb - dry feeding, spot OAVap - (x1-2) inspections
                        </li>
                        <li>
                            Mar - Move to wet feed, inspections possible, monitor mites - (x2-3) inspections
                        </li>
                        <li>
                            Apr - Beginning of regular inspections, early split/swarm season - (x3+) inspections
                        </li>
                        <li>
                            May - New Nucs’ installed, split/swarm season, monitor mites & Formic - (x3+) inspections
                        </li>
                        <li>
                            Jun - Summer Solstice peak of the year, monitor resources, up-hive splits - (x3+) inspections
                        </li>
                        <li>
                            Jul - Monitor resources and mites, queens and fixes, spot Formic - (x3+) inspections
                        </li>
                        <li>
                            Aug - Late summer resources, queens and fixes, OAVap - (x2-3) inspections
                        </li>
                        <li>
                            Sept - overwinter setup, OAVap - last wet feed - (x2-3) inspections
                        </li>
                        <li>
                            Oct - Winterization, Dry Feed - (x1-2) inspections
                        </li>
                        <li>
                            Nov - Monitor Winterization, Dry Feed - (x1-2) inspections
                        </li>
                        <li>
                            Dec - Monitor Winterization/Survival, OAVap - (x1-2) inspections
                        </li>
                    </ul>
                </div>
            </Col>
        </Row>
        </Container>
      </div>
      <DemoFooter />
    </>
  );
}

export default Beekeeping;
