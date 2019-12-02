import { combineReducers } from "redux";
import trips from "./tripReducer";

export default combineReducers({
  trips: trips
});
