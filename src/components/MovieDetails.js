import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import './yasaswini/Blocks.css';

const MovieDetails = () => {
  const { id } = useParams();

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('http://3.26.113.137:5000/api/addmve')
      .then(response => response.json())
      .then(data => {
        const MovieDetail = data.filter(movie => movie._id === `${id}`);
        setMovies(MovieDetail);
      })
      .catch(error => {
        console.log(error);
      });
  }, [id]);

  const handlePlayVideo = () => {
    const videoUrl = movies.length > 0 ? movies[0].videoUrl : '';
    if (videoUrl) {
      window.open(videoUrl, '_blank');
    }
  };

  return (
    <div>
      {movies.map(movie => (
        <Container className="vid" key={movie._id}>
          <Row className="justify-content-left">
            <Col xs={12} md={8}>
              <div className="image-container">
                <img src={movie.flexiUrl} alt="Movie" className="image" />
                <div className="overlay">
                  <button className="play-button" onClick={handlePlayVideo}>
                    Play
                  </button>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="btm justify-content-center">
            <div className="div4">
              <div className="div5">
                <p className="para1">Premium</p>
                <p className="para1">U/A</p>
                <p className="para1">16+</p>
              </div>
              <h2 className="hd1">{movie.title}</h2>
              <p className="para3">{movie.description}</p>
              <br />
              <br />
              <br />
              <hr />
            </div>
          </Row>
        </Container>
      ))}
    </div>
  );
};

export default MovieDetails;
