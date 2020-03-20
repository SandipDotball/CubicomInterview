import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import leftArrow from '../../assets/images/chevron_left.svg';

export default function SidebarMenuItem(props) {
  return (
    <li className='sidebarMenuItem'>
      {!props.children ? (
        <NavLink
          to={props.to ? props.to : '/'}
          activeClassName={props.activeClassName ? 'active' : ''}
          exact>
          <img src={props.icon} alt={props.name} /> {props.name}
        </NavLink>
      ) : (
        <Fragment>
          <button className='sidebarMenuItem__button'>
            <span>
              <img src={props.icon} alt={props.name} /> {props.name}
            </span>
            <img src={leftArrow} alt='' />
          </button>
          <ul className='sidebarMenu__sub'>
            {React.Children.map(props.children, child => (
              <div className='sidebarMenuItem'>{child}</div>
            ))}
          </ul>
        </Fragment>
      )}
    </li>
  );
}
