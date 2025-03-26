import React from "react";
import medical_records from "../medicalRecords";

function Records({ isShow, record, setId, id }) {

  const onNext = () => {
    if (id != medical_records.length) {
      setId(id + 1);
    }
    else {
      setId(1);
    };
  };

  return (isShow &&
    <div className="patient-profile-container" id="profile-view">
      <div className="layout-row justify-content-center">
        <div id="patient-profile" data-testid="patient-profile" className="mx-auto">
          <h4 id="patient-name">{record.data[0].userName}</h4>
          <h5 id="patient-dob">DOB: {record.data[0].userDob}</h5>
          <h5 id="patient-height">Height: {record.data[0].meta.height} cm</h5>
        </div>
        <button className="mt-10 mr-10" data-testid="next-btn" onClick={onNext}>
          Next
        </button>
      </div>

      <table id="patient-records-table">
        <thead id="table-header">
          <tr>
            <th>SL</th>
            <th>Date</th>
            <th>Diagnosis</th>
            <th>Weight</th>
            <th>Doctor</th>
          </tr>
        </thead>
        <tbody id="table-body" data-testid="patient-table">
          {record?.data?.map((data, idx) => (<tr key={idx}>
            <td>{idx+1}</td>
            <td>{new Date(data.timestamp).toLocaleDateString("en-US", {
              month: "2-digit", 
              day: "2-digit", 
              year: "numeric" })}</td>
            <td>{data.diagnosis.name}</td>
            <td>{data.meta.weight}</td>
            <td>{data.doctor.name}</td>
          </tr>))}
        </tbody>
      </table>
    </div>
  );
}

export default Records;