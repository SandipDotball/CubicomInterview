import React from 'react';

function InputCheckBox({ input, label, type, id, placeholder }) {
  return (
    <div className='form__field--checkbox'>
      <input {...input} type={type} id={id} className='form__field--check' />
      <label htmlFor={id}>{label}</label>
    </div>
  );
}

export default InputCheckBox;
