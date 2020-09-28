import React, { Component } from 'react';
import './Search.css';

class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      val: '',
      loading: true,
      name: null,
      location: null,
    };
  }

  enteredValue = ({ target }) => {
    this.setState({
      search: target.value,
    });
  };

  searchValue = () => {
    this.setState({
      val: this.state.search,
      loading: false,
    });
  };

  async componentDidMount() {
    const response = await fetch('/ngo/data');
    const data = await response.json();
    this.setState({
      name: data[0].name,
      location: data[0].location,
    });
  }

  render() {
    return (
      <>
        <nav>
          <h1 className="heading">Fundee</h1>
        </nav>
        <br />
        <div className="input">
          <input
            type="text"
            value={this.state.search}
            onChange={this.enteredValue}
          />
          <button onClick={this.searchValue}>Search</button>
          <br />
          <br />
          {this.state.loading ? (
            <div>Loading...</div>
          ) : (
            <div>
              Name : {this.state.name}
              <br />
              Location : {this.state.location}
            </div>
          )}
        </div>
      </>
    );
  }
}

export default SearchBox;
