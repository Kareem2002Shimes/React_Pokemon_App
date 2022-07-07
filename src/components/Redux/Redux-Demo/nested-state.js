const redux  = require("redux")
const produce = require("immer").produce


const initialState = {
    name : "Kareem",
    address : {
        street : "Mizana",
        city : "Kafr Al Dawar",
        state : "Egypt"
    }
}
const STREET_UPDATED = "STREET_UPDATED";

    const updateStreet = (street)=>{
        return {
            type : STREET_UPDATED, 
            payload : street
        }
    }

const reducer = (state = initialState , action)=>{
    switch(action.type){
        case STREET_UPDATED : 
            return produce(state , (draft)=>{
                draft.address.street = "Alex"
            })
        default:
            return state 
    }
}

const store = redux.createStore(reducer)
console.log("Intial State", store.getState())
const unSubscribe = store.subscribe(()=>
    console.log("Update State" , store.getState())
)
store.dispatch(updateStreet("Alex"))

unSubscribe()

