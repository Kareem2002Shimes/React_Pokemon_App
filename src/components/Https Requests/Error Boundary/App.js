import React from 'react'
import ErrorBoundary from './Error Boundary/ErrorBoundary'
import Hero from './Error Boundary/Hero';

function App() {
    return ( 
        <div>
        <ErrorBoundary>
            <Hero heroName='Batman'/>
        </ErrorBoundary>
        <ErrorBoundary>
            <Hero heroName='Superman'/>
        </ErrorBoundary>
        <ErrorBoundary>
            <Hero heroName='jokr'/>
        </ErrorBoundary>
     
        </div>
     );
}

export default App;