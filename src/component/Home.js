import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
function Home() {
  return (
    <Carousel>
    <Carousel.Item >
      <img
        className="d-block w-100"
        src="https://assets.kpmg/is/image/kpmg/hero-carousel-lanterns:cq5dam.web.1082.378"
        alt="First slide"
      />
      <Carousel.Caption style={{top:"30%",textAlign:"left"}}>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://home.kpmg/content/dam/kpmg/au/images/2022/finger-controlling-touch-display-screen.jpg"
        alt="Second slide"
      />

      <Carousel.Caption style={{top:"30%",textAlign:"left"}}>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    
  </Carousel>
  );
}

export default Home;