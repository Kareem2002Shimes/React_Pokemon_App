import React, { Component } from 'react';
import WithCounter from './WithCounter';

class CounterOne extends Component {
    render() { 
        const {count , handleIncrement} = this.props
        return (<button onClick={handleIncrement}>{`Count One => ${count}`}</button>);
    }
}
export default WithCounter(CounterOne);