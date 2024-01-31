import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Demo from './components/Demo';
import Footer from './components/Footer';
//import Slider from './components/Slider/Slider';


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Gallery />
      {/* <Slider /> */}
      <Testimonials />
      <Demo />
      <Footer />
    </div>
  );
}

export default App;