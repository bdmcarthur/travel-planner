import { LOGGED_USER } from "../actions/types";

const initialState = {
  user: null
};

export default function userReducer(state = initialState, action) {
  if (action.type === "LOGGED_USER") {
    let test = { ...state, user: action.result };
    console.log("test", test);
    return { ...state, user: action.result };
  }

  return state;
}
