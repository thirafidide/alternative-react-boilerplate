import alt from '../libs/alt';
import TimeActions from '../actions/TimeActions';

class TimeStore {
  constructor() {
    this.bindActions(TimeActions);

    this.timeElapsed = 0;
    this.counterStarted = false;
  }

  increment() {
    const timeElapsed = this.timeElapsed + 1;

    this.setState({timeElapsed});
  }

  startCounter() {
    const counterStarted = true;

    this.setState({counterStarted});
  }
  
}

export default alt.createStore(TimeStore, 'TimeStore');