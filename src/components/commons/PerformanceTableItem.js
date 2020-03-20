import React from 'react';
import PercentageDelivery from './PercentageDelivery';

function PerformanceTableItem(props) {
  const percentage = (props.totalorder / 100) * props.delivery;
  return (
    <div
      className={`performanceTableItem__row ${
        props.className ? props.className : ''
      }`}>
      <div className='performanceTableItem performanceTableItem__name'>
        {props.name}
      </div>
      <div className='performanceTableItem'>{props.delivery}</div>
      <div className='performanceTableItem'>{props.undelivery}</div>
      <div className='performanceTableItem'>{props.notdelivery}</div>
      <div className='performanceTableItem performanceTableItem__percentage'>
        <PercentageDelivery percentage={percentage} />
      </div>
    </div>
  );
}

export default PerformanceTableItem;
