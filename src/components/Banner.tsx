import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Banner: React.FC = () => {
  const bannerStyle = {
    backgroundImage: `url('https://images.pexels.com/photos/3861959/pexels-photo-3861959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '500px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    textAlign: 'center' as 'center',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)' // Add shadow for readability
  };

  return (
    <div style={bannerStyle}>
      <Container>
        <Row>
          <Col>
            <h1>Precision Engineering for a Better Future</h1>
            <p>We provide high-quality manufacturing solutions for various industries.</p>
            <Button variant="primary" href="#products">Our Products</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;