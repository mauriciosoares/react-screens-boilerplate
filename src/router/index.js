import React from 'react';
import {Router, Route, Redirect, hashHistory} from 'react-router';
import routes from './routes';

const AppRouter = () => (
  <Router history={hashHistory}>
    {routes}
  </Router>
);

export default AppRouter;
