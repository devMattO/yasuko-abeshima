import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, Route, Router, IndexRoute } from 'react-router'
import App from './App';
import Root from './Root.js';
import About from './About.js';
import Gallery from './Gallery.js';
import './index.css';


ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Root}>
      <IndexRoute component={App} />
      <Route path="/about" component={About} />
      <Route path="/gallery" component={Gallery} />
    </Route>
  </Router>,
  document.getElementById('root')
);