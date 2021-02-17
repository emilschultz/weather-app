import React from 'react';

import GlobalStyle from './components/GlobalStyle';
import Background from './components/Background';
import LocationWrapper from './components/LocationWrapper';
import InputSearch from './components/InputSearch';


// const key = process.env.KEY;

// api.openweathermap.org/data/2.5/

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
  return (
    <Background>
      <GlobalStyle />
      <main>
          <InputSearch
            type="text"
            className="search-bar"
            placeholder="Search weather..."
          />
          <LocationWrapper>
            <div>New York City, US</div>
            <div>{dateBuilder(new Date())}</div>
            <div>
              -2 deg celsius
            </div>
            <div>
              Snowy
            </div>
          </LocationWrapper>
      </main>
    </Background>
  )
};

export default App;