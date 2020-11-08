import axios from 'axios';
import React, { Component } from 'react';
import CharityCard from './CharityCard';

class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      ngo: [],
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
      this.setState({
        ngo: response.data,
        loading: false,
        location: this.state.query,
      });
    });
    let c = 0;
    this.state.ngo.forEach((ngo) => {
      if (
        ngo.location.toLowerCase().includes(this.state.location.toLowerCase())
      ) {
        c = c + 1;
        console.log(c);
      }
    });
    if (c === 0 || this.state.location === '') {
      this.setState({ error: 'No Such NGO Found' });
      setTimeout(() => {
        window.location.reload();
      }, 2500);
    }
  };

  render() {
    const { query, ngo, error, location, loading } = this.state;
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
          {loading ? (
            <div></div>
          ) : (error === '') & (loading === false) ? (
            <div className="card">
              {ngo
                .filter((ngo) =>
                  ngo.location.toLowerCase().includes(location.toLowerCase())
                )
                .map((ngo) => (
                  <CharityCard
                    name={ngo.name}
                    location={ngo.location}
                    key={ngo._id}
                  />
                ))}
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
