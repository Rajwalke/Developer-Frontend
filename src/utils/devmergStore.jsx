import { configureStore } from "@reduxjs/toolkit";
import userInfoSliceReducer from "./userInfoSlice"
import feedSliceReducer from "./feedSlice";
import connectionSliceReducer from "./connectionSlice"
const devmergStore=configureStore({
    reducer:{
        user:userInfoSliceReducer,
        feed:feedSliceReducer,
        connection:connectionSliceReducer
    }
})

export default devmergStore;