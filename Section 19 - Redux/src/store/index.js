import { createStore } from 'redux';
export const INCREMENT = 'increse';
import {createSlice, configureStore} from '@reduxjs/toolkit'

const initialCounterState = {counter:0, showCounter: true}

const counterSlice = createSlice({
    name:'counter',
    initialState:initialCounterState,
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

const authInitialState = {isAuthenticated:false}
 
const authSlice = createSlice({
    name:'authentication',
    initialState: authInitialState,
    reducers:{
        login (state){
            state.isAuthenticated = true;
        },
        logout (state){
            state.isAuthenticated = false;
        }
    }
})

const store = configureStore({
    reducer: {counter:counterSlice.reducer, auth: authSlice.reducer}
})

export const authActions = authSlice.actions;
 export const counterActions = counterSlice.actions;

export default store;