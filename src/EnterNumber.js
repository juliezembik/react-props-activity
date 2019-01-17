import React, { Component } from 'react';
import './EnterNumber.css';

class EnterNumber extends Component {
    constructor(props) {
        super(props);
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

    upVote = () => {
        // call the update total
        this.props.updateTotal(this.state.inputNumber);
    }

    downVote = () => {
        // pass a negative number to update total
        this.props.updateTotal( 0 - this.state.inputNumber);
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