import React from 'react';
import { Field, reduxForm } from 'redux-form';
import Button from './commons/Button';
import InputField from './commons/InputField';
import { formWarn, formValidator } from '../helpers/formValudation';
import { Link } from 'react-router-dom';
import InputCheckBox from './commons/InputCheckBox';

function LoginForm(props) {
  const { handleSubmit, submitting, onHandleLogin } = props;
  const onHandleSubmit = value => {
    onHandleLogin(value);
  };
  return (
    <form onSubmit={handleSubmit(onHandleSubmit)} className='login__form'>
      <Field
        name='username'
        type='email'
        component={InputField}
        label='Email'
        id='username'
        placeholder='Enter email'
      />
      <Field
        name='password'
        type='password'
        component={InputField}
        label='Password'
        id='password'
        placeholder='Enter password'
      />
      <div className='login__form--extra'>
        <Field
          name='remember'
          id='remember'
          component={InputCheckBox}
          type='checkbox'
          label='Remember me'
        />
        <Link to='/forgetpassword'>Forgot password?</Link>
      </div>
      <div className='login__form--buttons'>
        <Button name='Login' type='submit' disabled={submitting} />
      </div>
    </form>
  );
}

export default reduxForm({
  form: 'loginform',
  validate: formValidator,
  warn: formWarn
})(LoginForm);
