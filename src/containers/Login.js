import React, { useEffect, Fragment } from 'react';
import LoginForm from '../components/LoginForm';
import { useDispatch, useSelector } from 'react-redux';
import { loginAction } from '../actions/authActions';
import { useHistory } from 'react-router-dom';
import BackgroundImage from '../components/commons/BackgroundImage';
import loginbackground from '../assets/images/loginbackground.png';
import Logo from '../components/commons/Logo';

function Login() {
  const dispatch = useDispatch();
  const history = useHistory();
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  const onHandleLogin = value => {
    dispatch(loginAction(value, history));
  };

  useEffect(() => {
    if (isAuthenticated) {
      history.push('/');
    }
  }, [history, isAuthenticated]);

  return (
    <Fragment>
      <BackgroundImage image={loginbackground} />
      <div className='login'>
        <div className='login__wrap'>
          <div className='login__header'>
            <h1>
              Welcome to <Logo />
            </h1>
            <p>We make easy for everyone to manage logistics operations.</p>
          </div>
          <LoginForm onHandleLogin={onHandleLogin} />
        </div>
      </div>
    </Fragment>
  );
}

export default Login;
