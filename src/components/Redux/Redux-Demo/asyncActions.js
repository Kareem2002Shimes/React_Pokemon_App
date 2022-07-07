const redux = require("redux")
const axios = require("axios") 
const applyMiddleware = redux.applyMiddleware
const thunkMiddleware = require("redux-thunk").default


const initialState = {
    loading : false,
    users : [],
    error : '' 
}
const FETCH_USERS_REQUESTED = 'FETCH_USERS_REQUESTED'
const FETCH_USERS_SUCCESSED = 'FETCH_USERS_SUCCESSED'
const FETCH_USERS_FAILED = 'FETCH_USERS_FAILED'

// actions
const fetchUserRequest = ()=>{
    return {type : FETCH_USERS_REQUESTED}
}
const fetchUserSuccess = (users)=>{
    return {type : FETCH_USERS_SUCCESSED , payload : users}
}
const fetchUserFailure = (error)=>{
    return {type : FETCH_USERS_FAILED , payload : error}
}

const reducer = (state = initialState , action)=>{
    switch(action.type){
        case FETCH_USERS_REQUESTED : 
            return {
                ...state,
                loading : true,
            }
        case FETCH_USERS_SUCCESSED : 
            return {
                loading : false,
                users : action.payload,
                error : ''
            }
        case FETCH_USERS_FAILED : 
            return {
                loading : false,
                users : [],
                error : action.payload
            }
        default :
            return state
    }
    
}
// fetch API
const fetchUsers = ()=>{
    return function (dispatch){
        dispatch(fetchUserRequest())
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(response =>{
            const users = response.data.map(user => user.id)
            dispatch(fetchUserSuccess(users))
        }).catch(error =>{
            dispatch(fetchUserFailure(error.message))
        })
    }
}

const store = redux.createStore(reducer , applyMiddleware(thunkMiddleware))

store.subscribe(()=> console.log(store.getState()))

store.dispatch(fetchUsers())

