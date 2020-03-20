import React, { Fragment, useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

const HighOrderLayout = WrappedComponent => {
  const [hideSidebar, setHideSideBar] = useState(true);
  const onHandleSidebar = () => {
    setHideSideBar(false);
  };
  const onHandleHeader = () => {
    setHideSideBar(true);
  };

  useEffect(() => {
    document.body.classList.add('dashboard');

    return () => {
      document.body.classList.remove('dashboard');
    };
  }, []);
  const hocComponent = ({ ...props }) => {
    return (
      <Fragment>
        <Header showMenu={!hideSidebar} onHandleHeader={onHandleHeader} />
        <div className={`highOrderLayout ${hideSidebar ? 'open' : 'hide'}`}>
          <Sidebar onHandleSidebar={onHandleSidebar} active={hideSidebar} />
          <div className='wrapper'>
            <WrappedComponent {...props} />
          </div>
        </div>
      </Fragment>
    );
  };

  return hocComponent;
};

export default HighOrderLayout;
