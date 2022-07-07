import React from 'react';
import ComponentOne from './ComponentOne';
import ComponentTwo from  './ComponentTwo';
import Counter from './Counter'

function App() {
    return ( 
        <div>
       <Counter render = {(count , handleIncrement)=>(
           <ComponentOne count = {count} handleIncrement = {handleIncrement}/>
       )}/>
         <Counter render = {(count , handleIncrement)=>(
           <ComponentTwo count = {count} handleIncrement = {handleIncrement}/>
       )}/>
      
        </div>
     );
}

export default App;