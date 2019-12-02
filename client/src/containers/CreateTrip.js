import { connect } from "react-redux";
import { createTrip } from "../actions";
import NewTrip from "../components/NewTrip";

const mapDispatchToProps = dispatch => {
  return {
    onAddTrip: trip => {
      dispatch(createTrip(trip));
    }
  };
};

export default connect(null, mapDispatchToProps)(NewTrip);
