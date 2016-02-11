import './main.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import IndexView from './views/IndexView';
import AltExampleView from './views/AltExampleView';
import AboutView from './views/AboutView';

const appRouter = (
  <Router history={hashHistory}>
    <Route path="/" component={IndexView} />
    <Route path="/example" component={AltExampleView} />
    <Route path="/about" component={AboutView} />
  </Router>
);

ReactDOM.render(appRouter, document.getElementById('app'));