import React from 'react';

function Button(props) {
  return (
    <button
      className={`button ${props.className ? props.className : ''}`}
      onClick={props.onClick}
      type={props.type ? props.type : 'button'}
      disabled={props.disabled ? props.disabled : false}>
      {props.icon ? <img src={props.icon} alt='' /> : null}
      {props.name}
    </button>
  );
}

export default Button;
