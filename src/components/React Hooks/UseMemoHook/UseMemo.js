import React, { useMemo, useState } from 'react'


function Memo() {
    const [counterOne , setCounterOne] = useState(0)
    const [counterTwo , setCounterTwo] = useState(0)

    const IncrementOne = ()=>{
        setCounterOne(counterOne + 1)
    }
    const IncrementTwo = ()=>{
        setCounterTwo(counterTwo + 1)
    }
    const isEven = useMemo(()=>{
        let i = 0;
        while( i < 2000000000) i++
       return counterOne % 2 === 0;
    }, [counterOne])
    return (  
        <div>
            <button onClick={IncrementOne}>Counter One - {counterOne}</button>
            <span>{isEven ? 'Even' : 'Odd'}</span>
            <button onClick={IncrementTwo}>Counter Two - {counterTwo}</button>
        </div>
    );
}

export default Memo;