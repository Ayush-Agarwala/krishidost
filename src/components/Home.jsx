import React, { useState } from 'react';
import './Home.css';
import Card from './Card';

const translations = {
  en: {
    title: "Pashu Doctor",
    description: "Healthier Cattle, Happier Farmers",
    ourservices:"Our Services",
    cattleService: "Cattle Service",
    cropService: "Disease Info",
    cdisc:"Click here for cattle healthcare",
    cropdis:"Click to know more about the disease"
  },
  hi: {
    title: "पशु डॉक्टर",
    description: "स्वस्थ पशु, खुशहाल किसान",
    ourservices:"हमारी सेवाएँ",
    cattleService: "पशु सेवा",
    cropService: "रोग की जानकारी",
    cdisc:"मवेशियों के स्वास्थ्य सेवा के लिए यहां क्लिक करें",
    cropdis:"रोग के बारे में अधिक जानने के लिए क्लिक करें",
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
          image="./disease2.jpg"
          title={translations[language].cropService}
          description={translations[language].cropdis}
          linkToo="/diseaseinfo"
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
