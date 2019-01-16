import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import EnterNumber from './EnterNumber';

class App extends Component {
  render() {
    return (
      <div className="App">
            <Header />
            <EnterNumber />
      </div>
    );
  }
}

export default App;
