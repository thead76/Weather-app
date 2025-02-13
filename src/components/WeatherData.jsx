import axios from "axios";
import React, { useState } from "react";
import "./style.css";


const WeatherData = () => {
  const [data, setData] = useState(null);

  const [countryName, setCountryName] = useState("");
  const [cityName, setCityName] = useState("");

  const getWeatherData = async () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName},${countryName}&appid=ef91a5c63807b877203248c41cd40c2c&units=metric`;

    const response = await axios.get(url);
    setData(response.data);
    console.log(data);
  };

  return (
    <>
      <input
        placeholder="City"
        type="text"
        value={cityName}
        style={{ padding: "10px", minWidth: "300px", borderRadius: "10px" }}
        onChange={(event) => setCityName(event.target.value)}
      />
      <input
        placeholder="Country"
        type="text"
        value={countryName}
        style={{ padding: "10px", minWidth: "300px", borderRadius: "10px" }}
        onChange={(event) => setCountryName(event.target.value)}
      />
      <button onClick={getWeatherData}>Get Weather Data</button>
      <ul>
        <li>City: {data?.name}</li>
        <li>Discription: {data?.weather[0]?.description}</li>
        <li>Temperature : {data?.main?.temp} </li>
        <li>Max Temp: {data?.main?.temp_min}</li>
        <li>Min Temp: {data?.main?.temp_max}</li>
        <li>Humidity: {data?.main?.humidity}</li>
        <li>Wind Speed: {data?.wind?.speed}</li>
        <li>
          Sun Rise: {new Date(data?.sys?.sunrise * 1000).toLocaleTimeString()}
        </li>
        <li>
          Sun Set: {new Date(data?.sys?.sunset * 1000).toLocaleTimeString()}
        </li>
      </ul>
    </>
  );
};

export default WeatherData;