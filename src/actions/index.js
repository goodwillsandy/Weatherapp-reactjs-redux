export const getWeather = data => {
  return {
    type: "GET_WEATHER",
    payload: data
  };
};
