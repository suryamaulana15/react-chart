import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import RouteWithLayout from './components/RouteWithLayout/RouteWithLayout';
import MainLayout from './hoc/Layout/Main/Main';


import {
  Chart as ChartView
} from './views';

const Routes = () => {

  return (
    <Switch>
      <Redirect
        exact
        from="/"
        to="/chart"
      />
      <RouteWithLayout
        component={ChartView}
        exact
        layout={MainLayout}
        path="/chart"
      />
      <Redirect to="/not-found" />
    </Switch>
  );
};

export default Routes;

