
import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-5">
      <Container>
        <h2 className="text-center mb-4">Contact Us</h2>
        <Row>
          <Col md={6} className="mb-4">
            <h4>Saeron</h4>
            <p>162-29 Songjeong-ro, Madong-myeon, Hwaseong-si, Gyeonggi-do, Republic of Korea 18540</p>
            <p><strong>Phone:</strong> +82 10-4615-8749</p>
            <p><strong>Email:</strong> saeroninc@gmail.com</p>
          </Col>
          <Col md={6}>
            <Form action="https://formsubmit.co/saeroninc@gmail.com" method="POST">
              <Form.Group className="mb-3" controlId="formGroupName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" name="name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" name="email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Your message" name="message" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
