import { configureStore } from "@reduxjs/toolkit";
import userInfoSliceReducer from "./userInfoSlice"
import feedSliceReducer from "./feedSlice";
const devmergStore=configureStore({
    reducer:{
        user:userInfoSliceReducer,
        feed:feedSliceReducer
    }
})

export default devmergStore;