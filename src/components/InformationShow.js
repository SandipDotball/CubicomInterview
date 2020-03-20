import React from 'react';
import InformationCard from './commons/InformationCard';
import informData from '../helpers/informData.json';

function InformationShow(props) {
  return (
    <div className='informationShow'>
      <div className='informationShow__row'>
        {informData && informData.length
          ? informData.map(item => <InformationCard key={item.id} {...item} />)
          : 'No Information found'}
      </div>
    </div>
  );
}

export default InformationShow;
