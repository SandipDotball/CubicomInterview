import React from 'react';
import iconBooking from '../../assets/images/icon_booking.svg';

function InformationCard(props) {
  const imageIcon = {};
  return (
    <div className='informationCard'>
      <div className='informationCard__body'>
        <span className='informationCard__icon'>
          <img src={iconBooking} alt='' />
        </span>
        {props.count && (
          <h2 className='informationCard__count'>{props.count}</h2>
        )}

        <div className='informationCard__info'>
          {props.name && <h4>{props.name}</h4>}
          {props.description && <p>{props.description}</p>}
        </div>
      </div>
    </div>
  );
}

export default InformationCard;
