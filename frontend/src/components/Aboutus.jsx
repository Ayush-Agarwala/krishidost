// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Aboutus.css'; // Import external CSS file

const AboutUs = () => {
    return (
        <div className='aboutus'>
            {/* Team Section */}
            <div className="about"><h1>Our Team</h1></div>
            <div className="team">
                <div className="team-member">
                    <img src="ayush.JPG" alt="Person 1" />
                    <h2>AYUSH AGARWALA</h2>
                    <p>FRONTEND DEVELOPER</p>
                    <div className="social-links">
                        <a href="https://www.linkedin.com/in/ayush-agarwala-b7055221a/" target="_blank" rel="noopener noreferrer">
                            <img src="linkedin.png" alt="LinkedIn" className="social-icon" />
                        </a>
                        <a href="https://github.com/Ayush-Agarwala" target="_blank" rel="noopener noreferrer">
                            <img src="github.png" alt="GitHub" className="social-icon" />
                        </a>
                    </div>
                </div>
                <div className="team-member">
                    <img src="aman.jpg" alt="Person 2" />
                    <h2>AMAN HOSSAIN</h2>
                    <p>BACKEND DEVELOPER</p>
                    <div className="social-links">
                        <a href="https://www.linkedin.com/in/aman-hossain-53a893242/" target="_blank" rel="noopener noreferrer">
                            <img src="linkedin.png" alt="LinkedIn" className="social-icon" />
                        </a>
                        <a href="https://github.com/amano2" target="_blank" rel="noopener noreferrer">
                            <img src="github.png" alt="GitHub" className="social-icon" />
                        </a>
                    </div>
                </div>
                <div className="team-member">
                    <img src="ris.jpeg" alt="RISHAV GHATAK" />
                    <h2>RISHAV GHATAK</h2>
                    <p>ML DEVELOPER</p>
                    <div className="social-links">
                        <a href="https://www.linkedin.com/in/rishav-ghatak/ " target="_blank" rel="noopener noreferrer">
                            <img src="linkedin.png" alt="LinkedIn" className="social-icon" />
                        </a>
                        <a href="https://github.com/rishav-gh" target="_blank" rel="noopener noreferrer">
                            <img src="github.png" alt="GitHub" className="social-icon" />
                        </a>
                    </div>
                </div>
                <div className="team-member">
                    <img src="dotted.jpg" alt="Person 4" />
                    <h2>AYUSH DUTTA</h2>
                    <p>DEPLOYMENT ENGINEER</p>
                    <div className="social-links">
                        <a href="https://linkedin.com/in/ayushdutta" target="_blank" rel="noopener noreferrer">
                            <img src="linkedin.png" alt="LinkedIn" className="social-icon" />
                        </a>
                        <a href="https://github.com/ayushdutta" target="_blank" rel="noopener noreferrer">
                            <img src="github.png" alt="GitHub" className="social-icon" />
                        </a>
                    </div>
                </div>
            </div>
            {/* Our Mission Section */}
            <div className="mission-card">
                <h2>Our Mission</h2>
                <p><strong>
                At Pashu Doctor, our mission is to empower farmers and to ensure the health and well-being of 
                their cattle. By providing disease predictions and 
                effective remedies, we aim to reduce livestock losses, improve productivity, and enhance the
                livelihoods of farmers. Through innovation and care, we are committed to creating a future 
                where healthier cattle lead to happier farmers, 
                contributing to sustainable agriculture and rural prosperity.
                </strong></p>
            </div>
            {/* Contact Us Card */}
            <div className="contact-card">
            <h2>Contact Us</h2>
            
            <div className="contact-info-group">
                <div className="contact-info">
                    <img src="mail.png" alt="Mail Icon" className="contact-icon" />
                    <p><strong>pashudr@gmail.com</strong></p>
                </div>
                <div className="contact-info">
                    <img src="call.png" alt="Call Icon" className="contact-icon" />
                    <p><strong>+91-7370864294</strong></p>
                </div>
                <div className="contact-info">
                    <img src="twitter.png" alt="Twitter Icon" className="contact-icon" />
                    <p><strong>@PashuDoctor</strong></p>
                </div>
            </div>
        </div>

        </div>
    );
};

export default AboutUs;
