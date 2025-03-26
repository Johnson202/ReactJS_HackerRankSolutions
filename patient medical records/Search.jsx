import React from "react";
import medical_records from "../medicalRecords";

function Search({ setRecord, setId, id }) {

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!id) {
      alert('Please select a patient name');
    }
    else {
      const patientRecord = medical_records.find((rec) => rec.id == id);
      setRecord(patientRecord || null);
    };
  };

  return (
    <div className="layout-row align-items-baseline select-form-container">
      <div className="select">
        <select data-testid="patient-name" defaultValue="0" onChange={(e) => setId(e.target.value)}>
          <option value="0" disabled>
            Select Patient
          </option>
          {medical_records.map((record, index) => {
            // Extract patient details
            const { userId, userName } = record.data[0];
            return (
              <option key={index} value={userId}>
                {userName}
              </option>
            );
          })}
        </select>
      </div>

      <button type="submit" data-testid="show" onClick={handleSubmit}>
        Show
      </button>
    </div>
  );
};

export default Search;