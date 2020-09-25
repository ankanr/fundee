import React, { Component } from 'react';
import './Login.css';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() {
    return (
      <React.Fragment>
        <nav className="heading">Fundee</nav>
        <div className="form">
          <form>
            <label htmlFor="username">Username : </label>
            <input
              type="text"
              name="username"
              placeholder="Enter you username"
              value={this.state.username}
              onChange={this.handleChange}
            />

            <br />
            <br />

            <label htmlFor="password">Password : </label>
            <input
              type="password"
              name="password"
              placeholder="Enter you password"
              value={this.state.password}
              onChange={this.handleChange}
            />

            <br />
            <br />
            <br />

            <button type="submit" value="submit">
              Submit
            </button>
          </form>
        </div>
        <h3>Your username is: {this.state.username}</h3>
        <h3>Your password is: {this.state.password}</h3>
      </React.Fragment>
    );
  }
}
export default LoginForm;
