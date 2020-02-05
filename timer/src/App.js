import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import Timer from './components/timer/Timer'


class App extends React.Component {
  
  
  // constructor () {
  //   super();
  //   this.state = { seconds: 0 };
  // }
  
  // tick() {
  //   this.setState(state => ({
  //     seconds: state.seconds + 1
  //   }));
  // }

  // componentDidMount() {
  //   this.interval = setInterval(() => this.tick(), 1000);
  // }

  // componentWillUnmount() {
  //   clearInterval(this.interval);
  // }
  
  render() {
    return (
      <div className="App">
      <Timer/>
    </div>
    );
  }
  
  
  
}




export default App;
