import React from 'react';
import TimeElapsed from '../components/TimeElapsed';

export default class AltExampleViews extends React.Component {
  render() {
    return (
      <div>
        <h1>Example of Alt</h1>
        <p>A simple example using react and alt to show elapsed time : <TimeElapsed /> second(s) </p>
      </div>
    );
  }
}