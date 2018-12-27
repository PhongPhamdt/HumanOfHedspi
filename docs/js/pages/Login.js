import React, { Component } from 'react';
import { Link } from 'react-router';
import axios from '../axios';
import Header from '../components/Header';

export default class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      username: '',
      id: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let target = e.target;
    let value = target.type === 'checkbox' ? target.checked : target.value;
    let name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    console.log('The form was submitted with the following data:');
    console.log(this.state);
  }

  _onLogin = () => {
    axios
      .post('/api/auth/login', {
        username: 'snowfox9812',
        password: 'dmm'
      })
      .then(response =>
        this.setState({
          username: response.data.username,
          id: response.data.id
        })
      );
  };

  render() {
    return (
      <div>
        <Header/>
        <div className="content">
          <div className="container">
            <div className="row">
              <div className="FormCenter col-7">
                <form className="FormFields" onSubmit={this.handleSubmit}>
                  <div className="FormField">
                    <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
                    <input type="email" id="email" className="FormField__Input"
                           placeholder="Enter your username" name="email" value={this.state.email}
                           onChange={this.handleChange}/>
                  </div>

                  <div className="FormField">
                    <label className="FormField__Label" htmlFor="password">Password</label>
                    <input type="password" id="password" className="FormField__Input"
                           placeholder="Enter your password" name="password"
                           value={this.state.password}
                           onChange={this.handleChange}/>
                  </div>

                  <div className="FormField button-container">
                    <div className="row">
                      <div className="col-5">
                        <Link to="/9" className="FormField__Button mr-20" onClick={this._onLogin}>Sign
                          In</Link>
                      </div>
                      <div className="col-5">
                        <Link to="/sign-up/" className="FormField__Button">Create an account</Link>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="img-fluid col-5">
                <img className="d-block img-fluid"
                     src="https://scontent.fhan5-7.fna.fbcdn.net/v/t1.0-9/49132504_1072879956225725_8863545539426254848_o.jpg?_nc_cat=100&_nc_ht=scontent.fhan5-7.fna&oh=d60127e60a9839ad32e4f6c3173927c0&oe=5CD9587F"
                     alt="First slide"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

