import { createStore } from 'redux';
export const INCREMENT = 'increse';
import {createSlice} from '@reduxjs/toolkit'

createSlice({
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
            state.counter = state.counter + action.amount
        },
        toggleCounter (state){
            state.showCounter = !state.showCounter
        }
    }
});

const counterReducer = (state = { counter: 0, showCounter : true }, action) => {
    if (action.type === INCREMENT) {
        return {
            counter: state.counter + 1,
            showCounter: state.showCounter
        }
    }
    if (action.type === 'decrement') {
        return {
            counter: state.counter - 1,
            showCounter: state.showCounter
        }
    }

    if (action.type === 'increse') {
        return {
            counter: state.counter + action.amount,
            showCounter: state.showCounter
        }
    }

    if(action.type === 'toggle'){
        return {
            showCounter: !state.showCounter,
            counter: state.counter
        }
    }

    return state;
};

const store = createStore(counterReducer);

export default store;