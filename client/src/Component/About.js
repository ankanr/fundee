import React from 'react';

class About extends React.Component {
  render() {
    return (
      <div>
        <div className="res"></div>
        <div className="about">About Us</div>
        <main>
          <h1 className="jd">
            Backend <br />
            <img src={require('../img/ankan.jpg')} alt="avatar-ankan" />
            <br />
            <span>Ankan Roy</span>
          </h1>
          <h1 className="jd">
            Frontend <br />
            <img src={require('../img/mohit.jpg')} alt="avatar-mohit" />
            <br />
            <span>Mohit Kaushik</span>
          </h1>
          <h1 className="jd">
            Design And Idea <br />
            <img src={require('../img/vaibhavi.jpg')} alt="avatar-vaibhavi" />
            <br />
            <span>Vaibhavi Lohani</span>
          </h1>
        </main>
        <footer>
          <div className="title">What Fundee is about</div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Repellendus obcaecati laboriosam maxime consectetur debitis expedita
            quod reiciendis repudiandae, quibusdam ab necessitatibus voluptatem
            eos harum est aspernatur consequatur. Odit aperiam minus mollitia
            asperiores repudiandae, blanditiis voluptate quas eius praesentium
            nemo ipsa sunt. Suscipit vitae iste, repellat officiis sunt ipsum
            tempore quo, fugiat repudiandae, aperiam id eius quas recusandae
            quos necessitatibus magni! Accusantium, quia ipsam nobis aliquid
            aperiam magni eius vel sequi molestias mollitia provident, incidunt
            repellendus pariatur quos ipsum, eveniet animi dicta quidem facere!
            Eaque, repellendus quae nobis vel eos amet a. Nisi accusamus,
            voluptatibus libero neque ratione fugiat quidem odit.
          </p>
        </footer>
      </div>
    );
  }
}

export default About;
