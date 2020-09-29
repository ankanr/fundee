import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Link, Switch } from 'react-router-dom';
import './index.css';

import SearchBox from './Component/Search';
import Signup from './Component/Signup';
import Login from './Component/Login';
import Logout from './Component/Logout';
import Home from './Component/Home';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <nav className="heading">
            Fundee
            <ul>
              <li>
                <Link to="/">Home &nbsp;&nbsp;</Link>
              </li>
              <li>About &nbsp;&nbsp;</li>
              <li>Contact &nbsp;&nbsp;</li>
              {localStorage.getItem('token') !== null ? (
                <div>
                  <ul>
                    <li>
                      <Link to="/logout">Logout &nbsp;&nbsp;</Link>
                    </li>
                  </ul>
                </div>
              ) : (
                <div>
                  <ul>
                    <li>
                      <Link to="/signup">Signup &nbsp;&nbsp;</Link>
                    </li>
                    <li>
                      <Link to="/login">Login &nbsp;&nbsp;</Link>
                    </li>
                  </ul>
                </div>
              )}
            </ul>
          </nav>
        </div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/logout">
            <Logout />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
        </Switch>
      </Router>
    );
  }
}
export default App;

ReactDOM.render(<App />, document.getElementById('root'));
