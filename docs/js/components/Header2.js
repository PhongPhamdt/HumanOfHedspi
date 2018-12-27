/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { IndexLink, Link } from 'react-router';
import SearchField from './SearchField';
// import ProfilePanel from './ProfilePanel';

const Header = () => (
  <header className="header">
    <nav>
      <div className="container">
        <ul>
          <h1>HumansOfHedspi</h1>
          <li id="sf"><SearchField/></li>
          <li><Link to="/" activeClassName="is-active">Logout</Link></li>
          <li className="block-center"><IndexLink to="/9/"
                                                  activeClassName="is-active">Home</IndexLink></li>
          <li><Link to="/9/news-feed/" activeClassName="is-active">News Feed</Link></li>
          <li><span>Hi, snowfox9812</span></li>
        </ul>
      </div>
    </nav>
  </header>
);

export default Header;
