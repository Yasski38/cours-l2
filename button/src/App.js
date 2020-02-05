import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

  const mybutton = {
    myAttribute: "my value",
  }
  

class App extends React.Component {
  
 

  constructor () {
    super();
    this.state = {isToggle: false} ;
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick() {
    this.setState((oldState) => ({
        isToggle: ! oldState.isToggle
      }));
  }
  
  
      
  
  render() {
    return (
      <button 
      onClick={this.handleClick}
      className= {this.state.isToggle ? 'toggled' : 'untoggled'}>
      {this.state.isToggle ? 'toggled' : 'untoggled'}
      </button>
    );
  }
     
    

}


export default App;
