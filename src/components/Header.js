import React from 'react';
import Logo from './commons/Logo';
import HeaderUser from './HeaderUser';
import Button from './commons/Button';
import icon from '../assets/images/chevron_left.svg';

function Header(props) {
  return (
    <div className='header'>
      <div className='container'>
        <div className='header__withIcon'>
          {props.showMenu && (
            <Button
              icon={icon}
              onClick={props.onHandleHeader}
              className='button__sidebar'
            />
          )}
          <Logo />
        </div>
        <HeaderUser
          image='https://pixinvent.com/materialize-material-design-admin-template/app-assets/images/user/12.jpg'
          name='Name'
        />
      </div>
    </div>
  );
}

export default Header;
