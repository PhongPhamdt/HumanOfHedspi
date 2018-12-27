import React, { Component } from 'react';

export default class SearchField extends Component{
  _handleTextChange = e => this.props.onSearchChanged(e.target.value);
  render() {
    return(
      <form className="col-8">
        <input onChange={this._handleTextChange} className="form-control" type="text" placeholder="Search"/>
      </form>
    );
  }
}
