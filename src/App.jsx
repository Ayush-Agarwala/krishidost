/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutUs from './components/Aboutus';
// import About from './components/Temp';
// import Pricing from './components/Temp';
import Auth from './components/Auth';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        { <Route path="/about" element={<AboutUs />} />}
        
        {<Route path="/auth" element={<Auth />} /> }
      </Routes>
    </Router>
  );
}

export default App;
