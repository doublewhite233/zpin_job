import React,{ Component } from 'react';
import PropTypes from 'prop-types';

import './top-bar.less';

export default class TopBar extends Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    isBack: PropTypes.boolean
  }

  static defaultProps = {
    isBack: false
  }

  render () {
    return (
      <div className="top-bar">
        <span className="title">{this.props.title}</span>
      </div>
    );
  }
}
