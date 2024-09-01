/* eslint-disable no-unused-vars */
import React from 'react';
import './Home.css';
import Card from './Card'

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="home">
        <div className="overlay">
          <h1>Krishi Dost</h1>
          <p>First friend of a Farmer</p>
        </div>
      </div>

      <div id="services" className="services-header">
        <h2>Our Services</h2>
      </div>
      {/* Card Section */}
      <div className="card-container">
        
        <Card
          image="./Cattle.jpg"
          title="Cattle Service"
          description="Card 1 description goes here."
        />
        <Card
          image="./Crop1.jpg"
          title="Crop Service"
          description="Card 2 description goes here."
        />
      </div>
    </div>
  );
};

export default Home;

