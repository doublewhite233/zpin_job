import React,{ Component } from 'react';
import { List, Grid } from 'antd-mobile';
import PropTypes from 'prop-types';

import './avatar-selector.less';

const headerList = Array.from(new Array(10)).map((val, index) => ({
  text: (index + 1).toString(),
  icon: require(`../../assets/images/avatars/${index + 1}.svg`).default,
}));

export default class AvatarSelector extends Component {
  constructor (props) {
    super(props);
  }

  static propTypes = {
    setAvatar: PropTypes.func.isRequired,
    avatar: PropTypes.string.isRequired
  }

  state = {
    icon: require(`../../assets/images/avatars/${this.props.avatar}.svg`).default
  }

  handleClick = ({ text, icon }) => {
    this.setState({ icon });
    this.props.setAvatar(text);
  }

  render () {
    const header = '请选择头像';
    const footer = (
      <div>
        <div>当前头像：</div>
        <div className='nowAvatar'><img className='nowAvatarImg' src={this.state.icon}/></div>
      </div>
    );
    return (
      <List renderFooter={() =>footer} renderHeader={() => header}>
        <Grid
            className="not-square-grid"
            columnNum={5}
            data={headerList}
            hasLine={false}
            onClick={this.handleClick}
            renderItem={(dataItem) => (
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}>
            <img alt="" src={dataItem.icon} style={{ width: '10vw', height: '10vw' }}/>
          </div>
        )}/>
      </List>
    );
  }
}
