import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MenuBar extends Component {
  render(){
    return (
      <div className="menubar">
      <ul>
        <li><Link className="" to="/pipelineview"> Pipeline View </Link></li>
      </ul>
      </div>
    );
  }
}
export default MenuBar;
