import React from "react";
import './Button.css';
import ReactDOM from 'react-dom';


class Button extends React.Component {

  constructor(props) {
    super(props);
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
         data-testid="button"  onClick={this.handleClick}
      className= {this.state.isToggle ? 'toggled' : 'untoggled'}>
         { this.state.isToggle ? 'toggled' : 'untoggled'}
      
      {this.props.children ? this.props.children : "Add text!"}
      </button>);
  }
  

}


export default Button;
