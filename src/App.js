import React from 'react'
import "./App.css";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Benefits from './components/Benefits';

const App = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <Benefits />
    </div>
  )
}

export default App
