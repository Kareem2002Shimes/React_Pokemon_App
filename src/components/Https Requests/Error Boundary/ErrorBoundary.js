import React, { Component } from 'react';
import ErrorFallback from './ErrorFallback'

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError : false
        }
    }
    static getDerivedStateFromError(error){
        console.log("Error Handled")
        return {
            hasError : true
        } // inside state
    }
    componentDidCatch(erro , info){
        console.log(erro)
        console.log(info)
    }
    
    render() { 
      if (this.state.hasError){
        return <ErrorFallback />
      }
      return this.props.children
    }
}
export default ErrorBoundary;