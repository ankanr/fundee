import React from 'react';
import SearchBox from './Search';
import Donation from './Donation';

class Home extends React.Component {
  render() {
    return (
      <div>
        <div className="res"></div>
        <br />
        <br />
        <div className="title">
          Welcome To Fundee
          {localStorage.getItem('name') !== null
            ? ` , ${localStorage.getItem('name')}`
            : `${''}`}
          <SearchBox />
          <br />
          <br />
          {localStorage.getItem('token') !== null ? <Donation /> : <div></div>}
        </div>
      </div>
    );
  }
}

export default Home;
