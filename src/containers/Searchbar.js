import { connect } from "react-redux";
import SearchBarComponent from "../components/Searchbar";
import { getWeather } from "../actions/index";

const mapDispatchToProps = dispatch => ({
  dispatch: data => {
    dispatch(getWeather(data));
  }
});

const Searchbar = connect(
  () => ({}),
  mapDispatchToProps
)(SearchBarComponent);

export default Searchbar;
