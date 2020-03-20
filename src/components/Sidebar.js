import React from 'react';
import SidebarMenu from './SidebarMenu';
import Button from './commons/Button';
import icon from '../assets/images/chevron_left.svg';

function Sidebar(props) {
  return (
    <div
      className='sidebar'
      style={{ marginLeft: `${!props.active ? '-200px' : '0px'} ` }}>
      <SidebarMenu />
      <div>
        <Button onClick={props.onHandleSidebar} icon={icon} />
      </div>
    </div>
  );
}

export default Sidebar;
