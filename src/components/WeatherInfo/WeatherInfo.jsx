import "./WeatherInfo.css";
import { WiThermometer, WiHumidity, WiBarometer } from "react-icons/wi";

function WeatherInfo({ weather }) {
  const currentDate = new Date().toLocaleDateString("pt-BR", {
    weekday: "long",
    day: "2-digit",
    month: "long",
  });

  return (
    <div className="weather-container">
      <h2>{weather.name}</h2>
      <p className="current-date">{currentDate}</p>
      <div className="weather-info">
        <img
          src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
          alt={weather.weather[0].description}
        />
        <p className="temperature">{Math.round(weather.main.temp)}°C</p>
      </div>
      <p className="description">{weather.weather[0].description}</p>
      <div className="details">
        <p>
          <WiThermometer size={30} /> Sensação Térmica:{" "}
          {Math.round(weather.main.feels_like)}°C
        </p>
        <p>
          <WiHumidity size={30} /> Umidade: {weather.main.humidity}%
        </p>
        <p>
          <WiBarometer size={34} /> Pressão: {weather.main.pressure}
        </p>
      </div>
    </div>
  );
}

export default WeatherInfo;
