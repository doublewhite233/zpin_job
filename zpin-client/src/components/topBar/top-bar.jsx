import React,{ Component } from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'antd-mobile';

import './top-bar.less';

export default class TopBar extends Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    isBack: PropTypes.bool,
    history: PropTypes.object
  }

  static defaultProps = {
    isBack: false
  }

  handleBack = () => {
    console.log(this.props);
    this.props.history.goBack();
  }

  render () {
    const back = this.props.isBack ? <Icon size='lg' type='left' /> : null;
    return (
      <div className="top-bar">
        <span className="back" onClick={this.handleBack}>{ back }</span>
        <span className="title">{this.props.title}</span>
      </div>
    );
  }
}
