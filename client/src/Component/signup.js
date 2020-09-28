import React, { Component } from 'react';
import axios from 'axios';
import './Signup.css';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: '',
      cno: '',
    };
  }
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:3000/user/register', this.state)
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  };

  render() {
    const { username, password, email, cno } = this.state;
    return (
      <React.Fragment>
        <nav className="heading">Fundee</nav>
        <div className="form">
          <form onSubmit={this.submitHandler}>
            <label htmlFor="name">Username :</label>
            <input
              className="name"
              type="text"
              name="username"
              placeholder="Enter you name"
              value={username}
              onChange={this.changeHandler}
            />
            <br />
            <br />
            <label htmlFor="password">Password :</label>
            <input
              className="password"
              type="password"
              name="password"
              placeholder="Enter you password"
              value={password}
              onChange={this.changeHandler}
            />
            <br />
            <br />
            <label htmlFor="email">E-mail:</label>
            <input
              className="email"
              type="email"
              name="email"
              placeholder="Enter you email"
              value={email}
              onChange={this.changeHandler}
            />
            <br />
            <br />
            <label htmlFor="cno">Contact No : </label>
            <input
              className="cno"
              type="number"
              name="cno"
              placeholder="Enter you mobile number"
              value={cno}
              onChange={this.changeHandler}
            />
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
export default Signup;
