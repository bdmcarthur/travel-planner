import { ADD_TRIP, DELETE_TRIP, FETCH_TRIP } from "./types";
import axios from "axios";

const apiUrl = "http://localhost:3000/trip";

export const createTrip = ({ title, description }) => {
  return dispatch => {
    return axios
      .post(`${apiUrl}/add`, { title, description })
      .then(response => {
        dispatch(createTripSuccess(response.data));
      })
      .catch(error => {
        throw error;
      });
  };
};

export const createTripSuccess = data => {
  return {
    type: ADD_TRIP,
    payload: {
      _id: data._id,
      title: data.title,
      description: data.description
    }
  };
};

export const deleteTripSuccess = id => {
  return {
    type: DELETE_TRIP,
    payload: {
      id
    }
  };
};

export const deleteTrip = id => {
  return dispatch => {
    return axios
      .get(`${apiUrl}/delete/${id}`)
      .then(response => {
        dispatch(deleteTripSuccess(response.data));
      })
      .catch(error => {
        throw error;
      });
  };
};

export const fetchTrips = trips => {
  return {
    type: FETCH_TRIP,
    trips
  };
};

export const fetchAllTrips = () => {
  return dispatch => {
    return axios
      .get(`${apiUrl}/all`)
      .then(response => {
        dispatch(fetchTrips(response.data.data.items));
      })
      .catch(error => {
        throw error;
      });
  };
};
