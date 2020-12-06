import React, { Component } from 'react';
import { WingBlank, WhiteSpace, InputItem, Button, Tabs, Picker, List, Toast } from 'antd-mobile';
import { createForm } from 'rc-form';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import LoginContainer from '../../components/loginContainer/login-container.jsx';
import { register, login } from '../../redux/actions';

import './login.less';

const tabs = [
  { title: '登录', sub: 'login' },
  { title: '注册', sub: 'register' }
];
const types = [
  { label: '求职者', value: 'seeker' },
  { label: 'BOSS', value: 'boss' }
];

class Login extends Component {
  state = {
    username: '',
    password: '',
    passwordCon: '',
    usertype: [ 'seeker' ]
  }

  handleLogin = () => {
    new Promise((resolve) => {
      resolve(this.props.login(this.state));
    }).then(() => {
      if (this.props.user.msg) {
        Toast.fail(this.props.user.msg, 1);
      }
    });
  }

  handleRegister = () => {
    new Promise((resolve) => {
      resolve(this.props.register(this.state));
    }).then(() => {
      if (this.props.user.msg) {
        Toast.fail(this.props.user.msg, 1);
      }
    });
  }

  handleChange = (name, val) => {
    this.setState({
      [name]: val
    });
  }

  handleClear = () => {
    this.setState({
      username: '',
      password: '',
      passwordCon: '',
      usertype: [ 'seeker' ]
    });
  }

  render () {
    const { getFieldProps } = this.props.form;
    const { redirectTo } = this.props.user;
    // have value, redirect
    if (redirectTo) {
      return <Redirect to={redirectTo} />;
    }
    return (
      <div>
        <LoginContainer />
        <div className='login'>
          <Tabs onTabClick={() => { this.handleClear(); }} tabBarTextStyle={{ fontSize:'17px' }} tabs={tabs}>
            <WingBlank>
              <WhiteSpace />
              <InputItem onChange={val => { this.handleChange('username', val); }} placeholder='请输入用户名' value={this.state.username}>用户名：</InputItem>
              <WhiteSpace />
              <InputItem onChange={val => { this.handleChange('password', val); }} placeholder='请输入密码' type='password' value={this.state.password}>密码：</InputItem>
              <WhiteSpace />
              <Button onClick={this.handleLogin} type='primary'>登录</Button>
              <WhiteSpace />
            </WingBlank>

            <WingBlank>
              <WhiteSpace />
              <InputItem onChange={val => { this.handleChange('username', val); }} placeholder='请输入用户名' value={this.state.username}>用户名：</InputItem>
              <WhiteSpace />
              <InputItem onChange={val => { this.handleChange('password', val); }} placeholder='请输入密码' type='password' value={this.state.password}>密码：</InputItem>
              <WhiteSpace />
              <InputItem onChange={val => { this.handleChange('passwordCon', val); }} placeholder='请确认密码' type='password' value={this.state.passwordCon}>确认密码：</InputItem>
              <WhiteSpace />
              <Picker
                  cols={1}
                  data={types}
                  extra="请选择"
                  onOk={val => { this.handleChange('usertype', val); }}
                  title="用户类型"
                  {...getFieldProps(this.state.usertype,{ initialValue: this.state.usertype })}
              >
                <List.Item arrow="horizontal">用户类型：</List.Item>
              </Picker>
              <WhiteSpace />
              <Button onClick={this.handleRegister} type='primary'>注册</Button>
              <WhiteSpace />
            </WingBlank>
          </Tabs>
        </div>
      </div>
    );
  }
}

const TestWrapper = createForm()(Login);
export default connect(
  state => ({ user: state.user }),
  { register, login }
)(TestWrapper);
