import React from "react";

export default function DiseaseResult({ diseases }) {
  return (
    <div>
      <h3>Possible Diseases:</h3>
      <ul>
        {diseases.map((disease, i) => <li key={i}>{disease}</li>)}
      </ul>
    </div>
  );
}
