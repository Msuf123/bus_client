import { createSlice } from "@reduxjs/toolkit";

const BusinessProgressRegisterButtonSlice=createSlice({
    name:'BusinessRegisterButoonNextUrl',
    initialState:'/questionTwo',
    reducers:{
        nextUrl:(state,action)=>{
            return action.payload
        }
    }
})
export default BusinessProgressRegisterButtonSlice.reducer