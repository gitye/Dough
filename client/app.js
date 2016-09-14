import React from 'react';
import { Router, Route, Link, browserHistory } from 'react-router'
import ReactDOM from 'react-dom';
import DashBoard from './dashboard'
import Login from './login'
import Signup from './signup'
import Profile from './profile'
import Nav from './nav';
import Goals from './goals';


class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Nav />
        {React.cloneElement(this.props.children, this.props)}
      </div>
    )
  }
}

export default App;

// ReactDOM.render((
//   <Router history={browserHistory}>
//     <Route path="/" component={App} >
//       <Route path="/dashboard/:userName" component={DashBoard} />
//       <Route path="/login" component={Login} />
//       <Route path="/signup" component={Signup} />
//       <Route path="/profile" component={Profile} />
//     </Route>
//   </Router>
// ), document.getElementById('content'));
