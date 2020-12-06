import React from 'react';

import './login-container.less';

import logo from '../../assets/images/logo.png';
export default function LoginContainer () {
  return (
    <div className='login-container'>
      <div className='content'>
        <img alt="" className='logo' src={logo}/>
        <div>DOUBLEWHITE</div>
      </div>
    </div>
  );
}
