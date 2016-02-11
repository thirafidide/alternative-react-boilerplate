import './main.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import App from './components/App.jsx';

const appRouter = (
  <Router history={hashHistory}>
    <Route path="/" component={App} />
  </Router>
);

ReactDOM.render(appRouter, document.getElementById('app'));