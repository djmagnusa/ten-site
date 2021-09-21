import React from 'react'
import "./App.css";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';

const App = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <Benefits />
        <Testimonials />

    </div>
  )
}

export default App
