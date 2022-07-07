import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { ordered , restocked} from './icecreamSlice'

export default function IcecreamView() {
  const [value , setValue] = React.useState(1)
  const numOfIcecreams = useSelector((state)=> state.icecream.numOfIceCreams)
  const dispatch = useDispatch()
  return (
    <div>
        <h2>Number of ice creams - {numOfIcecreams}</h2>
        <button onClick={()=> dispatch(ordered())}>Ordere ice cream</button>
        <input type="number" value={value} onChange={(e)=> setValue(parseInt(e.target.value))}/>
        <button onClick={()=> dispatch(restocked(value))}>Restock ice cream</button>
    </div>
  )
}
