import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import UserInfo from '../userInfo/user-info';

class Main extends Component {
  render () {
    return (
      <div>
        <Switch>
          <Route component={UserInfo} path='/userinfo'/>
        </Switch>
      </div>
    );
  }
}

export default connect(
  state => ({ user: state.user }),
  {}
)(Main);
