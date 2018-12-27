import React, { Component } from 'react';
import Header from '../components/Header';

class AboutUs extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div className="content">
          <div className="col-8 mr-auto ml-auto">
            <img src={'./images/AboutUs.jpg'} alt={'AboutUs'}/>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutUs;