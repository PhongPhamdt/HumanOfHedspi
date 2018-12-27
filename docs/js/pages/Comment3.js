import React from 'react';
import Header2 from '../components/Header2';
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
        <Header2/>
        <div className="content">
          <div>
            <img src={'./images/photos/photo03.jpg'} alt={'Sample image 3'}/>
            <form className="commentForm" onSubmit={(e) => this.handleSubmit(e)}>
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