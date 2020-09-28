import React, { Component } from 'react';
import axios from 'axios';
import './Logout.css';

class LogoutButton extends Component {
  constructor(props) {
    super(props);
    this.state = { message: '' };
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = async (e) => {
    e.preventDefault();
    await axios
      .post('http://localhost:3000/user/logout', this.state)
      .then((response) => this.setState({ message: response.data.error }))
      .catch((err) => console.log(err));
  };

  //   this.setState({ message: response })
  render() {
    const { message } = this.state;
    return (
      <React.Fragment>
        <nav className="heading">Fundee</nav>
        <div className="res">{message}</div>
        <div className="form">
          <form onSubmit={this.submitHandler}>
            <button type="submit" value="submit">
              Logout
            </button>
          </form>
        </div>
      </React.Fragment>
    );
  }
}
export default LogoutButton;
