import { createStore } from 'redux';
export const INCREMENT = 'increse';
import {createSlice, configureStore} from '@reduxjs/toolkit'

const counterSlice = createSlice({
    name:'counter',
    initialState,
    reducers:{
        increment(state){
            state.counter++
        },
        decrement(state){
            state.counter--
        },
        increse (state, action){
            state.counter = state.counter + action.payload
        },
        toggleCounter (state){
            state.showCounter = !state.showCounter
        }
    }
});



const store = configureStore({
    reducer: counterSlice.reducer
})

 export const counterActions = counterSlice.actions;

export default store;