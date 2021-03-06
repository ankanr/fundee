import React, { Component } from 'react';
import axios from 'axios';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: '',
      cno: '',
      message: '',
    };
  }
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = async (e) => {
    e.preventDefault();
    if (
      this.state.username === '' ||
      this.state.password === '' ||
      this.state.email === '' ||
      this.state.cno === ''
    ) {
      this.setState({ message: 'Please check the data entered!!' });
    } else {
      await axios
        .post('http://localhost:3000/user/register', this.state)
        .then((response) => {
          console.log(response);
          this.setState({ message: 'Signed Up!' });
        })
        .catch((err) => console.log(err));
      setTimeout(() => {
        window.location.reload();
      }, 2500);
    }
  };

  render() {
    const { username, password, email, cno, message } = this.state;
    return (
      <React.Fragment>
        <div className="res">{message}</div>
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
