import React, { Component } from 'react';

class Counter extends Component {
    componentDidUpdate(prevProps,prevState){
        if (this.props.counters !== prevProps.counters){
            // Ajax Call and Get new Data from the Server
            console.log("prev",prevProps.counters)
            console.log("current",this.props.counters)
        }
    }
    componentWillUnmount(){
        console.log("Component -- Unmount");
    }
    render() { 
        
        return (
           <div>
               <span>{this.props.counter.value}</span>
               <button onClick={()=>
                {this.props.onIncrement(this.props.counter)}}>
                   Increment</button>
                <button onClick={()=>
                {this.props.onDelete(this.props.counter.id)}}>
                    Delete</button>
           </div>
        );
    }
}
 
export default Counter;