import React from 'react';
import TimeElapsed from '../components/TimeElapsed';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Alt(ernative) React Boilerplate</h1>
        <p>A simple boilerplate inspired by <a href="http://survivejs.com">SurviveJS</a></p>
        <p>A simple example using react and alt to show elapsed time : <TimeElapsed /> second(s) </p>
      </div>
    );
  }
}