import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { ordered , restocked } from './cakeSlice'

export default function CakeView() {
  const numOfCakes = useSelector((state)=> state.cake.numOfCakes)
  const dispatch = useDispatch()
  return (
    <div>
        <h2>Number of cakes - {numOfCakes}</h2>
        <button onClick={()=> dispatch(ordered())}>Ordere cake</button>
        <button onClick={()=> dispatch(restocked(5))}>Restock cakes</button>
    </div>
  )
}
