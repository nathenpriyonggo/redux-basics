import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import coutnerReducer from "./counter";
import authReducer from "./auth";


const store = configureStore({
    reducer: { 
        counter: coutnerReducer,
        auth: authReducer,
    }
});




export default store; 