import React from 'react';
import Header2 from '../components/Header2';
import CommentBox from '../components/CommentBox11';
import CommentSite from '../components/CommentSite11';
// import { Link } from 'react-router';

export default class CommentForm extends React.Component {
  render() {
    return (
      <div>
        <Header2/>
        <div className="content">
          <div className="col-8 mr-auto ml-auto">
            <img src={'./images/photos/photo11.jpg'} alt={'Sample image 11'}/>
            <p><span>Created by</span>{" "}Snowfox9812</p>
            <CommentSite/>
            <CommentBox/>
          </div>
        </div>
      </div>
    );
  }
}