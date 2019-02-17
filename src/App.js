import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {WelcomeMessage} from "./jsx/jsx.js";
import {Welcome} from "./jsx/Welcome.js"
import ReactDOM from 'react-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
            <Welcome name="Todd"/>
            <WelcomeMessage/>
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>

        </header>
      </div>
    );
  }
}

export default App;
