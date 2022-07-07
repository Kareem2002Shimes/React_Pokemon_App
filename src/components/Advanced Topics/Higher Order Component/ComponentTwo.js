import React, { Component } from 'react';
import WithCounter from './WithCounter';

class CounterTwo extends Component {
    render() { 
        const {count , handleIncrement} = this.props

        return (<button onClick={handleIncrement}>
            
            {`Count Two => ${count}`}

            </button>);
    }
}
export default WithCounter(CounterTwo);