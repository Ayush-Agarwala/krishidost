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
    if (cattleId && Object.values(symptoms).every(symptom => symptom !== '')) {
      setResult('Diagnosing...');
      setTimeout(() => {
        setResult(`Cattle ID: ${cattleId} may have a disease related to these symptoms: ${Object.values(symptoms).join(', ')}`);
      }, 1000);
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
          <p>Welcome! Please enter the Cattle ID and select the symptoms.</p>
        </div>

        {/* <div className="cattle-chat-message user">
          <label htmlFor="cattle-id">Cattle ID:</label>
          <input
            type="text"
            id="cattle-id"
            name="cattle-id"
            value={cattleId}
            onChange={(e) => setCattleId(e.target.value)}
            required
          />
        </div> */}

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
              <option value="fever">Fever</option>
              <option value="cough">Cough</option>
              <option value="diarrhea">Diarrhea</option>
              <option value="fatigue">Fatigue</option>
              <option value="loss_of_appetite">Loss of Appetite</option>
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
