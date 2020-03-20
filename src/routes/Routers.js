import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import HighOrderLayout from '../containers/HighOrderLayout';
import Loader from '../components/commons/Loader';
const Login = lazy(() => import('../containers/Login'));
const Dashboard = lazy(() => import('../containers/Dashboard'));
const Tracking = lazy(() => import('../containers/Tracking'));
const Reports = lazy(() => import('../containers/Reports'));
const Configurations = lazy(() => import('../containers/Configurations'));

function Routers() {
  return (
    <Switch>
      <Suspense fallback={<Loader />}>
        <Route exact path='/login' component={Login} />
        <PrivateRoute exact path='/' comp={HighOrderLayout(Dashboard)} />
        <PrivateRoute
          exact
          path='/operations'
          comp={HighOrderLayout(Dashboard)}
        />
        <PrivateRoute exact path='/tracking' comp={HighOrderLayout(Tracking)} />
        <PrivateRoute exact path='/reports' comp={HighOrderLayout(Reports)} />
        <PrivateRoute
          exact
          path='/configurations'
          comp={HighOrderLayout(Configurations)}
        />
      </Suspense>
    </Switch>
  );
}

export default Routers;
