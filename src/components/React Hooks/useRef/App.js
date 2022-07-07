import React, { useEffect, useRef } from 'react';


function Ref() {

    const inputRef = useRef(null);
    useEffect(()=>{
        inputRef.current.focus()
    } , [])
    return ( 
        <div>
            <input ref={inputRef} type='text'></input>
        </div>
     );
}

export default Ref;