import React from 'react'
import "./App.css";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

const App = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <Benefits />
        <Testimonials />
        <Contact />

    </div>
  )
}

export default App
