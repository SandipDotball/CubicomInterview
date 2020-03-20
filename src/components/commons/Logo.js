import React from 'react';
import logo from '../../assets/images/logo.svg';
import { Link } from 'react-router-dom';
function Logo() {
  return (
    <Link to='/' className='logo'>
      <img src={logo} alt='' />
    </Link>
  );
}

export default Logo;
