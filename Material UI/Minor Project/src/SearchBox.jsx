import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";
import { useState } from "react";
export default function SearchBox({ setWeatherInfo }) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);
  const APIKEY = "b9a3df4648c9f119598469bba74e320f";
  const geoCodeUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}`;

  function handleInput(event) {
    let value = event.target.value;
    setCity(value);
  }

  async function getGeoCode(city) {
    setError(false);
    try {
      let response = await fetch(geoCodeUrl);
      response = await response.json();
      return response.coord;
    } catch (err) {
      setError(true);
    }
  }

  async function getWeather(lat, lon) {
    try {
      const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}&units=metric`;
      let response = await fetch(weatherUrl);
      response = await response.json();
      let result = {
        city: city,
        temp: response.main.temp,
        tempMin: response.main.temp_min,
        tempMax: response.main.temp_max,
        humidity: response.main.humidity,
        feelsLike: response.main.feels_like,
        desc: response.weather[0].description,
      };
      setWeatherInfo(result);
    } catch (err) {
      setError(true);
    }
  }

  async function handleSubmit(event) {
    try {
      event.preventDefault();
      console.log(city);
      let coord = await getGeoCode(city);
      let lat = coord.lat;
      let lon = coord.lon;
      await getWeather(lat, lon);
    } catch (err) {
      setError(true);
    }
  }

  return (
    <div className="container">
      <h3>Search for Weather</h3>
      <form action="#" onSubmit={handleSubmit}>
        <TextField
          id="outlined-basic"
          label="Enter City"
          variant="outlined"
          value={city}
          name="city"
          onChange={handleInput}
          required
        />
        <br />
        <br />
        <Button variant="contained" color="success" type="submit">
          Search
        </Button>
        {error && <p style={{ color: "red" }}>No location exits in the data</p>}
      </form>
    </div>
  );
}
