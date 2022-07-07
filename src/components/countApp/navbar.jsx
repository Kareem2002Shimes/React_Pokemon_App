import React from 'react';

//Stateless Function Component
const NavBar = ({totalCounters}) => {
    return ( 
        <div className='flex'>
        <h1>NavBar</h1>
        <span>{totalCounters}</span>
        </div >  
     );
}
 
export default NavBar;
