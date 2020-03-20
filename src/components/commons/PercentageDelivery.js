import React from 'react';

function PercentageDelivery(props) {
  return (
    <div className='percentageDelivery'>
      <span>{props.percentage}%</span>
      <div className='percentageDelivery__body'>
        <div
          className='percentageDelivery__loader'
          style={{ width: `${props.percentage}%` }}></div>
      </div>
    </div>
  );
}

export default PercentageDelivery;
