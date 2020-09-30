import React from 'react';
import SearchBox from './Search';

class Home extends React.Component {
  render() {
    return (
      <div className="title">
        Welcome To Fundee
        {localStorage.getItem('name') !== null
          ? ` , ${localStorage.getItem('name')}`
          : `${''}`}
        <SearchBox />
      </div>
    );
  }
}

export default Home;
