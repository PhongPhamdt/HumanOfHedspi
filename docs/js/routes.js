/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App';
import Home from './pages/Home';
import ChangeSize from './pages/ChangeSize';
import RealWorld from './pages/RealWorld';
import Login from './pages/Login';
import Comment from './pages/Comment';
import SignUp from './pages/Signup';
import Home9 from './pages/Home9';
import Comment1 from './pages/Comment1';
import Comment2 from './pages/Comment2';
import Comment3 from './pages/Comment3';
import Comment4 from './pages/Comment4';
import Comment5 from './pages/Comment5';
import Comment6 from './pages/Comment6';
import Comment7 from './pages/Comment7';
import Comment8 from './pages/Comment8';
import Comment9 from './pages/Comment9';
import Comment10 from './pages/Comment10';
import Comment11 from './pages/Comment11';
import Comment12 from './pages/Comment12';
import Comment13 from './pages/Comment13';
import Comment14 from './pages/Comment14';

import RealWorld9 from './pages/RealWorld9';

const routes = () => (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    {/*<Route path="/horizontal/" component={HorizontalFlow} />*/}
    <Route path="/change-size/" component={ChangeSize} />
    <Route path="/news-feed/" component={RealWorld} />
    <Route path="/login/" component={Login} />
    <Route path="/comment/:id" components={Comment}/>
    <Route path="/sign-up/" components={SignUp}/>
    <Route path="/9" component={Home9}/>
    <Route path="/9/news-feed/" component={RealWorld9} />
    <Route path="/9/comment/1/" components={Comment1}/>
    <Route path="/9/comment/2/" components={Comment2}/>
    <Route path="/9/comment/3/" components={Comment3}/>
    <Route path="/9/comment/4/" components={Comment4}/>
    <Route path="/9/comment/5/" components={Comment5}/>
    <Route path="/9/comment/6/" components={Comment6}/>
    <Route path="/9/comment/7/" components={Comment7}/>
    <Route path="/9/comment/8/" components={Comment8}/>
    <Route path="/9/comment/9/" components={Comment9}/>
    <Route path="/9/comment/10/" components={Comment10}/>
    <Route path="/9/comment/11/" components={Comment11}/>
    <Route path="/9/comment/12/" components={Comment12}/>
    <Route path="/9/comment/13/" components={Comment13}/>
    <Route path="/9/comment/14/" components={Comment14}/>
  </Route>
);

export default routes;
