import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import EnterNumber from './EnterNumber';
import CurrentTotal from './CurrentTotal';
import History from './History';


class App extends Component {
  constructor() {
    super();
    this.state = {
      total: 0,
    }
  }

  updateTotal = (inputNumber) => {
    console.log('Updating total with', inputNumber);
    
    this.setState({
      total: this.state.total + inputNumber,
    });
  }

  render() {
    return (
      <div className="App">
            <Header />
                App State: {JSON.stringify(this.state)}
            <EnterNumber updateTotal={this.updateTotal} />
            <CurrentTotal />
            <History />
      </div>
    );
  }
}

export default App;
