/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Link,useLocation,useNavigate } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './Navbar.css';

const Navbar = ({ loggedInUsername }) => {

  const location = useLocation();
  const navigate = useNavigate();

  const handleServicesClick = (e) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      // If the user is not on the home page, navigate to home first
      navigate('/');
      setTimeout(() => {
        window.location.href = '#services'; // then scroll to #services
      }, 100); // Short delay to ensure the navigation occurs
    } else {
      // If the user is already on the home page, scroll to #services
      window.location.href = '#services';
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src='./pd-logo-removebg-preview.png' alt="Logo" />
        </Link>
      </div>
      <div className="navbar-links">
        <Link className={location.pathname === '/' ? 'active' : ''} to="/">Home</Link>
        <Link className={location.pathname === '/about' ? 'active' : ''} to="/about">About Us</Link>
        <a href="#services" className={location.hash === '#services' ? 'active' : ''} onClick={handleServicesClick}>
          Services
        </a>
        {loggedInUsername ? (
          <Link to="/dash" className={location.pathname === '/dash' ? 'active' : ''}>Welcome, {loggedInUsername}!</Link>
        ) : (
          <Link to="/auth" className={location.pathname === '/auth' ? 'active' : ''}>Login/Sign Up</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

