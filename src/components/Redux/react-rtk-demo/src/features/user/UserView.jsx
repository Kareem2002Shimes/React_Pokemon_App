import {React , useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {fetchUsers} from './userSlice'

export default function UserView() {
  const dispatch = useDispatch()
  const user = useSelector((state)=> state.user)
    useEffect(()=>{
      dispatch(fetchUsers())
    },[]) 
  return (
    <div>
        <h2>List of Users</h2>
        {user.loading && <div>Loading...</div>}
        {!user.loading && user.error ? <div>{user.error}</div> : null}
        {!user.loading && user.users ? (
          <ul>
            {
              user.users.map(user =>(
                <li key={user.id}>{user.name}</li>
              ))
            }
          </ul>
        ) : null}
    </div>
  )
}
