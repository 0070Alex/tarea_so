import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Bienvenidos a Sistemas Operativos</h1>
        </header>
        <p className="App-intro">
          Sistemas Operativos 1 <span>Douglas Alexander</span>
        </p>
      </div>
    );
  }
}

export default App;
