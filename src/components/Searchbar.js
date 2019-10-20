import React from "react";

const Searchbar = props => {
  const onclick = e => {
    const location = document.getElementById("submit-location").value;
    const API_KEY = "2b7a35c815f1fdea1b0df4bf86f1588a";
    const API_URL = "http://api.openweathermap.org/data/2.5/weather";

    fetch(`${API_URL}?q=${location}&APPID=${API_KEY}&units=metric`)
      .then(resp => resp.json())
      .then(data => {
        props.dispatch(data);
      })
      .catch(error => {
        console.log(error);
      });
  };
  return (
    <div className="d-flex mb-5">
      <label>
        <input id="submit-location" placeholder="Enter city name" type="text" />
        <button onClick={onclick}>Submit</button>
      </label>
    </div>
  );
};

export default Searchbar;
