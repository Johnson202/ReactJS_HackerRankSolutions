import React from "react";

function Input({onChange, inputBlog}) {

  return (
    <div className="layout-column justify-content-center align-items-center">
      <input className="w-100" type="text" placeholder="Enter Title" value={inputBlog.title} data-testid="title-input" onChange={onChange}/>
      <textarea className="mt-10 w-100" placeholder="Enter Description" value={inputBlog.description} data-testid="description-input" onChange={onChange}/>
    </div>
  );
};

export default Input;