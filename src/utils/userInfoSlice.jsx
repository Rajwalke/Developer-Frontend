
import { createSlice } from "@reduxjs/toolkit";

const userInfoSlice=createSlice({
    name:"userInfoSlice",
    initialState:null,
    reducers:{
        addUserDetails:(state,action)=>{
            return action.payload;
        },
        deleteUserDetails:(state,action)=>{
            return null;
        }
    }
});

export default userInfoSlice.reducer;
export const {addUserDetails,deleteUserDetails}=userInfoSlice.actions;
 