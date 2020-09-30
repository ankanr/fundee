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
      .then((response) => {
        if (
          response.data === 'No user found' ||
          response.data === 'Unable to login'
        ) {
          this.setState({ message: response.data });
        } else {
          this.setState({ message: 'Logged in!' });
          localStorage.setItem('token', response.data.token);
          localStorage.setItem('name', response.data.user.username);
        }
      })
      .catch((err) => console.log(err));
    setTimeout(() => {
      window.location.reload();
    }, 2500);
  };

  render() {
    const { username, password, message } = this.state;
    return (
      <React.Fragment>
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
      </React.Fragment>
    );
  }
}
export default LoginForm;
