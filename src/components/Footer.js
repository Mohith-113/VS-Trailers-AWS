import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = ({ isLoggedIn }) => {
  return (
    <footer style={{ backgroundColor: 'rgb(1, 108, 118)', color: '#fff', padding: '20px 0' }}>
      <Container>
        <Row>
          <Col>
            <h5>Links:-</h5>
            <ul className="list-unstyled">
              <li><a href="/">Home</a></li>
              <li><a href="/TeluguMovies">Telugu Movies</a></li>
              <li><a href="/EnglishMovies">English Movies</a></li>
              {isLoggedIn ? (
              <>
                <li><a href="/ProfilePage">Profile Page</a></li>
                <li><a href="/Add">Add Movies</a></li>
                
              </>
            ) : (
               // eslint-disable-next-line 
                  <li><a href=""></a></li>
            )}
            </ul>
          </Col>
          <Col>
            <h5>Contact Info:-</h5>
            <h6>Dhanekula Institute of Engineering and technology</h6>
            <p>218T1A0528 - Lakshmi Swetha</p>
            <p>218T1A0567 - Mohith</p>
            <p>218T1A05E3 - Yasaswini Sri</p>
          </Col>
        </Row>
        <Row>
          {/* <Col>
            <p>&copy; {new Date().getFullYear()} VS Trailers. All rights reserved.</p>
          </Col> */}
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
