import React, { Component } from 'react';
import axios from '../axios';
import CommentDetail from './CommentDetail';

class CommentSite extends Component {
  constructor(props) {
    super(props);
    this.init();
  }

  init() {
    this.state = {};
  }

  componentDidMount() {
    axios
      .get('api/comment/get_all_comments_and_user/14')
      .then(data => {
        console.log(data);
        this.setState({
          comment: data.data
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        {this.state.comment ?
          <CommentDetail comment={this.state.comment}/>
        : ""}
      </div>
    );
  }
}

export default CommentSite;