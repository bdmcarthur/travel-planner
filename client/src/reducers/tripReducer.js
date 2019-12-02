import { ADD_TRIP, DELETE_TRIP, FETCH_TRIP } from "../actions/types";

export default function tripReducer(state = [], action) {
  switch (action.type) {
    case ADD_TRIP:
      return [...state, action.payload];
    case DELETE_TRIP:
      return state.filter(trip => trip._id !== action.payload.id);
    case FETCH_TRIP:
      return action.trips;
    default:
      return state;
  }
}
