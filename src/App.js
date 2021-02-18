import React, { useState } from 'react';
import Background from './components/Background';
import DateWrapper from './components/DateWrapper';
import GlobalStyle from './components/GlobalStyle';
import InputSearch from './components/InputSearch';
import LocationWrapper from './components/LocationWrapper';
import Temperature from './components/Temperature';
import Weather from './components/Weather';

const key = process.env.KEY;


const dateBuilder = currentDate => {
  
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  let day = days[currentDate.getDay()];
  let date = currentDate.getDate();
  let month = months[currentDate.getMonth()];
  let year = currentDate.getFullYear();

  return `${day} ${date} ${month} ${year}`
}

function App() {

  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState('');

  const search = event => {
    if (event.key === "Enter") {
      fetch(`http://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&APPID=${key}`)
        .then(response => response.json())
        .then(data => {
          setWeather(data);
          setQuery('');
          console.log(data)
        });
      }
  }

  return (
    <Background>
      <GlobalStyle />
      <main>
          <InputSearch
            type="text"
            className="search-bar"
            placeholder="Search..."
            onChange={event => setQuery(event.target.value)}
            value={query}
            onKeyPress={search}
          />
          {(typeof weather.main != "undefined") ? (
            <LocationWrapper>
              <h1>{weather.name}, {weather.sys.country}</h1>
              <DateWrapper>{dateBuilder(new Date())}</DateWrapper>
              <div>
                <Temperature>{Math.round(weather.main.temp)}°c</Temperature>
                <Weather>{weather.weather[0].main}</Weather>
              </div>
            </LocationWrapper>
          ) : ('')}
      </main>
    </Background>
  )
};

export default App;