import React, { Component } from 'react';
import { Link } from 'react-router';

class ProfilePanel extends Component {
  render() {
    const display = this.props.username ? (
      <Link to="/profile/" activeClassName="is-active">Welcome, {this.props.username}</Link>
    ) : (
      <Link to="/login/" activeClassName="is-active">Login/Sign up</Link>
    );
    return (
        {display}
    );
  }
}

export default ProfilePanel;