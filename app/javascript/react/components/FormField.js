import React, { Component } from 'react'

const FormField = props => {

  return(
    <div>
      <label>{props.labelName}</label>
      <input
        type={props.type}
        name={props.value}
        value={props.value}
        onChange={props.handleOnChange}
      />
    </div>
  );
};

export default FormField;
