import React from 'react';

function HeaderTitle(props) {
  return (
    <header className={`headerTitle ${props.className ? props.className : ''}`}>
      <h2 className='headerTitle__title'>{props.title}</h2>
      {props.children && (
        <div className='headerTitle__children'>props.children</div>
      )}
    </header>
  );
}

export default HeaderTitle;
