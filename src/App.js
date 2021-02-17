import React from 'react';

import GlobalStyle from './components/GlobalStyle';
import Background from './components/Background';
import InputSearch from './components/InputSearch';

// const key = process.env.KEY;

// api.openweathermap.org/data/2.5/

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
      </main>
    </Background>
  )
};

export default App;