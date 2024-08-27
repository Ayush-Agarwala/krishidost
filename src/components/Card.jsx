/* eslint-disable no-unused-vars */
import React from 'react';
import './Card.css';

// eslint-disable-next-line react/prop-types
const Card = ({ image, title, description }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-overlay">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
