import { connect } from "react-redux";
import LoginForm from "../components/LoginForm";
import { LOGGED_USER } from "../actions/types";

const mapDispatchToProps = dispatch => {
  return {
    loggedInUser: result => dispatch({ type: LOGGED_USER, result: result })
  };
};

export default connect(null, mapDispatchToProps)(LoginForm);
