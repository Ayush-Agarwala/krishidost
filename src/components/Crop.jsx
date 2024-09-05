import React, { useState } from 'react';
import './Crop.css';

const CropRecommendationChatbot = () => {
  const [inputs, setInputs] = useState({
    nitrogen: '',
    phosphorus: '',
    potassium: '',
    temperature: '',
    humidity: '',
    ph: '',
    rainfall: ''
  });
  const [result, setResult] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  const recommendCrops = () => {
    if (Object.values(inputs).every(input => input !== '')) {
      setResult('Processing...');
      setTimeout(() => {
        setResult(`Based on the inputs, the recommended crops are: [crop suggestions here based on NPK, temperature, humidity, pH, and rainfall]`);
      }, 1000);
    } else {
      alert('Please fill in all fields.');
    }
  };

  const resetInputs = () => {
    setInputs({
      nitrogen: '',
      phosphorus: '',
      potassium: '',
      temperature: '',
      humidity: '',
      ph: '',
      rainfall: ''
    });
    setResult('');
  };

  return (
    <div className='crop-main'>
      <div className="crop-chat-container">
        <div className="crop-chat-header">
          <h1>Crop Recommendation</h1>
        </div>
        <div className="crop-chat-body">
          <div className="crop-chat-message bot">
            <p>Welcome! Please enter the following parameters for crop recommendation.</p>
          </div>

          {['nitrogen', 'phosphorus', 'potassium', 'temperature', 'humidity', 'ph', 'rainfall'].map((param, index) => (
            <div className="crop-chat-message user" key={param}>
              <label htmlFor={param}>{`${param.charAt(0).toUpperCase() + param.slice(1)}:`}</label>
              <input
                type="number"
                id={param}
                name={param}
                value={inputs[param]}
                onChange={handleInputChange}
                required
              />
            </div>
          ))}

          <div className="crop-chat-message bot">
            <button type="button" onClick={recommendCrops}>Recommend</button>
            <button type="button" onClick={resetInputs}>Reset</button>
          </div>

          {result && (
            <div className="crop-chat-message bot" id="result">
              {result}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CropRecommendationChatbot;
