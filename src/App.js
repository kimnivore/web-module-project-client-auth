import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Login from './components/Login';

function App() {
  return (
    <Router>
      <div className="App">
      <h2>Friends Database</h2>
        <ul>
          <li>
            <Link to='/login'>Login.</Link>
          </li>
          <li>
            <Link to='/friendlist'>Friendlist.</Link>
          </li>
          <li>
            <Link to='/addfriend'>Addfriend.</Link>
          </li>
          <li>
            <Link to='/logout'>Logout</Link>
          </li>
        </ul>
        <Switch>
          <Route path='/logout' />
          <Route path='/addfriend' />
          <Route path='/friendlist' />
          <Route path='/login' />
          <Route path='/' />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
