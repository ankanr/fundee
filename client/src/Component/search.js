import React, { Component } from 'react';
import './search.css';

class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = { search: '', num: '' };
  }

  enteredvalue = ({ target }) => {
    this.setState({ search: target.value });
  };

  printvalue = () => {
    this.setState({ num: this.state.search });
  };

  render() {
    return (
      <div>
        <h1 className="heading"> Fundee!!</h1>
        <input
          type="text"
          value={this.state.search}
          onChange={this.enteredvalue}
        />
        <br />
        <br />
        <button onClick={this.printvalue}>Search</button>
        <br />
        <br />
        {this.state.num}
      </div>
    );
  }
}

export default SearchBox;
