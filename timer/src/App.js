import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';


class App extends React.Component {
  
  
  constructor () {
    super();
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
  
  render() {
    return (
      <div className="App">
      Secondes : {this.state.seconds}
    </div>
    );
  }
  
  
  
}


ReactDOM.render(
  <button/>,
  document.getElementById('root')
);

export default App;
