import React from 'react';
import { Carousel } from 'react-bootstrap';
import './CarouselComponent.css'; // Make sure to create and import this CSS file

const items = [
  {
    title: 'Slide 1',
    description: 'Description for Slide 1',
    image: '../image/bg2.jpg',
  },
  {
    title: 'Slide 2',
    description: 'Description for Slide 2',
    image: '../image/bg2.jpg',
  },
  // {
  //   title: 'Slide 3',
  //   description: 'Description for Slide 3',
  //   image: '../image/bg2.jpg',
  // },
];

const CarouselComponent = () => {
  return (
    <Carousel fade interval={3000} controls={false}>
      {items.map((item, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100 carousel-image"
            src={item.image}
            alt={item.title}
          />
          <Carousel.Caption className="carousel-caption">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;
