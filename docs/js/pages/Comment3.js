import React from 'react';
import Header2 from '../components/Header2';
import CommentBox3 from '../components/CommentBox3';
import CommentSite3 from '../components/CommentSite3';
// import { Link } from 'react-router';

export default class CommentForm extends React.Component {
  render() {
    return (
      <div>
        <Header2/>
        <div className="content">
          <div className="col-8 mr-auto ml-auto">
            <img src={'./images/photos/photo03.jpg'} alt={'Sample image 3'}/>
            <p><span>Created by</span>{" "}Snowfox9812</p>
            <CommentSite3/>
            <CommentBox3/>
          </div>
        </div>
      </div>
    );
  }
}