import { combineReducers } from "redux";
import trips from "./tripReducer";
import user from "./userReducer";

const rootReducer = combineReducers({
  trips: trips,
  user: user
});

export default rootReducer;
