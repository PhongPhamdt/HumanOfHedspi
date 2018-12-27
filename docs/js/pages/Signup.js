import React, { Component } from 'react';
import { Link } from 'react-router';
import Header from '../components/Header';

class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      name: '',
      hasAgreed: false
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

  render() {
    return (
      <div>
        <Header/>
        <div className="content">
          <div className="container">
            <div className="row">
              <div className="FormCenter col-7">
                <form onSubmit={this.handleSubmit} className="FormFields">
                  <div className="FormField">
                    <label className="FormField__Label" htmlFor="name">Full Name</label>
                    <input type="text" id="name" className="FormField__Input"
                           placeholder="Enter your full name" name="name" value={this.state.name}
                           onChange={this.handleChange}/>
                  </div>
                  <div className="FormField">
                    <label className="FormField__Label" htmlFor="password">Password</label>
                    <input type="password" id="password" className="FormField__Input"
                           placeholder="Enter your password" name="password"
                           value={this.state.password}
                           onChange={this.handleChange}/>
                  </div>
                  <div className="FormField">
                    <label className="FormField__Label" htmlFor="password">Password</label>
                    <input type="password" id="password" className="FormField__Input"
                           placeholder="Enter your password" name="password"
                           value={this.state.password}
                           onChange={this.handleChange}/>
                  </div>

                  <div className="FormField">
                    <label className="FormField__CheckboxLabel">
                      <input className="FormField__Checkbox" type="checkbox" name="hasAgreed"
                             value={this.state.hasAgreed} onChange={this.handleChange}/> I agree all
                      statements in <a href="" className="FormField__TermsLink">terms of service</a>
                    </label>
                  </div>

                  <div className="FormField">
                    <Link to="/login/" className="FormField__Button mr-20">Sign Up</Link>
                    <Link to="/login/" className="FormField__Link">I'm already member</Link>
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

export default SignUpForm;