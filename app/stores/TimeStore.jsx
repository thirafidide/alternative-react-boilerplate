import alt from '../libs/alt';
import TimeActions from '../actions/TimeActions';

class TimeStore {
  constructor() {
    this.bindActions(TimeActions);

    this.timeElapsed = 0;
  }

  increment() {
    const timeElapsed = this.timeElapsed + 1;

    this.setState({timeElapsed});
  }
  
}

export default alt.createStore(TimeStore, 'TimeStore');