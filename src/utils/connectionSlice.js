import { createSlice } from "@reduxjs/toolkit";

const connectionSlice=createSlice({
    name:"connection",
    initialState:{
        pendingRequest:[null]
    },
    reducers:{
        addAllRequest:(state,action)=>{
            state.pendingRequest= action.payload;
        }
    }
});
export default connectionSlice.reducer;
export  const {addAllRequest}=connectionSlice.actions