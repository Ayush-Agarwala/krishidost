/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './DiseaseInfo.css';

const diseaseImages = {
  mastitis: './mastitis.jpg',
  blackleg: './back-leg.jpg',
  bloat:'./bloat.jpg',
  coccidiosis: './coccidiosis.jpg',
  cryptosporidiosis: './cryptosporidiosis.jpg',
  displaced_abomasum:'./displaced_abomasum.jpg',
  gut_worms:'./gut_worms.jpg',
  listeriosis:'./llisteriosis.png',
  liver_fluke:'./liver_fluke.jpg',
  foot_rot:'./foot_rot.jpg,',
  wooden_tongue:'./wooden_tounge.jpg',
  fatty_liver_syndrome:'./fatty_liver.jpg',
  ragwort_poisoning:'./ragwort.jpg',
  calf_diphtheria:'./calf_diphtheria.jpg',
  lumpy:'./lumpy.jpeg'
}

const diseaseInfo = {
  mastitis: "Mastitis is a common infection of the udder in dairy cows caused by bacteria entering the udder through the teat. Symptoms include swelling, heat, and redness in the udder, along with abnormal milk. Treatment involves antibiotics and proper milking hygiene to prevent recurrence.",
  blackleg: "A bacterial disease that affects young cattle, causing lameness, fever, and swelling in affected muscles. It’s often fatal if not treated early. Vaccination is the primary prevention method.",
  bloat: "A condition where cattle accumulate gas in the rumen, leading to abdominal distension. It’s usually caused by consuming large amounts of lush pasture or certain grains. Treatment involves releasing the gas via a stomach tube or surgery in severe cases.",
  coccidiosis: "A parasitic disease affecting the intestinal tract of cattle, particularly young ones. Symptoms include diarrhea, often with blood, and weight loss. Treatment involves coccidiostats and good hygiene practices to prevent spread.",
  cryptosporidiosis: "A parasitic disease caused by Cryptosporidium affecting the intestines of young calves. It leads to severe diarrhea and dehydration. While there is no specific cure, supportive care, such as hydration and cleanliness, is key.",
  displaced_abomasum: "A condition where the cow’s abomasum (fourth stomach) moves from its normal position, causing digestive issues, decreased appetite, and reduced milk production. Surgery is often required to correct it.",
  gut_worms: "Parasites that live in the stomach and intestines, causing diarrhea, weight loss, and poor growth in cattle. Deworming treatments and pasture management are essential for controlling infestations.",
  listeriosis: "A bacterial infection caused by Listeria monocytogenes, often associated with feeding poor-quality silage. Symptoms include depression, fever, and neurological signs such as circling and head tilt. Antibiotic treatment can be effective if caught early.",
  liver_fluke: "A parasitic disease caused by flatworms in the liver, leading to weight loss, anemia, and poor milk production. Regular fluke treatments and managing wet pasture areas help control this disease.",
  necrotic_enteritis: "A severe bacterial infection affecting the intestines, causing diarrhea and rapid deterioration in health. It's often related to changes in diet or stress. Treatment includes antibiotics and supportive care.",
  peri_weaning_diarrhoea: "A common issue in calves around weaning, often linked to changes in diet and stress. Symptoms include diarrhea and dehydration, and treatment focuses on hydration and nutritional support.",
  rift_valley_fever: "A viral disease transmitted by mosquitoes, causing fever, abortions, and liver damage in cattle. There is no specific treatment, but vaccination helps prevent outbreaks.",
  rumen_acidosis: "Caused by excessive grain feeding, leading to a drop in rumen pH, resulting in digestive upset, diarrhea, and decreased milk production. Managing diet and providing proper roughage can prevent this condition.",
  traumatic_reticulitis: "Also known as 'hardware disease,' occurs when cattle ingest sharp objects like nails, which puncture the stomach lining. Symptoms include reduced appetite and pain. Surgery is often needed to remove the object.",
  calf_diphtheria: "A bacterial infection affecting young calves, causing sores in the mouth and throat, leading to difficulty eating and swallowing. Antibiotics and proper hygiene are crucial for treatment and prevention.",
  foot_rot: "A bacterial infection of the hoof, leading to lameness, swelling, and pain. It’s common in wet, muddy conditions. Treatment involves antibiotics and hoof care.",
  foot_and_mouth: "A highly contagious viral disease that affects cloven-hoofed animals. Symptoms include fever, blisters in the mouth and on the feet, and severe lameness. It spreads quickly, and strict biosecurity measures are needed to control outbreaks.",
  ragwort_poisoning: "Caused by consuming the ragwort plant, which contains toxic alkaloids leading to liver damage. Symptoms include weight loss, jaundice, and photosensitivity. Prevention involves removing ragwort from pastures.",
  wooden_tongue: "A bacterial infection that causes swelling and hardening of the tongue, making it difficult for cattle to eat. Antibiotics are used to treat the infection.",
  infectious_bovine_rhinotracheitis: "A viral respiratory disease causing fever, nasal discharge, coughing, and eye irritation. Vaccination is key for prevention, and antibiotics may be used for secondary bacterial infections.",
  acetonaemia: "A metabolic disorder in dairy cattle, usually occurring in high-producing cows, where there’s a buildup of ketone bodies due to energy imbalances. Symptoms include reduced appetite, weight loss, and decreased milk yield. Treatment involves providing glucose or propylene glycol.",
  fatty_liver_syndrome: "A condition caused by excessive fat accumulation in the liver, often due to poor energy balance in high-producing dairy cows. It leads to reduced appetite and production, and management involves improving nutrition.",
  calf_pneumonia: "A respiratory infection that affects young calves, leading to coughing, fever, and difficulty breathing. Treatment includes antibiotics, and prevention focuses on good ventilation and reducing stress.",
  schmallen_berg_virus: "A viral disease transmitted by midges, causing birth defects and abortions in cattle. There is no specific treatment, but control focuses on managing the vector population and breeding timing.",
  trypanosomosis: "Also known as sleeping sickness, caused by Trypanosoma parasites transmitted by tsetse flies. It leads to fever, anemia, and weight loss. Treatment involves anti-parasitic drugs, and controlling the fly population is essential.",
  fog_fever: "A non-infectious condition caused by cattle grazing on lush pasture, leading to acute respiratory distress. Prevention involves gradual introduction to new pastures and diet management.",
  lumpy:"LSD is a disease of cattle characterised by fever, nodules on the skin, mucous membranes and internal organs, emaciation, enlarged lymph nodes, oedema of the skin, and sometimes death"
};

