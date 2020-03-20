import React from 'react';
import dashboardIcon from '../assets/images/dashboard.svg';
import operationsIcon from '../assets/images/operations.svg';
import trackingIcon from '../assets/images/tracking.svg';
import reportsIcon from '../assets/images/reports.svg';
import configurationsIcon from '../assets/images/configurations.svg';
import SidebarMenuItem from './commons/SidebarMenuItem';

function SidebarMenu() {
  return (
    <ul className='sidebarMenu'>
      <SidebarMenuItem
        name='Dashboard'
        icon={dashboardIcon}
        to='/'
        activeClassName={true}
      />
      <SidebarMenuItem name='Operations' icon={operationsIcon}>
        <SidebarMenuItem
          name='Tracking'
          icon={trackingIcon}
          to='/operations'
          activeClassName={true}
        />
      </SidebarMenuItem>
      <SidebarMenuItem
        name='Tracking'
        icon={trackingIcon}
        to='/tracking'
        activeClassName={true}
      />
      <SidebarMenuItem
        name='Reports'
        icon={reportsIcon}
        to='/reports'
        activeClassName={true}
      />
      <SidebarMenuItem
        name='Configurations'
        icon={configurationsIcon}
        to='/configurations'
        activeClassName={true}
      />
    </ul>
  );
}

export default SidebarMenu;
