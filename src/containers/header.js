import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  render(){

    return (
      <header>
        <h1>CI-UI</h1>
      </header>
    );
  }
}


export default connect(null)(Header);