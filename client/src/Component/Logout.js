import React, { Component } from "react";
import axios from "axios";
import "./Logout.css";

// const apiUrl = "http://localhost:3000";

// axios.interceptors.request.use(
//   (config) => {
//     const { origin } = new URL(config.url);
//     const allowedOrigins = [apiUrl];
//     const token = localStorage.getItem("token");
//     if (allowedOrigins.includes(origin)) {
//       config.headers.authorization = `Bearer ${token}`;
//       console.log(token, "check");
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

class LogoutButton extends Component {
  constructor(props) {
    super(props);
    this.state = { message: "" };
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:3000/user/logout", this.state, {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        this.setState({ message: response.data });
        localStorage.removeItem("token");
        delete axios.defaults.headers.common["authorization"];
      })
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
