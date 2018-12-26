/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { IndexLink, Link } from 'react-router';

const Header = () => (
  <header className="header">
    {/*<h1><img src="./images/logo.png" alt="React Stack Grid" /></h1>*/}

    <nav>
      <ul>
        <h1>HumansOfHedspi</h1>
        <li><Link to="/log-in/" activeClassName="is-active">Login/Sign up</Link></li>
        <li class = "center"><IndexLink to="/" activeClassName="is-active">Home</IndexLink></li>
        {/*<li><Link to="/horizontal/" activeClassName="is-active">Horizontal</Link></li>*/}
        {/*<li><Link to="/change-size/" activeClassName="is-active">Change Size</Link></li>*/}
        <li><Link to="/real-world/" activeClassName="is-active">Newsfeed</Link></li>
        <li><Link to="/about-us/" activeClassName ="is-active"> About Us</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;
