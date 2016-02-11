import React from 'react';
import { Link } from 'react-router';

export default class IndexView extends React.Component {
  render() {
    return (
      <div>
        <h1>Alt(ernative) React Boilerplate</h1>
        <ul>
          <li><Link to="/example">Example use of Alt</Link></li>
          <li><Link to="/about">About Alt(ernative) React Boilerplate</Link></li>
        </ul>
      </div>
    );
  }
}