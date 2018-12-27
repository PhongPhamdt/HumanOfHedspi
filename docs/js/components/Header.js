/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { IndexLink, Link } from 'react-router';

const Header = () => (
  <header className="header">
    <nav>
      <ul>
        <h1>HumansOfHedspi</h1>
        <li><Link to="/login/" activeClassName="is-active">Login/Sign up</Link></li>
        <li className = "block-center"><IndexLink to="/" activeClassName="is-active">Home</IndexLink></li>
        <li><Link to="/news-feed/" activeClassName="is-active">News Feed</Link></li>
        <li><Link to="/about-us/" activeClassName ="is-active"> About Us</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;
