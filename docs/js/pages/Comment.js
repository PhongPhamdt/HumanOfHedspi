import React from 'react';
import Header from '../components/Header';
// import { Link } from 'react-router';

export default class CommentForm extends React.Component {

  constructor(props) {
    super(props);
    this.init();
  }

  init() {
    this.state = { author: '', text: '' };
  }

  handleAuthorChange(e) {
    this.setState({ author: e.target.value });
  }

  handleTextChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    var author = this.state.author.trim();
    var text = this.state.text.trim();
    if (!text || !author) {
      return;
    }
    this.props.onCommentSubmit({ author: author, text: text });
    this.setState({ author: '', text: '' });
  }

  render() {
    return (
      <div>
        <Header/>
        <div className="content">
          <div>
            <img src={'./images/photos/photo01.jpg'} alt={'Sample image 1'}/>
            <form className="commentForm" onSubmit={(e) => this.handleSubmit(e)}>
              <input
                type="text"
                placeholder="Your name"
                value={this.state.author}
                onChange={(e) => this.handleAuthorChange(e)}
              />
              <input
                type="text"
                placeholder="Say something..."
                value={this.state.text}
                onChange={(e) => this.handleTextChange(e)}
              />
              <input type="submit" value="Post"/>
            </form>
          </div>
        </div>
      </div>
    );
  }
}