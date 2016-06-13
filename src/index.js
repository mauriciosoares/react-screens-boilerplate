import React, {Component} from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from './configure-store';
import Router from './router';

const store = configureStore();


const Root = () => (
  <Provider store={store}>
    <Router />
  </Provider>
)

render(
  <Root />,
  document.getElementById('app')
);
