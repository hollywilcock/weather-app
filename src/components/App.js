import React from "react";
import PropTypes from "prop-types";
import LocationDetails from "./LocationDeatails";

const App = ({ location }) => {
  const { city, country } = location;
  return (
    <div className="App">
      <h1>Weather App </h1>
      <LocationDetails city={city} country={country} />
    </div>
  );
};
export default App;
App.propTypes = {
  location: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
  }).isRequired,
};
