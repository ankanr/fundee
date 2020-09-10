import React, { Component } from 'react';
import './signup.css';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = { Username: ' ', Password: '', email: ' ', cno: ' ' };
  }
  modifychange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() {
    return (
      <React.Fragment>
        <h1 className="heading"> Fundee!!</h1>
        <form className="form">
          <label htmlFor="Username">Username :</label>
          <input
            className="username"
            type="text"
            name="Username"
            value={this.state.Username}
            onChange={this.modifychange}
          />
          <br />
          <br />
          <label htmlFor="Password">Password :</label>
          <input
            className="Password"
            type="password"
            name="Password"
            value={this.state.Password}
            onChange={this.modifychange}
          />
          <br />
          <br />
          <label htmlFor="email">E-mail:</label>
          <input
            className="email"
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.modifychange}
          />
          <br />
          <br />
          <label htmlFor="cno"> Contact No : </label>
          <input
            className="cno"
            type="text"
            name="cno"
            value={this.state.cno}
            onChange={this.modifychange}
          />
          <br />
          <br />

          <input className="submit" type="submit" value="Submit" />
        </form>
      </React.Fragment>
    );
  }
}
export default Signup;
