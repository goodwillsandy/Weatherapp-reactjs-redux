import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../Reducers";

const store = createStore(
  rootReducer,
  {
    weatherReducer: {
      weather: {
        coord: { lon: 77.22, lat: 28.65 },
        weather: [{ id: 721, main: "Haze", description: "haze", icon: "50n" }],
        base: "stations",
        main: {
          temp: 28.08,
          pressure: 1015,
          humidity: 61,
          temp_min: 26.67,
          temp_max: 30.56
        },
        visibility: 3000,
        wind: { speed: 1.5, deg: 300 },
        clouds: { all: 20 },
        dt: 1571499478,
        sys: {
          type: 1,
          id: 9165,
          message: 0.0072,
          country: "IN",
          sunrise: 1571446430,
          sunset: 1571487494
        },
        timezone: 19800,
        id: 1273294,
        name: "Delhi",
        cod: 200
      }
    }
  },
  applyMiddleware(thunk)
);

export default store;
