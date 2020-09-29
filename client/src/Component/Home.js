import React from 'react';

class Home extends React.Component {
  render() {
    return (
      <div className="title">
        Welcome To Fundee
        {localStorage.getItem('name') !== null
          ? ` , ${localStorage.getItem('name')}`
          : `${''}`}
      </div>
    );
  }
}

export default Home;
