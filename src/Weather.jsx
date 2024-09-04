import React, { useEffect, useState } from "react";

export default function Weather() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await fetch("https://ws.smn.gob.ar/map_items/weather");
        const data = await res.json();
       
        setWeather(data[0]);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };
    fetchWeather();
  }, []);

  if (!weather) return <div>Loading weather...</div>;

  return (
    <div className="weather-container text-center bg-gradient-to-r from-blue-500 to-purple-500 p-4 rounded-lg shadow-lg text-white">
      <h2 className="text-xl font-bold mb-2">Clima en {weather.name}</h2>
      <p className="text-lg">Temperatura: {weather.weather.temp}°C</p>
      <p className="text-lg">Descripción: {weather.weather.description}</p>
    </div>
  );
}
