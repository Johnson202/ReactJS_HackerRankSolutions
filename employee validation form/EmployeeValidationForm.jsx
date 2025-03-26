import React, {useState, useEffect} from "react";

function EmployeeValidationForm() {
  const [inputsValid, setInputsValid] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [employeeId, setEmployeeId] = useState('');
  const [joinDate, setJoinDate] = useState('');
  const [nameError, setNameError] = useState('Name must be at least 4 characters long and only contain letters and spaces');
  const [emailError, setEmailError] = useState('Email must be a valid email address');
  const [employeeIdError, setEmployeeIdError] = useState('Employee ID must be exactly 6 digits');
  const [joinDateError, setJoinDateError] = useState('Joining Date cannot be in the future');

  const verifyInputs = () => {
    if (nameError == '' && emailError == '' && employeeIdError == '' && joinDateError == '') {
      setInputsValid(true);
    };
  };

  const clearInputs = () => {
    setName('');
    setEmail('');
    setEmployeeId('');
    setJoinDate('');
    setInputsValid(false);
  };

  // .error has issue in App.cs
  const myStyle = {
    color: 'red',
    fontSize: '12px'
  };

  useEffect(() => {
      validateName();
  }, [name]); // Runs whenever `name` changes
  useEffect(() => {
    validateEmail();
  }, [email]); // Runs whenever `email` changes
  useEffect(() => {
    validateEmployeeId();
  }, [employeeId]); // Runs whenever `employeeId` changes
  useEffect(() => {
    validateJoinDate();
  }, [joinDate]); // Runs whenever `joinDate` changes

  useEffect(() => {
    verifyInputs();
  }, [nameError, emailError, employeeIdError, joinDateError]);

  const onChangeName = (e) => {
    // store name
    setName(e.target.value);
  };

  const validateName = () => {
    // validate name
    const nameRegex = /^[A-Za-z ]{4,}$/;

    if (!nameRegex.test(name)) {
      setNameError("Name must be at least 4 characters long and only contain letters and spaces");
    } 
    else {
      setNameError("");
    };
  };

  const onChangeEmail = (e) => {
    // store email
    setEmail(e.target.value);
  };

  const validateEmail = () => {
    // validate email
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(email)) {
      setEmailError("Email must be a valid email address");
    } 
    else {
      setEmailError("");
    };
  };

  const onChangeEmployeeId = (e) => {
    // store Employee ID
    setEmployeeId(e.target.value);
  };

  const validateEmployeeId = () => {
    // validate Employee ID
    const employeeIdRegex = /^[0-9]{6,6}$/;

    if (!employeeIdRegex.test(employeeId)) {
      setEmployeeIdError("Employee ID must be exactly 6 digits");
    } 
    else {
      setEmployeeIdError("");
    };
  };

  const onChangeJoinDate = (e) => {
    // store joining date
    setJoinDate(e.target.value);
  };

  const validateJoinDate = () => {
    // validate joining date
    const inputtedDate = new Date(joinDate);
    const today = new Date();

    // Ensure the date is valid (prevents invalid dates like 2024-02-30)
    const [year, month, day] = joinDate.split("-").map(Number);
    const isValidDate = inputtedDate.getFullYear() === year &&
                        inputtedDate.getMonth() + 1 === month &&
                        inputtedDate.getDate() === day;

    if (inputtedDate > today || !isValidDate) {
      setJoinDateError("Joining Date cannot be in the future");
    } 
    else {
      setJoinDateError("");
    };
  };

  return (
    <div className="layout-column align-items-center mt-20 ">
      <div className="layout-column align-items-start mb-10 w-50" data-testid="input-name">
        <input
          className="w-100"
          type="text"
          name="name"
          value={name}
          placeholder="Name"
          onChange = {onChangeName}
          data-testid="input-name-test"
        />
        {nameError && <p className="error mt-2" style={myStyle}>
          {nameError}
        </p>}
      </div>
      <div className="layout-column align-items-start mb-10 w-50" data-testid="input-email">
        <input
          className="w-100"
          type="text"
          name="email"
          value={email}
          placeholder="Email"
          onChange = {onChangeEmail}
        />
        {emailError && <p className="error mt-2" style={myStyle}>{emailError}</p>}
      </div>
      <div className="layout-column align-items-start mb-10 w-50" data-testid="input-employee-id">
        <input
          className="w-100"
          type="text"
          name="employeeId"
          value={employeeId}
          placeholder="Employee ID"
          onChange = {onChangeEmployeeId}
        />
        {employeeIdError && <p className="error mt-2" style={myStyle}>{employeeIdError}</p>}
      </div>
      <div className="layout-column align-items-start mb-10 w-50" data-testid="input-joining-date">
        <input
          className="w-100"
          type="date"
          name="joiningDate"
          value={joinDate}
          placeholder="Joining Date (yyyy-mm-dd)"
          onChange = {onChangeJoinDate}
        />
        {joinDateError && <p className="error mt-2" style={myStyle}>{joinDateError}</p>}
      </div>
      <button data-testid="submit-btn" type="submit" onClick={clearInputs} disabled={!inputsValid}>
        Submit
      </button>
    </div>
  );
}

export default EmployeeValidationForm;