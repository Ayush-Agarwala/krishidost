/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './Cattle.css';

const CattleDiagnosisChatbot = () => {
  const [cattleId, setCattleId] = useState('');
  const [symptoms, setSymptoms] = useState({
    symptom1: '',
    symptom2: '',
    symptom3: '',
    symptom4: '',
    symptom5: '',
  });
  const [result, setResult] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSymptoms((prevSymptoms) => ({
      ...prevSymptoms,
      [name]: value,
    }));
  };

  const diagnoseDisease = () => {
    if (Object.values(symptoms).every(symptom => symptom !== '')) {
      setResult('Diagnosing...');
      const requestBody = {
        cattleId: cattleId,
        symptoms: symptoms,
      };
  
      fetch('http://localhost:5000/diagnose', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      })
      .then(response => response.json())
      .then(data => {
        setResult(`predicted disease: ${data.predictedDisease}`);
      })
      .catch(error => {
        console.error('Error:', error);
        setResult('An error occurred while diagnosing.');
      });
    } else {
      alert('Please fill in all fields.');
    }
  };
  

  const resetSymptoms = () => {
    setSymptoms({
      symptom1: '',
      symptom2: '',
      symptom3: '',
      symptom4: '',
      symptom5: '',
    });
    setCattleId('');
    setResult('');
  };

  return (
    <div className='cattle-main'>
    <div className="cattle-chat-container">
      <div className="cattle-chat-header">
        <h1>Cattle Disease Diagnosis</h1>
      </div>
      <div className="cattle-chat-body">
        <div className="cattle-chat-message bot">
          <p>Welcome! Please select the symptoms and click Diagnose.</p>
        </div>

        {['symptom1', 'symptom2', 'symptom3', 'symptom4', 'symptom5'].map((symptom, index) => (
          <div className="cattle-chat-message user" key={symptom}>
            <label htmlFor={symptom}>{`Symptom ${index + 1}:`}</label>
            <select
              id={symptom}
              name={symptom}
              value={symptoms[symptom]}
              onChange={handleInputChange}
              required
            >
              <option value="">Select a symptom</option>
              <option value="anorexia">Anorexia</option>
              <option value="lameness">	lameness</option>
              <option value="rapid_breathing">rapid_breathing</option>
              <option value="tachycardia">tachycardia</option>
              <option value="unwillingness_to_move">unwillingness to move</option>
              <option value="depression">depression</option>
              <option value="fever">fever</option>
              <option value="loss_of_appetite">loss_of_appetite</option>
              <option value="milk_flakes">milk_flakes</option>
              <option value="udder_swelling">udder_swelling</option>
            </select>
          </div>
        ))}

        <div className="cattle-chat-message bot">
          <button type="button" onClick={diagnoseDisease}>Diagnose</button>
          <button type="button" onClick={resetSymptoms}>Reset Symptoms</button>
        </div>

        {result && (
          <div className="cattle-chat-message bot" id="result">
            {result}
          </div>
        )}
      </div>
    </div>
    </div>
  );
};

export default CattleDiagnosisChatbot;
