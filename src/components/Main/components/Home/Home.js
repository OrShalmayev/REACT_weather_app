import React from 'react';
import './Home.scss';

/**
* Context
**/
import {WeatherContext} from '../../../../context/context';

// Components
import Search from './components/Search/Search';
import SelectedCity from './components/SelectedCity/SelectedCity';

const Home = () => {
  const { weather } = React.useContext(WeatherContext);

  // React.useEffect(()=> {
  //   // weather context changed
  // }, [weather])

  return (
  <section className="Home">
    {/* SEARCH */}
    <Search />
    {/* CITY SEARCHED FOR */}
    <div className="Home__results">
      {
        ( weather && weather.selectedCity && Object.keys(weather.selectedCityData).length )
          ? 
          <SelectedCity weather={weather}></SelectedCity>
          : <div>City Not Selected</div>
      }
    </div>
  </section>
  );
} ////END HOME



export default Home;
