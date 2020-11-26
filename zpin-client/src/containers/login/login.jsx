import React, { Component } from 'react';
import { WingBlank, WhiteSpace, InputItem, Button, Tabs, Picker, List } from 'antd-mobile';
import { createForm } from 'rc-form';

import LoginContainer from '../../components/loginContainer/loginContainer.jsx';

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
    usertype: 'seeker'
  }

  handleLogin = () => {
    console.log(this.state);
  }

  handleRegister = () => {
    console.log(this.state);
  }

  handleChange = (name, val) => {
    if (typeof (val) === 'object') {
      val = val[0];
    }
    this.setState({
      [name]: val
    });
  }

  handleClear = () => {
    this.setState({
      username: '',
      password: '',
      passwordCon: '',
      usertype: 'seeker'
    });
  }

  render () {
    const { getFieldProps } = this.props.form;
    return (
      <div>
        <LoginContainer />
        <div className='login'>
          <Tabs onTabClick={() => {this.handleClear();}} tabBarTextStyle={{ fontSize:'17px' }} tabs={tabs}>
            <WingBlank>
              <WhiteSpace />
              <InputItem onChange={val => {this.handleChange('username', val);}} placeholder='请输入用户名'>用户名：</InputItem>
              <WhiteSpace />
              <InputItem onChange={val => {this.handleChange('password', val);}} placeholder='请输入密码' type='password'>密码：</InputItem>
              <WhiteSpace />
              <Button onClick={this.handleLogin} type='primary'>登录</Button>
              <WhiteSpace />
            </WingBlank>

            <WingBlank>
              <WhiteSpace />
              <InputItem onChange={val => {this.handleChange('username', val);}} placeholder='请输入用户名'>用户名：</InputItem>
              <WhiteSpace />
              <InputItem onChange={val => {this.handleChange('password', val);}} placeholder='请输入密码' type='password'>密码：</InputItem>
              <WhiteSpace />
              <InputItem onChange={val => {this.handleChange('passwordCon', val);}} placeholder='请确认密码' type='password'>确认密码：</InputItem>
              <WhiteSpace />
              <Picker
                  cols={1}
                  data={types}
                  extra="请选择"
                  onOk={val => {this.handleChange('usertype', val);}}
                  title="用户类型"
                  {...getFieldProps('seeker',{ initialValue: [ 'seeker' ] })}
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
export default TestWrapper;
