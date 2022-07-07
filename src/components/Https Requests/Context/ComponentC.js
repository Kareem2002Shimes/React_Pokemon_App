import React from 'react';
import {UserConsumer} from './UserContext'

function ComponentC() {
    return ( 
        <UserConsumer>
           {
               (userName)=>{
               return <h1>Hello {userName}</h1>
               }
           }
        </UserConsumer>
     );
}

export default ComponentC;