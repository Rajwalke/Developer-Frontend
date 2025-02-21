import { createSlice } from "@reduxjs/toolkit";

const connectionSlice=createSlice({
    name:"connection",
    initialState:{
        pendingRequest:[null]
    },
    reducers:{
        addAllRequest:(state,action)=>{
            state.pendingRequest= action.payload;
        },
        removeRequest:(state,action)=>{
            state.pendingRequest.splice(action.payload,1);
        }
    }
});
export default connectionSlice.reducer;
export  const {addAllRequest,removeRequest}=connectionSlice.actions