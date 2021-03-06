import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link} from 'react-router'

export default class Nav extends React.Component {

  logUserOut(){
    localStorage.clear();
  }

  render() {
    return (
      <nav className="nav">
        <ul>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/goals">Goals</Link></li>
          <li id ='logout' onClick = {this.logUserOut.bind(this)} ><Link to="/home">Logout</Link></li>
        </ul>
      </nav>
    )
  }
}

          // <li><Link to="/login">Login</Link></li>
          // <li><Link to="/signup">Signup</Link></li>
// <li><Link to="/profile">Profile</Link></li>
// <li><Link to="/expense">Expenses</Link></li>