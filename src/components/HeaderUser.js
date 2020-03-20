import React from 'react';
import Avatar from './commons/Avatar';
import { Link } from 'react-router-dom';
import LocationDropdown from './commons/LocationDropdown';

function HeaderUser(props) {
  return (
    <div className='header__user'>
      <LocationDropdown />
      <Link to='/profile'>
        <Avatar image={props.image} name={props.name} />
      </Link>
    </div>
  );
}

export default HeaderUser;
