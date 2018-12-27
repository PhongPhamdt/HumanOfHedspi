import React from 'react';
import Header2 from '../components/Header2';
import CommentBox2 from '../components/CommentBox2';
import CommentSite2 from '../components/CommentSite2';
// import { Link } from 'react-router';

export default class CommentForm extends React.Component {
  render() {
    return (
      <div>
        <Header2/>
        <div className="content">
          <div className="col-8 mr-auto ml-auto">
            <img src={'./images/photos/photo02.jpg'} alt={'Sample image 2'}/>
            <p><span>Created by</span>{" "}Snowfox9812</p>
            <CommentSite2/>
            <CommentBox2/>
          </div>
        </div>
      </div>
    );
  }
}