import {useState} from 'react';


function Counter(intialCount = 0 , value = 1) {
    const [count , setCount] = useState(intialCount)
    const handleIncrement = ()=>{
        setCount((prevCount => prevCount + value))
    }
    const handleDecrement = ()=>{
        setCount((prevCount => prevCount - value))
    }
    const handleReset = ()=>{
        setCount(intialCount)
    }
    return [count , handleIncrement ,handleDecrement ,handleReset]

}

export default Counter;