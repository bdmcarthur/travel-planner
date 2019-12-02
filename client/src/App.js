import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CreateTrip from "./containers/CreateTrip";
import TripList from "./containers/TripList";
import Signup from "./components/Signup";
import LogUser from "./containers/LogUser";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={LogUser} />
          <Route exact path="/" component={CreateTrip} />
          <Route exact path="/all" component={TripList} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
