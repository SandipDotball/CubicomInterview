import React from 'react';

function InputField({
  input,
  label,
  type,
  id,
  placeholder,
  meta: { touched, error, warning }
}) {
  return (
    <div className='form__field'>
      <label htmlFor={id}>{label}</label>
      <input
        {...input}
        placeholder={placeholder}
        type={type}
        className='form__field--input'
      />

      {touched &&
        ((error && <span className='form__field--error'>{error}</span>) ||
          (warning && <span className='form__field--warning'>{warning}</span>))}
    </div>
  );
}

export default InputField;
