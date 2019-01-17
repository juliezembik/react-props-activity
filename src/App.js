import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import EnterNumber from './EnterNumber';
import CurrentTotal from './CurrentTotal';
import History from './History';


class App extends Component {
  render() {
    return (
      <div className="App">
            <Header />
            <EnterNumber />
            <CurrentTotal />
            <History />
      </div>
    );
  }
}

export default App;
