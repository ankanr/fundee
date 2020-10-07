import React, { Component } from 'react';
import axios from 'axios';

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
      .post('http://localhost:3000/user/logout', this.state, {
        headers: {
          authorization: localStorage.getItem('token'),
        },
      })
      .then((response) => {
        this.setState({ message: response.data });
        localStorage.removeItem('token');
        localStorage.removeItem('name');
        delete axios.defaults.headers.common['authorization'];
      })
      .catch((err) => this.setState({ message: 'Unable to logout' }));
    setTimeout(() => {
      window.location.reload();
    }, 2500);
  };

  render() {
    const { message } = this.state;
    return (
      <React.Fragment>
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
