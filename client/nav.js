import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link} from 'react-router'

export default class Nav extends React.Component {
  render() {
    return (
      <nav className="nav">
        <ul>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/signup">Signup</Link></li>

        </ul>
      </nav>
    )
  }
}

          // <li><Link to="/profile">Profile</Link></li>
          // <li><Link to="/expense">Expenses</Link></li>