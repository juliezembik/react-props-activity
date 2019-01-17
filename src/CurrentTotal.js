import React, { Component } from 'react';

class CurrentTotal extends Component {
    constructor() {
        super();
        this.state = {
            number: '0',
        };
    }

    //this changes handles the event number change
    
    
    render() {
        return(
            <div>
                <p> {this.state.number} </p> 
            </div>
        );
    }
}



export default CurrentTotal;