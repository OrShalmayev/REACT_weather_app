import React from 'react';
import './Home.scss';
import _ from 'underscore';

import Loading from '../../../shared/Loading/Loading';
/**
* Context
**/
import {WeatherContext} from '../../../../context/context';

// Components
import Search from './components/Search/Search';
import SelectedCity from './components/SelectedCity/SelectedCity';

const Home = () => {
  const { weather } = React.useContext(WeatherContext);

  return (
  <section className="Home">
    {/* SEARCH */}
    <Search />
    {/* CITY SEARCHED FOR */}
    <div className="Home__results">
      {
        ( weather && weather.selectedCity && _.isEmpty(Object.keys(weather.selectedCityData)) === false )
          ?
          (weather.loading===true) ? <Loading /> :  <SelectedCity />
          : <div>City Not Selected</div>
      }
    </div>
  </section>
  );
} ////END HOME



export default Home;
