import React, { useEffect } from "react";
import medical_records from "../medicalRecords";

function Search({ setRecord, setId, id, isShow, setIsShow }) {

  const onSelect = (e) => {
    setId(Number(e.target.value));
  };

  const onShow = () => {
    if (!isShow && id) {
      setIsShow(true);
    }
    else if (!isShow && !id) {
      alert('Please select a patient name');
    };
  };

  useEffect(() => {
    if (id) {
      setRecord({...medical_records[id-1]});
    };
  }, [id]);

  return (
    <div className="layout-row align-items-baseline select-form-container">
      <div className="select">
        <select data-testid="patient-name" defaultValue="0" onChange={onSelect}>
          <option value="0" disabled>
            Select Patient
          </option>
          {medical_records.map((record) => (<option value={record.id} key={record.id}>{record.data[0].userName}</option>))}
        </select>
      </div>

      <button type="submit" data-testid="show" onClick={onShow}>
        Show
      </button>
    </div>
  );
}

export default Search;