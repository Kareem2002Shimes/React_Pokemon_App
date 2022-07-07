import React, { Component } from 'react';

class CounterOne extends Component {

    render() { 
        
        const {count , handleIncrement} = this.props
        return (  
            <button onClick={handleIncrement}>
                {`Counter One => ${count}`}
                </button>
        );
    }
}
 
export default CounterOne;