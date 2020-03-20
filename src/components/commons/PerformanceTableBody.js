import React from 'react';
import PerformanceTableItem from './PerformanceTableItem';

function PerformanceTableBody(props) {
  return (
    <div className='performanceTableBody'>
      {props.data && props.data.length
        ? props.data.map(item => (
            <PerformanceTableItem {...item} key={item.id} />
          ))
        : 'No Data Found'}
    </div>
  );
}

export default PerformanceTableBody;
