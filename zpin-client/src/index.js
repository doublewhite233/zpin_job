import React from 'react';
import ReactDOM from 'react-dom';
import FastClick from 'fastclick';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './redux/store';
import Login from './containers/login/login';
import Main from './containers/main/main';

import './assets/css/normalize.css';

FastClick.attach(document.body);

ReactDOM.render((
  <Provider store={store}>
    <HashRouter>
      <Switch>
        <Route component={Login} path='/login' />
        <Route component={Main} /> {/*Default*/}
      </Switch>
    </HashRouter>
  </Provider>
), document.getElementById('root'));
