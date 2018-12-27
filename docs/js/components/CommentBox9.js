import React, { Component } from 'react';
import axios from '../axios'

class CommentBox extends React.Component {
  constructor(props) {
    super(props);
    this.init();
  }

  init() {
    this.state = {text: ''};
  }

  handleTextChange(e) {
    this.setState({text: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault();
    const text = this.state.text.trim();
    if (!text) {
      return
    }
    this._onClick(text);
    this.setState({text: ''});
  }

  _onClick = (text) => {
    axios
      .post("/api/comment/post_comment/9/13", {
        content: text
      })
      .then()
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="widget-area no-padding blank">
              <div className="status-upload">
                {/*<form>*/}
                  {/*<textarea placeholder="Add a comment"></textarea>*/}
                  {/*<button type="submit" className="btn btn-success green" onClick={this._onClick()}>*/}
                    {/*Share*/}
                  {/*</button>*/}
                {/*</form>*/}
                <form className="commentForm" onSubmit={this.handleSubmit.bind(this)}>
                  <input
                    type="text"
                    placeholder="Say something..."
                    value={this.state.text}
                    onChange={this.handleTextChange.bind(this)}
                  />
                  <input type="submit" value="Post" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CommentBox;