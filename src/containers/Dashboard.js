import React from 'react';
import { logoutAction } from '../actions/authActions';
import { useDispatch } from 'react-redux';
import HeaderTitle from '../components/commons/HeaderTitle';
import Information from '../components/Information';
import PerformanceTable from '../components/PerformanceTable';

function Dashboard(props) {
  const dispatch = useDispatch();
  const onHandleLogOut = () => {
    dispatch(logoutAction());
  };
  return (
    <div className='dashboard'>
      <HeaderTitle title='Dashboard' />
      <Information />
      <HeaderTitle title='FE Performance' />
      <PerformanceTable />
    </div>
  );
}

export default Dashboard;
