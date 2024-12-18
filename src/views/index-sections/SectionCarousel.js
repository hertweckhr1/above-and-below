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
  Card,
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";

// core components

const items = [
  {
    src: require("assets/img/bees/education.jpg"),
    altText: "Education Event",
    // caption: "Education Event",
  },
  {
    src: require("assets/img/bees/bee-wood-header.jpg"),
    altText: "Bees in hive",
    // caption: "Bees in hive",
  },
  {
    src: require("assets/img/carousel/beekeeper-action.jpeg"),
    altText: "Bee Maintenance",
  },
  {
    src: require("assets/img/carousel/bee-flower.jpeg"),
    altText: "Bee on flower",
  },
  {
    src: require("assets/img/carousel/bees-comb.jpeg"),
    altText: "Bees on honeycomb",
  },
  {
    src: require("assets/img/carousel/bee-flower2.jpeg"),
    altText: "Bee on flower",
  },
  {
    src: require("assets/img/carousel/hive.jpeg"),
    altText: "Bees in hive",
  },
  {
    src: require("assets/img/carousel/bee-flower3.jpeg"),
    altText: "Bee on flower",
  },
  {
    src: require("assets/img/carousel/maidenhair.jpeg"),
    altText: "Maidenhair ferns",
  },
  {
    src: require("assets/img/carousel/bee-flower4.jpeg"),
    altText: "Bee on flower",
  },
  {
    src: require("assets/img/carousel/bee-wood.jpeg"),
    altText: "Bee nestling in wood",
  },
  {
    src: require("assets/img/carousel/bee-flower5.jpeg"),
    altText: "Bee on flower",
  },
  {
    src: require("assets/img/bees/bee-upclose.jpg"),
    altText: "Bees in hive",
    // caption: "Bees in hive",
  },
  {
    src: require("assets/img/bees/garden3.jpg"),
    altText: "Garden Project",
    // caption: "Garden Project",
  }
];

function SectionCarousel() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);
  const onExiting = () => {
    setAnimating(true);
  };
  const onExited = () => {
    setAnimating(false);
  };
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };
  return (
    <>
      <div className="section pt-o" id="carousel">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" md="8">
              <Card className="page-carousel">
                <Carousel
                  activeIndex={activeIndex}
                  next={next}
                  previous={previous}
                >
                  <CarouselIndicators
                    items={items}
                    activeIndex={activeIndex}
                    onClickHandler={goToIndex}
                  />
                  {items.map((item) => {
                    return (
                      <CarouselItem
                        onExiting={onExiting}
                        onExited={onExited}
                        key={item.src}
                      >
                        <img src={item.src} alt={item.altText} />
                        <CarouselCaption
                          captionText={item.caption}
                          captionHeader=""
                        />
                      </CarouselItem>
                    );
                  })}
                  <a
                    className="left carousel-control carousel-control-prev"
                    data-slide="prev"
                    href="#pablo"
                    onClick={(e) => {
                      e.preventDefault();
                      previous();
                    }}
                    role="button"
                  >
                    <span className="fa fa-angle-left" />
                    <span className="sr-only">Previous</span>
                  </a>
                  <a
                    className="right carousel-control carousel-control-next"
                    data-slide="next"
                    href="#pablo"
                    onClick={(e) => {
                      e.preventDefault();
                      next();
                    }}
                    role="button"
                  >
                    <span className="fa fa-angle-right" />
                    <span className="sr-only">Next</span>
                  </a>
                </Carousel>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>{" "}
    </>
  );
}

export default SectionCarousel;
