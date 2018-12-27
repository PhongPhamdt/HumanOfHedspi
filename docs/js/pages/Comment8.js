import React from 'react';
import Header2 from '../components/Header2';
import CommentBox from '../components/CommentBox8';
import CommentSite from '../components/CommentSite8';
// import { Link } from 'react-router';

export default class CommentForm extends React.Component {
  render() {
    return (
      <div>
        <Header2/>
        <div className="content">
          <div className="col-8 mr-auto ml-auto">
            <img src={'./images/photos/photo08.jpg'} alt={'Sample image 8'}/>
            <p><span>Created by</span>{" "}Snowfox9812</p>
            <CommentSite/>
            <CommentBox/>
          </div>
        </div>
      </div>
    );
  }
}