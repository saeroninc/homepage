
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const products = [
  {
    name: 'Precision Gear',
    description: 'High-quality gears for various industrial applications.',
    image: 'https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    name: 'Custom Component',
    description: 'Custom-made components to fit your specific needs.',
    image: 'https://images.pexels.com/photos/431722/pexels-photo-431722.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    name: 'Advanced Sensor',
    description: 'Highly sensitive sensors for accurate measurements.',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];

const Products: React.FC = () => {
  return (
    <section id="products" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-4">Our Products</h2>
        <Row>
          {products.map((product, index) => (
            <Col md={4} key={index} className="mb-4">
              <Card>
                <Card.Img variant="top" src={product.image} />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>{product.description}</Card.Text>
                  <Button variant="primary">Learn More</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Products;
