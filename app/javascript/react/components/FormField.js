import React, { Component } from 'react'

const FormField = props => {
  return(
    <div>
      <label className="form-label">{props.label}</label>
      <input
        className={`form-field ${props.name}`}
        type={props.type}
        name={props.name}
        value={props.value}
        onChange={props.handleOnChange}
      />
    </div>
  );
};

export default FormField;
