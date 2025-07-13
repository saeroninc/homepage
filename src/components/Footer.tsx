
import React from 'react';
import { Container } from 'react-bootstrap';

const Footer: React.FC = () => {
  return (
    <footer className="py-4 bg-dark text-white text-center">
      <Container>
        <p>&copy; {new Date().getFullYear()} Searon. All Rights Reserved.</p>
      </Container>
    </footer>
  );
};

export default Footer;
