import React from 'react';
import Header2 from '../components/Header2';
import CommentBox from '../components/CommentBox';
// import { Link } from 'react-router';

export default class CommentForm extends React.Component {
  render() {
    return (
      <div>
        <Header2/>
        <div className="content">
          <div className="col-8 mr-auto ml-auto">
            <img src={'./images/photos/photo01.jpg'} alt={'Sample image 1'}/>
            {/*<CommentBox/>*/}
          </div>
        </div>
      </div>
    );
  }
}