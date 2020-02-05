import React from 'react';


class Timer extends React.Component {

  constructor(props) {
    super(props);
    this.state = { seconds: 0 };
  }



   tick() {
    this.setState(state => ({
      seconds: state.seconds + 1
    }));
  }

  componentDidMount() {
   this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
  
  render () {
    return (
      <div data-testid="timer">
        Secondes : {this.state.seconds}
        {this.state.counter}
      </div>
    );
  }
  
  
}

export default Timer;

