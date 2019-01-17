import React, { Component } from 'react';
import './EnterNumber.css';

class EnterNumber extends Component {
    constructor() {
        super();
        this.state = {
            Up: 'Up',
            Down: 'Down',
            inputNumber: 0
        };
    }

    handleChange = (event) => {
        this.setState({
            // event.target.value will be a string
            inputNumber: parseInt(event.target.value)
        });
    }

    upVote = (event) => {
        this.setState({
            inputNumber: this.state.inputNumber + 1
        });
    }

    downVote = (event) => {
        this.setState({
            inputNumber: this.state.inputNumber - 1
        });
    }


    render() {
        return (
            <div>
                {JSON.stringify(this.state)}
                <button className="push-up" onClick={this.upVote} >Up</button>
                    <br />
                    <input onChange={this.handleChange} type="text" />
                    <br />
                <button className="push-down" onClick={this.downVote} >Down</button>
            </div>
        );
    }
}




export default EnterNumber;