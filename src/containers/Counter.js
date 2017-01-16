import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            state: 0
        }
    }

    increment = () => {
        this.setState({
            state: this.state.state + 1
        });
    }

    decrement = () => {
        this.setState({
            state: this.state.state - 1
        });
    }

    render() {
        return(
            <div>
                <span id="">{ this.state.state }</span>
                <br />
                <button onClick={ this.increment }>Up</button>
                <button onClick={ this.decrement }>Down</button>
            </div>
        );
    }
}

export default Counter;
