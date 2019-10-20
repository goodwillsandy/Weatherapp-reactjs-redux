import React from "react";
import "./App.css";

// importing components
import WeatherInfo from "./containers/WeatherInfo";
import Card from "./styledComponents/Card";
import Searchbar from "./containers/Searchbar";

function App() {
  return (
    <div className="App">
      <Searchbar />
      <Card>
        {/* top section */}
        <WeatherInfo />
        {/* bottom section */}
        <div>
          {/* temprature on time basis */}
          {/* next 7 days forecast */}
        </div>
      </Card>
    </div>
  );
}

export default App;
