import React from 'react';

function Avatar(props) {
  return (
    <div className='avatar'>
      {props.image ? <img src={props.image} alt={props.name} /> : props.name}
    </div>
  );
}

export default Avatar;
