import React from 'react';

class Contact extends React.Component {
  render() {
    return (
      <div>
        <div className="res"></div>
        <div className="title">Contact Us</div>
        <main>
          <h1>
            Email <br />
            <span>query@fundee.com</span>
          </h1>
          <h1>
            Phone Number <br />
            <span>(555) 5555 555</span>
          </h1>
          <h1>
            Address <br />
            <span>Fundee HQ, India</span>
          </h1>
        </main>
      </div>
    );
  }
}

export default Contact;
