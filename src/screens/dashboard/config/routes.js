import React from 'react';
import {Route} from 'react-router';
import getPath from 'shared/router/get-path';
import Dashboard from '../';

export default (
  <Route
    key="dashboard"
    path={getPath('root')}
    component={Dashboard} />
);
