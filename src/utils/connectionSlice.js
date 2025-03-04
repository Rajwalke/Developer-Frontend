import { createSlice } from "@reduxjs/toolkit";

const connectionSlice=createSlice({
    name:"connection",
    initialState:{
        pendingRequest:[null],
        acceptRequest:[null],
        firendInfo:null,
    },
    reducers:{
        addAllRequest:(state,action)=>{
            state.pendingRequest= action.payload;
        },
        removeRequest:(state,action)=>{
            state.pendingRequest.splice(action.payload,1);
        },
        allAcceptRequest:(state,action)=>{
            state.acceptRequest=action.payload;
        },
        addFriendInfo:(state,action)=>{
            state.firendInfo=action.payload;
        }
        
    }
});
export default connectionSlice.reducer;
export  const {addAllRequest,removeRequest,allAcceptRequest,addFriendInfo}=connectionSlice.actions