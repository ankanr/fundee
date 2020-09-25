import React, { Component } from 'react';
import './Signup.css';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = { username: ' ', password: '', email: ' ', cno: ' ' };
  }
  modifychange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() {
    return (
      <React.Fragment>
        <nav className="heading">Fundee</nav>
        <div className="form">
          <form>
            <label htmlFor="Username">Username :</label>
            <input
              className="username"
              type="text"
              name="Username"
              placeholder="Enter you username"
              value={this.state.Username}
              onChange={this.modifychange}
            />
            <br />
            <br />
            <label htmlFor="password">Password :</label>
            <input
              className="password"
              type="password"
              name="password"
              placeholder="Enter you password"
              value={this.state.password}
              onChange={this.modifychange}
            />
            <br />
            <br />
            <label htmlFor="email">E-mail:</label>
            <input
              className="email"
              type="email"
              name="email"
              placeholder="Enter you email"
              value={this.state.email}
              onChange={this.modifychange}
            />
            <br />
            <br />
            <label htmlFor="cno">Contact No : </label>
            <input
              className="cno"
              type="number"
              name="cno"
              placeholder="Enter you mobile number"
              value={this.state.cno}
              onChange={this.modifychange}
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
