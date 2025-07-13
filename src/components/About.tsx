
import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const About: React.FC = () => {
  return (
    <section id="about" className="py-5">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <h2>About Searon</h2>
            <p>
              Founded in 2024, Searon has been a leader in the manufacturing industry, known for our commitment to quality, innovation, and customer satisfaction. We specialize in creating high-precision components for a wide range of applications.
            </p>
            <p>
              Our state-of-the-art facility and experienced team allow us to deliver exceptional products that meet the highest standards of excellence. We are dedicated to continuous improvement and sustainable practices.
            </p>
          </Col>
          <Col md={6}>
            <Image src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" rounded fluid />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
