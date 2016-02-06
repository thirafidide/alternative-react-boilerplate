import React from 'react';

import TimeActions from '../actions/TimeActions';
import TimeStore from '../stores/TimeStore';

export default class TimeElapsed extends React.Component {
  constructor(props) {
    super(props);

    this.state = TimeStore.getState();

    setTimeout(this.timeIncrement.bind(this), 1000);
  }

  componentDidMount()     { TimeStore.listen(this.storeChanged.bind(this)); }
  componentWillUnmount()  { TimeStore.unlisten(this.storeChanged.bind(this)); }
  storeChanged(state) {
    this.setState(state);
  }

  render() {
    const timeElapsed = this.state.timeElapsed;

    return (
      <span className="timeElapsed">{timeElapsed}</span>
    );
  }

  timeIncrement() {
    TimeActions.increment();
    setTimeout(this.timeIncrement.bind(this), 1000);
  }
}