import React from 'react';

function BackgroundImage(props) {
  return (
    <div
      className={`backgroundImage ${props.className ? props.className : ''}`}
      style={
        props.image && {
          backgroundImage: `url(${props.image})`
        }
      }
    />
  );
}

export default BackgroundImage;
