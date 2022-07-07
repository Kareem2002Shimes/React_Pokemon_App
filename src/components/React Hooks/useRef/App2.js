import React, { useEffect,useRef , useState } from 'react';


function App2() {
    const [timer , setTimer] = useState(0)
    const intervalRef = useRef()
    useEffect(()=>{
        intervalRef.current = setInterval(()=>{
            setTimer(prevTimer => prevTimer + 1)
        }, 1000)
        return ()=>{
            clearInterval(intervalRef.current)
        }
    },)
  
    return ( 
        <div>
         Timer - {timer}
         <button onClick={()=>( clearInterval(intervalRef.current))}>Stop Timer</button>
        </div>
     );
}

export default App2;