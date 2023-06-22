import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Container, Row, Col, NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MovieGroup = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('http://3.26.113.137:5000/api/addmve')
      .then(response => response.json())
      .then(data => {
        const englishMovies = data.filter(movie => movie.language === 'engmve');
        setMovies(englishMovies);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div style={{ padding: '20px 0' }}>
      <Container>
        <h1>English Movies</h1>
        <Row className='scrolling-wrapper'>
          {movies.map((movie) => (
            <Col key={movie._id} xs={12} sm={6} md={4} lg={3}>
              <Card className="mb-4 custom-card">
                <NavLink eventKey='6' as={Link} to={`/movie/${movie._id}`} >
                  <Card.Img
                    variant="top"
                    src={movie.posterUrl}
                    alt={movie.title}
                    style={{ height: '300px', objectFit: 'cover' }}
                  />
                </NavLink>
                <Card.Body>
                  <Card.Title>{movie.title}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default MovieGroup;
