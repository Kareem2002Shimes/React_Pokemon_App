const createSlice = require("@reduxjs/toolkit").createSlice
const reduxLogger = require("redux-logger")
const { cakeActions } = require("../cake/cakeSlice")

const initialState = {
    numOfIceCreams : 20
}


const icecreamSlice = createSlice({
    name : 'icecream',
    initialState,
    reducers : {
        ordered : (state)=>{
            state.numOfIceCreams--
        },
        restocked : (state , action)=>{
            state.numOfIceCreams += action.payload
        }
    },
    // extraReducers : {
    //     ['cake/ordered'] : (state)=>{
    //         state.numOfIceCreams--
    //     }
    // }
    extraReducers : (builder)=>{
        builder.addCase(cakeActions.ordered , (state)=> {
            state.numOfIceCreams--
        })
    }
})

module.exports = icecreamSlice.reducer
module.exports.icecreamActions = icecreamSlice.actions