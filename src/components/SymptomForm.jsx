import React, { useState } from "react";
import { symptomDiseaseMap } from "../data/diseaseData";

const symptomsList = Object.keys(symptomDiseaseMap);

export default function SymptomForm({ onSubmit }) {
  const [selected, setSelected] = useState([]);

  const toggleSymptom = (symptom) => {
    setSelected((prev) =>
      prev.includes(symptom) ? prev.filter(s => s !== symptom) : [...prev, symptom]
    );
  };

  const handleSubmit = () => {
    const allDiseases = selected.flatMap(symptom => symptomDiseaseMap[symptom] || []);
    const uniqueDiseases = [...new Set(allDiseases)];
    onSubmit(uniqueDiseases);
  };

  return (
    <div>
      <h3>Select Symptoms:</h3>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {symptomsList.map(symptom => (
          <button
            key={symptom}
            onClick={() => toggleSymptom(symptom)}
            style={{
              background: selected.includes(symptom) ? "#4caf50" : "#e0e0e0",
              padding: "10px", border: "none", borderRadius: "5px"
            }}
          >
            {symptom}
          </button>
        ))}
      </div>
      <button onClick={handleSubmit} style={{ marginTop: "20px" }}>Check Diseases</button>
    </div>
  );
}
