import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
   
    render() { 
        // Destructuring Arguments
        const  { onReset , onDelete , onIncrement , counters} = this.props;
        return (
            <div>
                <button onClick={onReset}>Reset</button>
               {counters.map((counter)=>(
               <Counter key={counter.id}
               counter = {counter}
                onDelete={onDelete}
                onIncrement={onIncrement}
                />))}
            </div>
        );
    }
}
 
export default Counters;