import React from "react";

function Input({ setInputText, inputText }) {

  const onChange = (e) => {
    if (e.target.type == 'text') {
      setInputText((prevState) => {
        const newState = {...prevState};
        newState.title = e.target.value;
        return newState;
      });
      }
    else if (e.target.type == 'textarea') {
      setInputText((prevState) => {
        const newState = {...prevState};
        newState.description = e.target.value;
        return newState;
      });
    };
  };

  return (
    <div className="layout-column justify-content-center align-items-center">
      <input className="w-100" type="text" placeholder="Enter Title" value={inputText.title} data-testid="title-input" onChange={onChange}/>
      <textarea className="mt-10 w-100" placeholder="Enter Description" value={inputText.description} data-testid="description-input" onChange={onChange}/>
    </div>
  );
}

export default Input;