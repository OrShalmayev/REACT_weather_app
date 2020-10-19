// Packages
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

// Style
import './App.scss';

// Components
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

// Context
import {WeatherProvider, WeatherContext} from './context/context';

function App() {
  console.log(React.useContext(WeatherContext));

  return (
    <div className="App">
      <BrowserRouter>{/* inside Main */}
        <WeatherProvider>
          <Header />
          <Main />  
          <Footer />
        </WeatherProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
