import React from "react";
import { connect } from "react-redux";
import Trip from "../components/Trips";
import { deleteTrip } from "../actions";

function TripList({ trips, onDelete }) {
  console.log(trips);
  if (!trips.length) {
    return <div>No trips</div>;
  }
  return (
    <div>
      {trips.map(trip => {
        console.log("trip", trip);
        return <Trip trip={trip} onDelete={onDelete} key={trip._id} />;
      })}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    trips: state.trips
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onDelete: id => {
      dispatch(deleteTrip(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TripList);
