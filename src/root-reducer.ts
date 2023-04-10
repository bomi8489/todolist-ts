import { combineReducers } from "@reduxjs/toolkit";
import store from "./store";

const rootReducer = combineReducers({
    todolist: store.getState
})