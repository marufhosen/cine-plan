import React from "react";
import { Carousel } from "react-bootstrap";
import bannerImg from "../../images/Banner02.jpg";
import bannerImg1 from "../../images/Banner01.jpg";
import bannerImg2 from "../../images/Banner04.jpg";

import "./CarouselBanner.css";

const CarouselBanner = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={bannerImg} alt="First slide" />
          <Carousel.Caption>
            <div className="banner-content">
              <h3>Explore Cinemetric World</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
                quod!
              </p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={bannerImg1} alt="Second slide" />

          <Carousel.Caption>
            <div className="banner-content">
              <h3>Explore Cinemetric World</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
                quod!
              </p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={bannerImg2} alt="Third slide" />

          <Carousel.Caption>
            <div className="banner-content">
              <h3>Explore Cinemetric World</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
                quod!
              </p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselBanner;
