import React from 'react';
import ComponentA from './Context/ComponentA';
import {UserProvider} from './Context/UserContext'

function App() {
    return ( 
        <div>
            <UserProvider value='Kareem'>
            <ComponentA />
            </UserProvider>
        </div>
     );
}

export default App;