import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import UserInfo from '../userInfo/user-info';
import TopBar from '../../components/topBar/top-bar';

class Main extends Component {
  render () {
    return (
      <div>
        <TopBar isBack={true} title='aaa' history={this.props.history}/>
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
