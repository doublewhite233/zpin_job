import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { List, InputItem, TextareaItem, Button, WhiteSpace } from 'antd-mobile';

import TopBar from '../../components/topBar/top-bar';
import AvatarSelector from '../../components/avatarSelector/avatar-selector';

class UserInfo extends Component {

  state = {
    avatar: this.props.user.avatar,
    company: '',
    post: '',
    salary: '',
    info: ''
  }

  handleChange = (name, value) => {
    this.setState({
      [name]: value
    });
  }

  setAvatar = (avatar) => {
    this.setState({
      avatar
    });
  }

  handleSave = () => {
    console.log(this.state);
  }

  render () {
    if (this.props.user.type==='boss') {
      return (
        <div>
          <TopBar title='Boss信息完善' />
          <AvatarSelector avatar={this.props.user.avatar} setAvatar={this.setAvatar}/>
          <List renderHeader={() => '详细信息'}>
            <WhiteSpace />
            <InputItem onChange={value => { this.handleChange('company', value); }}>公司名称</InputItem>
            <WhiteSpace />
            <InputItem onChange={value => { this.handleChange('post', value); }}>招聘职位</InputItem>
            <WhiteSpace />
            <InputItem onChange={value => { this.handleChange('salary', value); }}>职位薪资</InputItem>
            <WhiteSpace />
            <TextareaItem
                count={50}
                onChange={value => { this.handleChange('info', value); }}
                placeholder="不多于50个字"
                rows={4}
                title='公司介绍'
            />
            <WhiteSpace />
          </List>
          <Button onClick={this.handleSave} style={{ margin: '15px 15px 0 15px' }} type='primary'>保存</Button>
        </div>
      );
    } else {
      return (
        <div>
          <TopBar title='个人信息完善' />
          <AvatarSelector avatar={this.props.user.avatar} setAvatar={this.setAvatar}/>
          <List renderHeader={() => '详细信息'}>
            <WhiteSpace />
            <InputItem onChange={value => { this.handleChange('post', value); }}>期望职位</InputItem>
            <WhiteSpace />
            <InputItem onChange={value => { this.handleChange('salary', value); }}>薪资要求</InputItem>
            <WhiteSpace />
            <TextareaItem
                count={50}
                onChange={value => { this.handleChange('info', value); }}
                placeholder="不多于50个字"
                rows={4}
                title='个人优势'
            />
          </List>
          <Button onClick={this.handleSave} style={{ margin: '15px 15px 0 15px' }} type='primary'>保存</Button>
        </div>
      );
    }
  }
}

export default connect(
  state => ({ user: state.user }),
  {}
)(UserInfo);
