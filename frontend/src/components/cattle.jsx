/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./cattle.css";

const symptomOptions = [
  "anorexia",
  "abdominal_pain",
  "anaemia",
  "abortions",
  "acetone",
  "aggression",
  "arthrogyposis",
  "ankylosis",
  "anxiety",
  "bellowing",
  "blood_loss",
  "blood_poisoning",
  "blisters",
  "colic",
  "Condemnation_of_livers",
  "coughing",
  "depression",
  "discomfort",
  "dyspnea",
  "dysentery",
  "diarrhoea",
  "dehydration",
  "drooling",
  "dull",
  "decreased_fertility",
  "diffculty_breath",
  "emaciation",
  "encephalitis",
  "fever",
  "facial_paralysis",
  "frothing_of_mouth",
  "frothing",
  "gaseous_stomach",
  "highly_diarrhoea",
  "high_pulse_rate",
  "high_temp",
  "high_proportion",
  "hyperaemia",
  "hydrocephalus",
  "isolation_from_herd",
  "infertility",
  "intermittent_fever",
  "jaundice",
  "ketosis",
  "loss_of_appetite",
  "lameness",
  "lack_of-coordination",
  "lethargy",
  "lacrimation",
  "milk_flakes",
  "milk_watery",
  "milk_clots",
  "mild_diarrhoea",
  "moaning",
  "mucosal_lesions",
  "milk_fever",
  "nausea",
  "nasel_discharges",
  "oedema",
  "pain",
  "painful_tongue",
  "pneumonia",
  "photo_sensitization",
  "quivering_lips",
  "reduction_milk_vields",
  "rapid_breathing",
  "rumenstasis",
  "reduced_rumination",
  "reduced_fertility",
  "reduced_fat",
  "reduces_feed_intake",
  "raised_breathing",
  "stomach_pain",
  "salivation",
  "stillbirths",
  "shallow_breathing",
  "swollen_pharyngeal",
  "swelling",
  "saliva",
  "swollen_tongue",
  "tachycardia",
  "torticollis",
  "udder_swelling",
  "udder_heat",
  "udder_hardeness",
  "udder_redness",
  "udder_pain",
  "unwillingness_to_move",
  "ulcers",
  "vomiting",
  "weight_loss",
  "weakness",
];

const CattleDiagnosisChatbot = () => {
  const [cattleId, setCattleId] = useState("");
  const [symptoms, setSymptoms] = useState({
    symptom1: "",
    symptom2: "",
    symptom3: "",
    symptom4: "",
    symptom5: "",
  });
  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSymptoms((prevSymptoms) => ({
      ...prevSymptoms,
      [name]: value,
    }));
  };

  const handleCattleIdChange = (e) => {
    setCattleId(e.target.value);
  };

  const diagnoseDisease = () => {
    if (
      cattleId &&
      Object.values(symptoms).every((symptom) => symptom !== "")
    ) {
      setResult("Diagnosing...");
      setIsLoading(true);
      const requestBody = {
        cattleId: cattleId,
        symptoms: symptoms,
      };
      

      fetch("http://localhost:5000/diagnose", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      })
        .then((response) => response.json())
        .then((data) => {
          setIsLoading(false);
          setResult(`Predicted Disease: ${data.predictedDisease}`);
        })
        .catch((error) => {
          console.error("Error:", error);
          setIsLoading(false);
          setResult("An error occurred while diagnosing.");
        });
    } else {
      alert("Please fill in all fields, including Cattle ID.");
    }
  };

  const resetSymptoms = () => {
    setSymptoms({
      symptom1: "",
      symptom2: "",
      symptom3: "",
      symptom4: "",
      symptom5: "",
    });
    setCattleId("");
    setResult("");
  };

  return (
    <div className="cattle-main">
      <div className="cattle-chat-container">
        <div className="cattle-chat-header">
          <h1>Cattle Disease Diagnosis</h1>
        </div>
        <div className="cattle-chat-body">
          <div className="cattle-chat-message bot">
            <p>
              Welcome! Please enter the Cattle ID, select symptoms(लक्षण), and
              click Diagnose(निदान).
            </p>
          </div>

          <div className="cattle-chat-message user">
            <label htmlFor="cattleId">Cattle ID:</label>
            <input
              type="text"
              id="cattleId"
              name="cattleId"
              value={cattleId}
              onChange={handleCattleIdChange}
              placeholder="Enter Cattle ID"
              required
            />
          </div>

          {["symptom1", "symptom2", "symptom3", "symptom4", "symptom5"].map(
            (symptom, index) => (
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
                  {symptomOptions.map((option) => (
                    <option key={option} value={option}>
                      {option.replace(/_/g, " ")}
                    </option>
                  ))}
                </select>
              </div>
            )
          )}

          <div className="cattle-chat-message bott">
            <div className="cattle-button">
              <button type="button" onClick={diagnoseDisease}>
                Diagnose(निदान)
              </button>
              <button
                style={{
                  backgroundColor: "#f7d7da",
                  color: "#D33A2C",
                  borderRadius: "100px",
                  boxShadow:
                    "rgba(211, 58, 44, 0.2) 0 -25px 18px -14px inset, rgba(211, 58, 44, 0.15) 0 1px 2px, rgba(211, 58, 44, 0.15) 0 2px 4px, rgba(211, 58, 44, 0.15) 0 4px 8px, rgba(211, 58, 44, 0.15) 0 8px 16px, rgba(211, 58, 44, 0.15) 0 16px 32px",
                  padding: "10px 20px",
                  border: "none",
                  cursor: "pointer",
                  transition: "box-shadow 0.3s ease",
                }}
                onMouseEnter={(e) =>
                  (e.target.style.boxShadow =
                    "rgba(211, 58, 44, 0.35) 0 -25px 18px -14px inset, rgba(211, 58, 44, 0.25) 0 1px 2px, rgba(211, 58, 44, 0.25) 0 2px 4px, rgba(211, 58, 44, 0.25) 0 4px 8px, rgba(211, 58, 44, 0.25) 0 8px 16px, rgba(211, 58, 44, 0.25) 0 16px 32px")
                }
                onMouseLeave={(e) =>
                  (e.target.style.boxShadow =
                    "rgba(211, 58, 44, 0.2) 0 -25px 18px -14px inset, rgba(211, 58, 44, 0.15) 0 1px 2px, rgba(211, 58, 44, 0.15) 0 2px 4px, rgba(211, 58, 44, 0.15) 0 4px 8px, rgba(211, 58, 44, 0.15) 0 8px 16px, rgba(211, 58, 44, 0.15) 0 16px 32px")
                }
                type="button"
                onClick={resetSymptoms}
              >
                Reset Symptoms(फिर से भरें)
              </button>
            </div>
          </div>

          <div className="cattle-chat-message bot" id="result">
            {isLoading ? (
              <div className="loading-container">
                <img
                  src="./running-cow.gif"
                  alt="Loading..."
                  className="loading-gif"
                />
                <p className="loading-text">Diagnosing...</p>
              </div>
            ) : (
              result && <div>{result}</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CattleDiagnosisChatbot;
