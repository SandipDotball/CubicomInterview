import React from 'react';
import Button from './commons/Button';
import icon from '../assets/images/chevron_left.svg';

function PerformanceButtons() {
  return (
    <div className='performanceButtons'>
      <ul className='performanceButtons__pagination'>
        <li className='performanceButtons__pagination--item'>
          <Button icon={icon} />
        </li>
        <li className='performanceButtons__pagination--item'>
          <Button name='1' />
        </li>
        <li className='performanceButtons__pagination--item'>
          <Button name='2' />
        </li>
        <li className='performanceButtons__pagination--item'>
          <Button name='3' />
        </li>
        <li className='performanceButtons__pagination--item'>
          <Button name='4' />
        </li>
        <li className='performanceButtons__pagination--item'>
          <Button name='5' />
        </li>
        <li className='performanceButtons__pagination--item reverse-icon'>
          <Button icon={icon} />
        </li>
      </ul>
    </div>
  );
}

export default PerformanceButtons;