const DiseaseInfoComponent = () => {
  const [selectedDisease, setSelectedDisease] = useState('');
  const [info, setInfo] = useState('');
  const [imageError, setImageError] = useState(false); // State to track image load error

  const handleInputChange = (e) => {
    const disease = e.target.value;
    setSelectedDisease(disease);
    setInfo(diseaseInfo[disease] || 'No information available for this disease.');
    setImageError(false); // Reset image error when a new disease is selected
  };

  const handleImageError = () => {
    setImageError(true); // Set imageError to true when the image fails to load
  };

  return (
    <div className='disease_info'>
      <div className="disease-info-container">
        <h2>Cattle Disease Information</h2>

        <div className="disease-select">
        <label htmlFor="disease">Select Disease: </label>
        <select id="disease" value={selectedDisease} onChange={handleInputChange}>
        <option value="">-- Select a Disease --</option>
          <option value="mastitis">Mastitis</option>
          <option value="blackleg">Blackleg</option>
          <option value="bloat">Bloat</option>
          <option value="coccidiosis">Coccidiosis</option>
          <option value="cryptosporidiosis">Cryptosporidiosis</option>
          <option value="displaced_abomasum">Displaced Abomasum</option>
          <option value="gut_worms">Gut Worms</option>
          <option value="listeriosis">Listeriosis</option>
          <option value="liver_fluke">Liver Fluke</option>
          <option value="necrotic_enteritis">Necrotic Enteritis</option>
          <option value="peri_weaning_diarrhoea">Peri-Weaning Diarrhoea</option>
          <option value="rift_valley_fever">Rift Valley Fever</option>
          <option value="rumen_acidosis">Rumen Acidosis</option>
          <option value="traumatic_reticulitis">Traumatic Reticulitis</option>
          <option value="calf_diphtheria">Calf Diphtheria</option>
          <option value="foot_rot">Foot Rot</option>
          <option value="foot_and_mouth">Foot and Mouth Disease</option>
          <option value="ragwort_poisoning">Ragwort Poisoning</option>
          <option value="wooden_tongue">Wooden Tongue</option>
          <option value="infectious_bovine_rhinotracheitis">Infectious Bovine Rhinotracheitis</option>
          <option value="acetonaemia">Acetonaemia (Ketosis)</option>
          <option value="fatty_liver_syndrome">Fatty Liver Syndrome</option>
          <option value="calf_pneumonia">Calf Pneumonia</option>
          <option value="schmallen_berg_virus">Schmallenberg Virus</option>
          <option value="trypanosomosis">Trypanosomosis</option>
          <option value="fog_fever">Fog Fever</option>
          <option value="lumpy">Lumpy Skin Disease</option>
          </select>
        </div>

        {info && (
          <div className="disease-details">
            <h3>Disease Information:</h3>
            <p>{info}</p>
            <div className='warn'><p>Warning: Images might be unpleasent! </p></div>
          </div>
        )}
        
        {selectedDisease && (
          <div className="cattle-chat-message">
            <h2>{selectedDisease.replace(/_/g, ' ').toUpperCase()}</h2>
            {imageError ? (
              <p>Internal disease image not available</p> // Fallback message when image fails to load
            ) : (
              <img
                src={`/${diseaseImages[selectedDisease]}`}
                alt={selectedDisease}
                onError={handleImageError} // Trigger when the image fails to load
                style={{ width: '100%', objectFit: 'cover' }}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default DiseaseInfoComponent;