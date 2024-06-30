import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

export default function WeatherApp() {
  let [weatherInfo, setWeatherInfo] = useState({
    city: "Delhi",
    temp: 24,
    tempMin: 20,
    tempMax: 32,
    humidity: 43,
    feelsLike: 25,
    desc: "haze",
  });
  return (
    <>
      <SearchBox setWeatherInfo={setWeatherInfo} />
      <InfoBox result={weatherInfo} />
    </>
  );
}
