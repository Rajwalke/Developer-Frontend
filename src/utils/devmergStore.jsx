import { configureStore } from "@reduxjs/toolkit";
import userInfoSliceReducer from "./userInfoSlice"
const devmergStore=configureStore({
    reducer:{
        user:userInfoSliceReducer
    }
})

export default devmergStore;