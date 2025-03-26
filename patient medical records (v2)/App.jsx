import React, { useState } from "react";
import "./App.css";
import "h8k-components";
import Search from "./components/Search";
import Records from "./components/Records";
import medical_records from "./medicalRecords";


const title = "Patient Medical Records";

const App = () => {

  const [record, setRecord] = useState(null);
  const [id, setId] = useState(null);
  const [isShow, setIsShow] = useState(false);

  return (
    <div className="App">
      <h8k-navbar header={title}></h8k-navbar>
      <div className="content">
        <Search setId={setId} setRecord={setRecord} id={id} isShow={isShow} setIsShow={setIsShow}/>
        <Records isShow={isShow} record={record} setId={setId} id={id} setRecord={setRecord}/>
      </div>
    </div>
  );
};

export default App;