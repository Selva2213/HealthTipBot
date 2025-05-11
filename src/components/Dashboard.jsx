import React, { useState } from "react";

const symptomsData = {
        Fever: ["Flu", "COVID-19", "Malaria", "Typhoid", "Dengue"],
        Cold: ["Common Cold", "Flu", "Allergic Rhinitis"],
        Cough: ["Bronchitis", "COVID-19", "Asthma", "Pneumonia"],
        Headache: ["Migraine", "Flu", "Tension Headache", "Sinusitis"],
        Fatigue: ["Anemia", "Hypothyroidism", "Diabetes", "Depression"],
        Nausea: ["Food Poisoning", "Pregnancy", "Stomach Flu", "Ulcer"],
        Vomiting: ["Food Poisoning", "Gastritis", "Migraine", "Appendicitis"],
        Rash: ["Allergy", "Chickenpox", "Measles", "Eczema"],
        JointPain: ["Arthritis", "Lupus", "Dengue", "Lyme Disease"],
        ShortnessOfBreath: ["Asthma", "COPD", "COVID-19", "Heart Failure"],
        ChestPain: ["Heart Attack", "Angina", "Panic Attack", "GERD"],
        Diarrhea: ["Cholera", "IBS", "Food Poisoning", "Gastroenteritis"],
        Constipation: ["IBS", "Dehydration", "Hypothyroidism", "Low Fiber Diet"],
        Dizziness: ["Vertigo", "Anemia", "Dehydration", "Low Blood Pressure"],
        SoreThroat: ["Strep Throat", "Common Cold", "Tonsillitis", "Flu"]
      };

function Dashboard() {
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const allSymptoms = Object.keys(symptomsData);

  const toggleSymptom = (symptom) => {
    setSelectedSymptoms((prev) =>
      prev.includes(symptom) ? prev.filter((s) => s !== symptom) : [...prev, symptom]
    );
  };

  const matchedDiseases = () => {
    const allDiseases = selectedSymptoms.flatMap((s) => symptomsData[s]);
    return [...new Set(allDiseases)];
  };

  return (
    <div className="dashboard-container">
      <h2>Select Your Symptoms</h2>
      <div className="symptom-buttons">
        {allSymptoms.map((symptom) => (<>
          <button
            key={symptom}
            className={selectedSymptoms.includes(symptom) ? "active" : ""}
            onClick={() => toggleSymptom(symptom)}
          >
            {symptom}
          </button></>
        ))}
      </div>
      <h3>Possible Diseases:</h3>
      <ul>
        {matchedDiseases().map((disease, index) => (
          <li key={index}>{disease}</li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;
