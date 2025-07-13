import React from 'react';
import Navigation from './components/Navigation';
import Banner from './components/Banner';
import About from './components/About';
import Products from './components/Products';
import Contact from './components/Contact';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Navigation />
      <Banner />
      <About />
      <Products />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;