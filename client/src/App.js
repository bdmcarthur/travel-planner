import React from "react";
// import Days from "./components/Days";
// import TripForm from "./components/TripForm";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CreateTrip from "./containers/CreateTrip";
import TripList from "./containers/TripList";

function App() {
  return (
    <div className="App container">
      {/* <Days />
      <TripForm />
      <AllTrips /> */}
      <CreateTrip />
      <TripList />
    </div>
  );
}

export default App;
