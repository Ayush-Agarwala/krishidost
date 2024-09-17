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
                </div>
                <div className="team-member">
                    <img src="aman.jpg" alt="Person 2" />
                    <h2>AMAN HOSSAIN</h2>
                    <p>BACKEND DEVELOPER</p>
                </div>
                <div className="team-member">
                    <img src="ris.jpeg" alt="RISHAV GHATAK" />
                    <h2>RISHAV GHATAK</h2>
                    <p>DATA-SCIENCE & ML DEVELOPER</p>
                    {/* <p>email: rishavghatak@gmail.com</p> */}
                </div>
                <div className="team-member">
                    <img src="dotted.jpg" alt="Person 4" />
                    <h2>AYUSH DUTTA</h2>
                    <p>DEPLOYMENT ENGINEER</p>
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
                <p><strong>Phone No:</strong> +91-7370864294</p>
                <p><strong>Email:</strong> pashudr@gmail.com</p>
                <p><strong>X (Twitter):</strong> @PashuDoctor</p>
            </div>
        </div>
    );
};

export default AboutUs;
