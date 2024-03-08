import { createSlice } from "@reduxjs/toolkit";

const businessRegisterBarSlice=createSlice({
    name:'ProgressBarSlice',
    initialState:10,
    reducers:{
        increment:(state,action)=>{
            return state+action.payload
        },
        decrement:(state,action)=>{
            return state-action.payload
        }
    }
})
export default businessRegisterBarSlice.reducer
export const {increment,decrement}=businessRegisterBarSlice.actions