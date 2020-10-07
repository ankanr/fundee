import React from 'react';
import axios from 'axios';

class Donation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      donation: 0,
      message: '',
    };
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  submitHandler = async (e) => {
    e.preventDefault();
    await axios
      .post('http://localhost:3000/user/donate', this.state, {
        headers: {
          authorization: localStorage.getItem('token'),
        },
      })
      .then((response) => {
        this.setState({
          message: 'Thank you for the donation of Rs.' + this.state.donation,
        });
      })
      .catch((err) => console.log(err));
  };

  render() {
    const { donation, message } = this.state;
    return (
      <div className="donation-box">
        <form onSubmit={this.submitHandler}>
          <input
            type="number"
            value={donation}
            name="donation"
            placeholder="Enter Amount"
            onChange={this.changeHandler}
            id="donation-amount"
          />
          <button type="submit">Donate</button>
        </form>
        <div className="res">{message}</div>
      </div>
    );
  }
}

export default Donation;
