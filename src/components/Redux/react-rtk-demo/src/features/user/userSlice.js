import {createSlice , createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    loading : false,
    users : [],
    error : ''
}

// Generate pending , fulfilled and rejected action types
export const fetchUsers = createAsyncThunk('user/fetchUsers' , ()=>{
    return axios.get("https://jsonplaceholder.typicode.com/users")
            .then(response => response.data)
})

const userSlice = createSlice({
    name : 'user',
    initialState,
    extraReducers : (builder)=>{
        builder.addCase(fetchUsers.pending , (state)=>{
            state.loading = true
        })
        builder.addCase(fetchUsers.fulfilled , (state , action)=>{
            state.loading = false,
            state.users = action.payload
            state.error = ''
        })
        builder.addCase(fetchUsers.rejected , (state)=>{
            state.loading = false,
            state.users = [],
            state.error = 'Error 404'
        })
    }
})

export default  userSlice.reducer
