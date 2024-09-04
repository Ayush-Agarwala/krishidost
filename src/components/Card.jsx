/* eslint-disable no-unused-vars */
import React from 'react';
import './Card.css';
import { useNavigate } from 'react-router-dom';


// eslint-disable-next-line react/prop-types
const Card = ({ image, title, description,linkToo}) => {

  const navigate = useNavigate();

  const handleClick = () => {
    console.log("Helloo");
    console.log(linkToo);
    if (linkToo) {
      navigate(linkToo);
    }
  };

  return (
    <div className="card" onClick={handleClick}>
      <img src={image} alt={title} className="card-image" />
      <div className="card-overlay">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
