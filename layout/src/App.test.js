import React from 'react';
import ReactDOM from 'react-dom';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import pretty from "pretty";
import App from './App';


let container = null;

beforeEach( () => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach( () => {
  unmountComponentAtNode(container);
  container.remove();
});


it('renders without crashing', () => {
  act( () => {
    render(<App />, container);
  });
  document.querySelectorAll("[className='title']").forEach( el => 
    expect(el.textContent).not.toBeNull()
  );


});


  /*act( () => {
    render(<div />, container);   
  });
  expect(document.querySelector("[className='card-text']").textContent).toBeDefined(); */



