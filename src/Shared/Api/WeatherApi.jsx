import { weatherKey, weatherURL } from "../../Config/WeatherConfig";
import axios from "axios";
export const getWeatherDetails = async (cityName) => {
  try {
    const url =
      weatherURL + `current.json?key=${weatherKey}&q=${cityName}&aqi=no`;
    const weatherData = await axios.get(url);
    return weatherData;
  } catch (error) {
    console.error("CATCH ERROR", error.message);
    return error;
  }
};

export const getWeatherDayForecast = async (cityName) => {
  try {
    const url = `https://api.weatherapi.com/v1/forecast.json?key=a9c051bc6b7d464bb0921719231206&q=${cityName}&days=1&aqi=no&alerts=no`;
    const weatherData = await axios.get(url);
    return weatherData;
  } catch (error) {
    console.error("CATCH FORECAST ERROR", error.message);
    return error;
  }
};