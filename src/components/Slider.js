import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';

const Slider = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch('http://3.26.113.137:5000/api/addmve')
      .then(response => response.json())
      .then(data => {
        const randomImages = getRandomImages(data, 4);
        setImages(randomImages);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const getRandomImages = (arr, count) => {
    const shuffled = arr.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  return (
    <Carousel style={{ height: '70vh', width: '100vw' }}>
      <Carousel.Item >
          <img
            className="d-block w-100"
            src='https://res.cloudinary.com/djvcyin2i/image/upload/v1686922770/VS_nhqzb0.png'
            alt='Logo'
            style={{ height: '70vh' }}
          />
        </Carousel.Item>
      {images.map(movie => (
        <Carousel.Item key={movie._id}>
          <img
            className="d-block w-100"
            src={movie.flexiUrl}
            alt={movie.altText}
            style={{ height: '70vh' }}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Slider;
