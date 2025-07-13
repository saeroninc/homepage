
import React from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';

const Banner: React.FC = () => {
  const bannerStyle = {
    backgroundColor: '#f8f9fa', // Light gray background
    padding: '80px 0',
    textAlign: 'left' as 'left',
  };

  return (
    <div style={bannerStyle}>
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <h1 className="display-4">Precision Engineering for a Better Future</h1>
            <p className="lead">
              We provide high-quality manufacturing solutions for various industries.
            </p>
            <Button variant="primary" size="lg" href="#products">Our Products</Button>
          </Col>
          <Col md={6}>
            <Image src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" fluid rounded />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
