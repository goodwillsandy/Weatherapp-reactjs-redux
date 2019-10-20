import { connect } from "react-redux";
import WeatherInfoComponent from "../components/WeatherInfo";

const mapStateToProps = state => state.weatherReducer;

const WeatherInfo = connect(
  mapStateToProps,
  {}
)(WeatherInfoComponent);

export default WeatherInfo;
