import React, { Component } from 'react';

// Higher Order Component (HOC)

const WithCounter = (WrappedComponent)=>{
    class WithCounter extends Component {
        constructor(props){
            super(props)
            this.state = {
                count : 0
            }
        }
        handleIncrement = ()=>{
                this.setState(prevState =>{return {count : prevState.count + 1}})
        }
        render() { 
            return (
               <div>
                <WrappedComponent 
                count ={this.state.count} 
                handleIncrement={this.handleIncrement}
                />
               </div>
            );
        }
        
    }
    return WithCounter;
    
}

export default WithCounter;