import React, { Component } from 'react';
import axios from 'axios';
import './Login.css';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '', message: '' };
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = async (e) => {
    e.preventDefault();
    await axios
      .post('http://localhost:3000/user/login', this.state)
      .then((response) =>
        response.data === 'No user found' || response.data === 'Unable to login'
          ? this.setState({ message: response.data })
          : this.setState({ message: 'Logged in!' })
      )
      .catch((err) => console.log(err));
  };

  render() {
    const { username, password, message } = this.state;
    return (
      <React.Fragment>
        <nav className="heading">Fundee</nav>
        <div className="res">{message}</div>
        <div className="form">
          <form onSubmit={this.submitHandler}>
            <label htmlFor="username">Username : </label>
            <input
              type="text"
              name="username"
              placeholder="Enter you username"
              value={username}
              onChange={this.changeHandler}
            />

            <br />
            <br />

            <label htmlFor="password">Password : </label>
            <input
              type="password"
              name="password"
              placeholder="Enter you password"
              value={password}
              onChange={this.changeHandler}
            />

            <br />
            <br />
            <br />

            <button type="submit" value="submit">
              Submit
            </button>
          </form>
        </div>
        {/* <h3>Your username is: {this.state.username}</h3>
        <h3>Your password is: {this.state.password}</h3> */}
      </React.Fragment>
    );
  }
}
export default LoginForm;
