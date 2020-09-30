import axios from 'axios';
import React, { Component } from 'react';
import './Search.css';

class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      name: '',
      location: '',
      query: '',
      error: '',
    };
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  submitHandler = async (e) => {
    e.preventDefault();
    await axios.get('http://localhost:3000/ngo/data').then((response) => {
      if (
        this.state.query.toLowerCase() ===
          response.data[0].name.toLowerCase() ||
        this.state.query.toLowerCase() ===
          response.data[0].location.toLowerCase()
      ) {
        this.setState({
          name: response.data[0].name,
          location: response.data[0].location,
          loading: false,
        });
      } else {
        this.setState({ error: 'No Such NGO Found', loading: false });
      }
    });
    setTimeout(() => {
      window.location.reload();
    }, 3000);
  };

  render() {
    const { query, name, location, error, loading } = this.state;
    return (
      <>
        <div className="input">
          <form onSubmit={this.submitHandler}>
            <input
              type="text"
              name="query"
              value={query}
              placeholder="Search"
              onChange={this.changeHandler}
            />
            <button type="submit" value="submit">
              Search
            </button>
          </form>
          <br />
          <br />
          {loading ? (
            <div>Loading...</div>
          ) : error === '' ? (
            <div>
              <div>
                Name : {name}
                <br />
                Location : {location}
              </div>
            </div>
          ) : (
            <div>{error}</div>
          )}
        </div>
      </>
    );
  }
}

export default SearchBox;
