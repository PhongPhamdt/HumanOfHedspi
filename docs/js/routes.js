/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App';
import Home from './pages/Home';
import ChangeSize from './pages/ChangeSize';
import RealWorld from './pages/RealWorld';
// import HorizontalFlow from './pages/HorizontalFlow';
import Login from './pages/Login';
import Comment from './pages/Comment';
const routes = () => (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    {/*<Route path="/horizontal/" component={HorizontalFlow} />*/}
    <Route path="/change-size/" component={ChangeSize} />
    <Route path="/news-feed/" component={RealWorld} />
    <Route path="/login/" component={Login} />
    <Route path="/comment/" components={Comment}/>
  </Route>
);

export default routes;
