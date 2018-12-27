import React, { Component } from 'react';

class CommentDetail extends Component {
  render() {
    const comments = this.props.comment ?this.props.comment.user.map(user=>(
      <p>
          <span className="font-weight-bold">
            {user.username} :
          </span>
        {" "}{user.content}
      </p>
    )) : "";
    return (
      <div>
        {comments}
      </div>
    );
  }
}

export default CommentDetail;