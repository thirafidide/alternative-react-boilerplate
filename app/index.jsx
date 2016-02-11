import './main.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import IndexView from './views/index.jsx';

const appRouter = (
  <Router history={hashHistory}>
    <Route path="/" component={IndexView} />
  </Router>
);

ReactDOM.render(appRouter, document.getElementById('app'));