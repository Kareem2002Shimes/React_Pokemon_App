import React, { useReducer } from 'react';
import ComponentOne from './ComponentOne';
import ComponentThree from './ComponentThree';
import ComponentTwo from './ComponentTwo';

export const Countcontext = React.createContext();
const initialState = 0;



const reducer = (state , action)=>{
    switch(action){
        case 'increment':
        return state + 1
        case 'decrement':
        return state - 1
        case 'reset':
        return initialState
        default:
            return state
    }
}


function App(){
    const [count , dispatch ] = useReducer(reducer , initialState)
    return(
        <div>
           <Countcontext.Provider value={{countState : count , countDispatch : dispatch}}>
           <h3>{count}</h3>
            <ComponentOne />
            <ComponentTwo />
            <ComponentThree />
           </Countcontext.Provider>
        
        </div>
    )
}
export default App;


