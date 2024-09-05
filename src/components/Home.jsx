import React, { useState } from 'react';
import './Home.css';
import Card from './Card';

const translations = {
  en: {
    title: "Krishi Dost",
    description: "Friend for every Farmer",
    ourservices:"Our Services",
    cattleService: "Cattle Service",
    cropService: "Crop Service",
    cdisc:"Click here for cattle healthcare",
    cropdis:"Click here for crop service"
  },
  hi: {
    title: "कृषि दोस्त",
    description: "हर किसान के लिए मित्र",
    ourservices:"हमारी सेवाएँ",
    cattleService: "पशु सेवा",
    cropService: "फसल सेवा",
    cdisc:"मवेशियों के स्वास्थ्य सेवा के लिए यहां क्लिक करें",
    cropdis:"फसल सेवा के लिए यहां क्लिक करें",
  },
};

const Home = () => {
  const [language, setLanguage] = useState('en'); // default language is English

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="home">
        <div className="overlay">
          <h1>{translations[language].title}</h1>
          <p>{translations[language].description}</p>
        </div>
      </div>

      <div id="services" className="services-header">
        <h2>{translations[language].ourservices}</h2>
      </div>

      {/* Card Section */}
      <div className="card-container">
        <Card
          image="./Cattle.jpg"
          title={translations[language].cattleService}
          description={translations[language].cdisc}
          linkToo="/cattle"
        />
        <Card
          image="./Crop1.jpg"
          title={translations[language].cropService}
          description={translations[language].cropdis}
          linkToo="/crop"
        />
      </div>
      {/* Language Switch Buttons */}
      <div class="lang">
        <button class="hindi" onClick={() => changeLanguage('en')}>English</button>
        <button class="hindi" onClick={() => changeLanguage('hi')}>हिंदी</button>
      </div>
    </div>
  );
};

export default Home;
