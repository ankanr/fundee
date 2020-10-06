import React from 'react';
import SearchBox from './Search';

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
        </div>
      </div>
    );
  }
}

export default Home;
