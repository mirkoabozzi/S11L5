import { combineReducers, configureStore } from "@reduxjs/toolkit";
import MainHomeReducers from "../reducers/MainHomeRerducer";

const rootReducer = combineReducers({
  mainHomeReducers: MainHomeReducers,
});
const store = configureStore({
  reducer: rootReducer,
});
export default store;
