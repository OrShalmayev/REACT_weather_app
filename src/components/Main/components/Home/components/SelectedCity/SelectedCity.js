import React from 'react';
import './SelectedCity.scss';

/**
* Context
**/
import {WeatherContext} from '../../../../../../context/context';

const SelectedCity = () => {
  const {weather, Helper} = React.useContext(WeatherContext);

  React.useEffect(()=>{
    console.log('SelectedCity component wheather var changed***', weather, Helper)

    if(weather.selectedCityData.DailyForecasts[0]){
      console.log('ftoc*****',)
      
    }
  },[weather])

  return (
    <React.Fragment>
      {/* TOP */}
      <div className="top">
        <figure className="top__city">
          <img src="" alt="City Image"/>
          <figcaption className="city-name">
            {weather.SelectedCity && weather.SelectedCity}
            <span className="city-celsious">
              {weather.selectedCityData.DailyForecasts[0] && Helper.fToC(weather.selectedCityData.DailyForecasts[0].Temperature.Maximum.Value)}&#8451;
              </span>
          </figcaption>
        </figure>
        <div className="top__actions">
          <button>Add to Favorites</button>
        </div>
      </div>
      {/* MIDDLE */}
      <div className="middle">
        <h2>{weather.selectedCityData.Headline && weather.selectedCityData.Headline.Text}</h2>
      </div>
      {/* BOTTOM */}
      <div className="bottom">
        {/* BOX # */}
        {weather.selectedCityData.DailyForecasts && weather.selectedCityData.DailyForecasts.map((val, index)=>{
          return (
            <div className="bottom__box">
              <div className="bottom__box-date">{new Date(val.Date).toDateString()}</div>
              <div className="bottom__box-degree">{`Minimum Temp: ${val.Temperature.Minimum.Value} ${val.Temperature.Minimum.Unit}`}</div>
              <div className="bottom__box-degree">{`Maximum Temp: ${val.Temperature.Maximum.Value} ${val.Temperature.Maximum.Unit}`}</div>
              <h4>Day:</h4>
              <div className="bottom__box-day">{val.Day.Icon}</div>
              <div className="bottom__box-icon">{val.Day.IconPhrase}</div>
              <hr />
              <h4>Night:</h4>
              <div className="bottom__box-day">{val.Night.Icon}</div>
              <div className="bottom__box-icon">{val.Night.IconPhrase}</div>
            </div>
          )
        })}

      </div>{/* END bottom */}
    </React.Fragment>
  );
}

SelectedCity.propTypes = {};

SelectedCity.defaultProps = {};

export default SelectedCity;
