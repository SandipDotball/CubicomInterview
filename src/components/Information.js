import React from 'react';
import InformationShow from './InformationShow';
import InformationChart from './InformationChart';

function Information(props) {
  return (
    <div className='information'>
      <InformationShow />
      <InformationChart />
    </div>
  );
}

export default Information;
