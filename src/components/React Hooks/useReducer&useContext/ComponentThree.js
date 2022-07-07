import React, { useContext } from 'react';
import {Countcontext} from './ReducerApp';


function ComponentThree() {
    const countContext = useContext(Countcontext);
    return (  
        <div>
            
            Component Three
                <button onClick={()=>(countContext.countDispatch('increment'))}>Increment</button>
                <button onClick={()=>(countContext.countDispatch('decrement'))}>decrement</button>
                <button onClick={()=>(countContext.countDispatch('reset'))}>Reset</button>
         
        </div>
    );
}

export default ComponentThree;
