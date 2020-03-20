import React from 'react';
import PerformanceHeader from './commons/PerformanceHeader';
import PerformanceTableBody from './commons/PerformanceTableBody';
import performanceData from '../helpers/performaceData.json';
import PerformanceButtons from './PerformanceButtons';

function PerformanceTable() {
  return (
    <div className='performanceTable'>
      <PerformanceHeader />
      <PerformanceTableBody data={performanceData} />
      <PerformanceButtons />
    </div>
  );
}

export default PerformanceTable;
