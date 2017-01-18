import React, { Component } from 'react';
import { connect } from 'react-redux';

class Counter extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <h1>VALUE: { this.props.value }</h1>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        value: state.counter.value
    };
};

Counter = connect(mapStateToProps)(Counter);

export default Counter;
